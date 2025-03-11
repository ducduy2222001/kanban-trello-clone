import React, { useState } from "react";
import { Box } from "@mui/material";
import { mockData } from "apis/mockData";

import BoardContent from "./components/board-content";
import BoardHeader from "./components/board-header";
import { IBoard } from "./types";

const YourBoards = () => {
  const [dataBoard] = useState<IBoard>(mockData.board as IBoard);
  return (
    <Box>
      <BoardHeader boardHeader={dataBoard} />
      <BoardContent dataBoard={dataBoard} />
    </Box>
  );
};

export default YourBoards;
