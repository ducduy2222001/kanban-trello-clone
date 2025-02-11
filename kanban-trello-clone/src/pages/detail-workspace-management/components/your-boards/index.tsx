import React from "react";
import { Box } from "@mui/material";

import BoardContent from "./components/board-content";
import BoardHeader from "./components/board-header";

const YourBoards = () => {
  return (
    <Box>
      <BoardHeader />
      <BoardContent />
    </Box>
  );
};

export default YourBoards;
