import React, { useEffect, useState } from "react";
import {
  defaultDropAnimationSideEffects,
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import _ from "lodash";

import { mapOrder } from "utils/sort";

import ListColumn from "../list-column";
import Column from "../list-column/column";
import CardItem from "../list-column/column/list-card/card";

import { IBoard, ICard, IColumn } from "./../../types";

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

  const findColumnByCardId = (cardId: string) => {
    return orderColumnsState?.find((column) =>
      column?.cards?.map((card) => card?._id)?.includes(cardId)
    );
  };

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

  const handleDragOver = (event: DragOverEvent) => {
    console.log("🚀 ~ handleDragOver ~ event:", event);
    const { active, over } = event;
    if (activeDragItemType === EActiveDragItemType.Column || !over || !active)
      return;

    const {
      id: activeDraggingCardId,
      data: { current: activeDraggingCardData }
    } = active;

    const { id: overCardId } = over;

    const activeColumn = findColumnByCardId(activeDraggingCardId as string);
    const overColumn = findColumnByCardId(overCardId as string);

    if (!activeColumn || !overColumn) return;

    if (activeColumn._id !== overColumn._id) {
      setOrderColumnsState((prevColumn) => {
        const overCardIndex = overColumn?.cards?.findIndex(
          (card) => card._id === overCardId
        );

        // logic add item both 2 column
        const isBelowOverItem =
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height;
        const modifier = isBelowOverItem ? 1 : 0;
        let newCardIndex =
          overCardIndex >= 0
            ? overCardIndex + modifier
            : overColumn?.cards?.length + 1;
        const nextColumns = _.cloneDeep(prevColumn);
        const nextActiveColumn = nextColumns.find(
          (column) => column._id === activeColumn._id
        );
        const nextOverColumn = nextColumns.find(
          (column) => column._id === overColumn._id
        );

        // column old
        if (nextActiveColumn) {
          nextActiveColumn.cards = nextActiveColumn.cards.filter(
            (card) => card._id !== activeDraggingCardId
          );

          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(
            (card) => card._id
          );
        }

        // column new
        if (nextOverColumn) {
          nextOverColumn.cards = nextOverColumn.cards.filter(
            (card) => card._id !== activeDraggingCardId
          );

          nextOverColumn.cards = [
            ...nextOverColumn.cards.slice(0, newCardIndex),
            activeDraggingCardData as ICard,
            ...nextOverColumn.cards.slice(newCardIndex)
          ];

          nextOverColumn.cardOrderIds = nextOverColumn.cards.map(
            (card) => card._id
          );
        }
        return nextColumns;
      });
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
      onDragOver={handleDragOver}
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
