import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TableViewIcon from "@mui/icons-material/TableView";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import { mapOrder } from "utils/sort";

import { IColumn } from "../../../types";

import ListCard from "./list-card";

interface IColumnProps {
  column: IColumn;
}

interface IHeaderContentProps {
  title: string;
}

const Column = (props: IColumnProps) => {
  const { column } = props;
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: column._id, data: { ...column } });

  const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, "_id");

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    height: "100%",
    opacity: isDragging ? 0.5 : undefined
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <Box
        {...listeners}
        sx={{
          minWidth: "272px",
          ml: 2,
          borderRadius: "15px",
          bgcolor: "#f1f2f4",
          height: "fit-content",
          maxHeight: "calc(100vh - 100px)"
        }}
      >
        <HeaderContent title={column.title} />
        <ListCard cards={orderedCards} />
        <FooterContent />
      </Box>
    </div>
  );
};

export default Column;

const HeaderContent = (props: IHeaderContentProps) => {
  const { title } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        p: 1,
        "& .MuiButtonBase-root:hover": {
          bgcolor: "#091e4224"
        }
      }}
    >
      <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
        {title}
      </Typography>
      <Tooltip title="List action">
        <IconButton sx={{ borderRadius: "8px" }}>
          <MoreHorizIcon sx={{ fontSize: "16px" }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

const FooterContent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "4px",
        p: 1,
        "& .MuiButtonBase-root:hover": {
          bgcolor: "#091e4224"
        }
      }}
    >
      <Button
        variant="outlined"
        startIcon={<AddRoundedIcon />}
        sx={{
          flex: 1,
          justifyContent: "left",
          border: "unset",
          borderRadius: "8px",
          height: "32px",
          textTransform: "none",
          color: "#44546f",
          padding: "6px 12px 6px 8px"
        }}
      >
        Add a card
      </Button>
      <Tooltip title="Create from template">
        <IconButton sx={{ borderRadius: "8px" }}>
          <TableViewIcon sx={{ fontSize: "16px" }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
