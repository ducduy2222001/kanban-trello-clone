import React, { useEffect, useState } from "react";
import {
  defaultDropAnimationSideEffects,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

import { mapOrder } from "utils/sort";

import ListColumn from "../list-column";
import Column from "../list-column/column";
import CardItem from "../list-column/column/list-card/card";

import { IBoard, IColumn } from "./../../types";

enum EActiveDragItemType {
  Card = "Card",
  Column = "Column"
}
interface IBoardContentProps {
  dataBoard: IBoard;
}

const BoardContent = (props: IBoardContentProps) => {
  const { dataBoard } = props;

  const [orderColumnsState, setOrderColumnsState] = useState<IColumn[]>([]);

  const [activeDragItemId, setActiveDragItemId] = useState<string | null>(null);
  const [activeDragItemType, setActiveDragItemType] = useState<string | null>(
    null
  );
  const [activeDragItemData, setActiveDragItemData] = useState<any>(null);

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 }
  });
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 }
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 500 }
  });

  const sensors = useSensors(mouseSensor, touchSensor, pointerSensor);

  const handeDragStart = (event: DragStartEvent) => {
    if (event) {
      setActiveDragItemId(event?.active?.id as string);
      setActiveDragItemType(
        event?.active?.data?.current?.columnId
          ? EActiveDragItemType.Card
          : EActiveDragItemType.Column
      );
      setActiveDragItemData(event?.active?.data?.current);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const orderIndex = orderColumnsState.findIndex(
        (c) => c._id === active?.id
      );
      const newIndex = orderColumnsState.findIndex((c) => c._id === over?.id);

      const dndOrderedColumns = arrayMove(
        orderColumnsState,
        orderIndex,
        newIndex
      );
      setOrderColumnsState(dndOrderedColumns);
    }
    setActiveDragItemId(null);
    setActiveDragItemType(null);
    setActiveDragItemData(null);
  };

  useEffect(() => {
    const orderColumns = mapOrder(
      dataBoard.columns,
      dataBoard.columnOrderIds,
      "_id"
    );
    setOrderColumnsState(orderColumns);
  }, [dataBoard]);

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: { active: { opacity: "0.5" } }
    })
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handeDragStart}
      onDragEnd={handleDragEnd}
    >
      <ListColumn columns={orderColumnsState} />;
      <DragOverlay dropAnimation={dropAnimation}>
        {activeDragItemId &&
        activeDragItemType === EActiveDragItemType.Column ? (
          <Column column={activeDragItemData} />
        ) : (
          <CardItem cardItem={activeDragItemData} />
        )}
      </DragOverlay>
    </DndContext>
  );
};

export default BoardContent;
