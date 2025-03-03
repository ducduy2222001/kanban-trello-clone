import React from "react";
import { Stack } from "@mui/material";

const BoardHeader = () => {
  return (
    <Stack
      component={"header"}
      direction={"row"}
      sx={{
        height: 56,
        backdropFilter: "blur(4px)",
        borderBottom: "1px solid #0e162f29",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      Header
    </Stack>
  );
};

export default BoardHeader;
