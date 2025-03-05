"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import { mockData } from "apis/mockData";

import { mapOrder } from "utils/sort";

import BoardHeader from "./components/board-header";
import ListColumn from "./components/list-column";
import { IBoard } from "./types";

const YourBoards = () => {
  const [dataBoard] = useState<IBoard>(mockData.board as IBoard);
  const orderedColumn = mapOrder(
    dataBoard?.columns,
    dataBoard?.columnOrderIds,
    "_id"
  );
  return (
    <Box>
      <BoardHeader boardHeader={dataBoard} />
      <ListColumn columns={orderedColumn} />
    </Box>
  );
};

export default YourBoards;
