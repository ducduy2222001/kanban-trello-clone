import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Active,
  closestCorners,
  defaultDropAnimationSideEffects,
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  getFirstCollision,
  MouseSensor,
  Over,
  PointerSensor,
  pointerWithin,
  TouchSensor,
  UniqueIdentifier,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import _ from "lodash";

import { generatePlaceholderCard } from "utils/formatters";
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
  const [oldColumnWhenDaraggingCard, setOldColumnWhenDaraggingCard] =
    useState<IColumn | null>(null);

  // Điểm va chạm cuối cùng trước đó
  const lastOverId = useRef<UniqueIdentifier | null>(null);

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

  const moveCardBetweeDifferentColumns = (
    overColumn: IColumn,
    overCardId: UniqueIdentifier,
    active: Active,
    over: Over,
    activeColumn: IColumn,
    activeDraggingCardId: UniqueIdentifier,
    activeDraggingCardData: ICard
  ) => {
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

        //Thêm placeholder Card nếu column rỗng
        if (_.isEmpty(nextActiveColumn.cards)) {
          nextActiveColumn.cards = [generatePlaceholderCard(nextActiveColumn)];
        }

        nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(
          (card) => card._id
        );
      }

      // column new
      if (nextOverColumn) {
        // kiểm tra card đang kéo thả có tồn tại ở overColumn chưa, nếu có thì cần xóa nó trước
        nextOverColumn.cards = nextOverColumn.cards.filter(
          (card) => card._id !== activeDraggingCardId
        );

        // cập nhật lại chuẩn dữ liệu columnId trong card sau khi kéo card giữa 2 column khác nhau
        const rebuild_activeDraggingCardData = {
          ...activeDraggingCardData,
          columnId: nextOverColumn?._id
        };

        // tiếp theo là thêm card đang kéo vào overcolumn theo vị trí index mới
        nextOverColumn.cards = [
          ...nextOverColumn.cards.slice(0, newCardIndex),
          rebuild_activeDraggingCardData,
          ...nextOverColumn.cards.slice(newCardIndex)
        ];

        //Xóa cái placeholder card idd nếu nó đang tồn tại
        nextOverColumn.cards = nextOverColumn.cards.filter(
          (card) => !card.FE_Placeholder
        );

        // cập nhật lại mảng cardOrderIds cho chuẩn dữ liệu
        nextOverColumn.cardOrderIds = nextOverColumn.cards.map(
          (card) => card._id
        );
      }
      return nextColumns;
    });
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

      if (event?.active?.data?.current?.columnId) {
        setOldColumnWhenDaraggingCard(
          findColumnByCardId(event?.active?.id as string) || null
        );
      }
    }
  };

  const handleDragOver = (event: DragOverEvent) => {
    if (activeDragItemType === EActiveDragItemType.Column) return;

    const { active, over } = event;

    if (!active || !over) return;

    const {
      id: activeDraggingCardId,
      data: { current: activeDraggingCardData }
    } = active;

    const { id: overCardId } = over;

    const activeColumn = findColumnByCardId(activeDraggingCardId as string);
    const overColumn = findColumnByCardId(overCardId as string);

    if (!activeColumn || !overColumn) return;

    if (activeColumn._id !== overColumn._id) {
      moveCardBetweeDifferentColumns(
        overColumn,
        overCardId,
        active,
        over,
        activeColumn,
        activeDraggingCardId,
        activeDraggingCardData as ICard
      );
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!active || !over) return;

    if (activeDragItemType === EActiveDragItemType.Card) {
      const {
        id: activeDraggingCardId,
        data: { current: activeDraggingCardData }
      } = active;

      const { id: overCardId } = over;

      const activeColumn = findColumnByCardId(activeDraggingCardId as string);
      const overColumn = findColumnByCardId(overCardId as string);

      if (!activeColumn || !overColumn) return;

      if (oldColumnWhenDaraggingCard?._id !== overColumn._id) {
        //kéo thả card giữa 2 column
        moveCardBetweeDifferentColumns(
          overColumn,
          overCardId,
          active,
          over,
          activeColumn,
          activeDraggingCardId,
          activeDraggingCardData as ICard
        );
      } else {
        const orderCardIndex = oldColumnWhenDaraggingCard?.cards?.findIndex(
          (c) => c._id === activeDragItemId
        );
        const newCardIndex = overColumn?.cards?.findIndex(
          (c) => c._id === overCardId
        );

        const dndOrderedCard = arrayMove(
          oldColumnWhenDaraggingCard?.cards,
          orderCardIndex,
          newCardIndex
        );
        setOrderColumnsState((prev) => {
          const nextColumns = _.cloneDeep(prev);
          const targetColumn = nextColumns?.find(
            (column) => column._id === overColumn._id
          );
          if (targetColumn) {
            targetColumn.cards = dndOrderedCard;
            targetColumn.cardOrderIds = dndOrderedCard?.map((card) => card._id);
          }

          return nextColumns;
        });
      }
    }

    if (
      activeDragItemType === EActiveDragItemType.Column &&
      active.id !== over?.id
    ) {
      const orderCardIndex = orderColumnsState.findIndex(
        (c) => c._id === active?.id
      );
      const newColumnIndex = orderColumnsState.findIndex(
        (c) => c._id === over?.id
      );

      const dndOrderedColumns = arrayMove(
        orderColumnsState,
        orderCardIndex,
        newColumnIndex
      );
      setOrderColumnsState(dndOrderedColumns);
    }

    //reset
    setActiveDragItemId(null);
    setActiveDragItemType(null);
    setActiveDragItemData(null);
    setOldColumnWhenDaraggingCard(null);
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

  // Because the libary have issue so we need custom
  const collisionDetectionStrategy = useCallback(
    (args: any) => {
      if (activeDragItemType === EActiveDragItemType.Column) {
        return closestCorners({ ...args });
      }

      const pointerCollistions = pointerWithin(args);
      if (!pointerCollistions) return [];

      let overId = getFirstCollision(pointerCollistions, "id");
      if (overId) {
        const checkColumn = orderColumnsState.find(
          (column) => column._id === overId
        );
        if (checkColumn) {
          overId = closestCorners({
            ...args,
            droppableContainers: args.droppableContainers.filter(
              (container: any) => {
                return (
                  container._id !== overId &&
                  checkColumn?.cardOrderIds?.includes(container._id)
                );
              }
            )
          })[0]?.id;
        }

        lastOverId.current = overId;
        return [{ id: overId }];
      }
      return lastOverId.current ? [{ id: lastOverId.current }] : [];
    },
    [activeDragItemType, orderColumnsState]
  );

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handeDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      collisionDetection={collisionDetectionStrategy}
    >
      <ListColumn columns={orderColumnsState} />;
      <DragOverlay dropAnimation={dropAnimation}>
        {(!activeDragItemId || !activeDragItemType) && null}
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
