import React from "react";
import { Box } from "@mui/material";

import Column from "./column";

const ListColumn = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        overflowY: "hidden",
        overflowX: "auto",
        height: "calc(100vh - 78px - 50px)",
        padding: "8px 0px"
      }}
    >
      <Column />
    </Box>
  );
};

export default ListColumn;
