import React, { useEffect, useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import {
  horizontalListSortingStrategy,
  SortableContext
} from "@dnd-kit/sortable";

import { mapOrder } from "utils/sort";

import ListColumn from "../list-column";

import { IBoard, IColumn } from "./../../types";

interface IBoardContentProps {
  dataBoard: IBoard;
}
const BoardContent = (props: IBoardContentProps) => {
  const { dataBoard } = props;
  const [orderColumnsState, setOrderColumnsState] = useState<IColumn[]>([]);

  const handleDragEnd = (event: DragEndEvent) => {
    console.log("🚀 ~ handleDragEnd ~ event:", event);
  };

  useEffect(() => {
    const orderColumns = mapOrder(
      dataBoard.columns,
      dataBoard.columnOrderIds,
      "_id"
    );
    setOrderColumnsState(orderColumns);
  }, [dataBoard]);

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext
        items={dataBoard.columns.map((column) => column._id)}
        strategy={horizontalListSortingStrategy}
      >
        <ListColumn columns={orderColumnsState} />;
      </SortableContext>
    </DndContext>
  );
};

export default BoardContent;
