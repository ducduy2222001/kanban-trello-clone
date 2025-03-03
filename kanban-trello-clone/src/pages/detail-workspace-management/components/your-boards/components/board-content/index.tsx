import React from "react";
import { Box } from "@mui/material";

import ListColumn from "./list-column";

const BoardContent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        overflowY: "hidden",
        overflowX: "auto",
        height: "calc(100vh - 78px)"
      }}
    >
      <ListColumn />
    </Box>
  );
};

export default BoardContent;
