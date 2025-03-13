import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import { ICard } from "./../../../../../types";

interface ICardItemProps {
  cardItem: ICard;
}

const CardItem = (props: ICardItemProps) => {
  const { cardItem } = props;
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: cardItem._id, data: { ...cardItem } });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? "0.5" : undefined
  };
  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      sx={{
        maxWidth: 272,
        overflow: "unset",
        margin: "0 4px 8px 8px",
        boxShadow: "0px 1px 1px #091e4240"
      }}
    >
      {cardItem?.cover && (
        <CardMedia
          sx={{ height: 200 }}
          image={cardItem.cover}
          title={cardItem.description}
        />
      )}
      <CardContent>
        <Typography>{cardItem?.title}</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {cardItem?.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardItem;
