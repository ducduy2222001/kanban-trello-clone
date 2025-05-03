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
        cursor: "pointer",
        maxWidth: 272,
        overflow: "unset",
        margin: "0 4px 8px 8px",
        boxShadow: cardItem?.FE_Placeholder ? "unset" : "0px 1px 1px #091e4240",
        bgcolor: cardItem?.FE_Placeholder ? "#f1f2f4" : "none",
        pointerEvents: cardItem?.FE_Placeholder ? "none" : "unset"
      }}
    >
      {cardItem?.cover && (
        <CardMedia
          sx={{ height: 200 }}
          image={cardItem.cover}
          title={cardItem.description}
        />
      )}
      <CardContent
        sx={{
          "&.MuiCardContent-root": {
            paddingBottom: "16px"
          }
        }}
      >
        {cardItem?.FE_Placeholder ? (
          <Typography
            sx={{ fontStyle: "italic", fontWeight: 400, color: "#575757" }}
          >
            No cards here
          </Typography>
        ) : (
          <Typography>{cardItem?.title}</Typography>
        )}
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {cardItem?.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardItem;
