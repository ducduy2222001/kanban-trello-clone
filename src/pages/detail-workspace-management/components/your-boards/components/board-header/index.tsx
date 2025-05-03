import React from "react";
import { Stack } from "@mui/material";

import { IBoard } from "../../types";

interface IBoardHeaderProps {
  boardHeader: IBoard;
}
const BoardHeader = (props: IBoardHeaderProps) => {
  const { boardHeader } = props;
  return (
    <Stack
      component={"header"}
      direction={"row"}
      sx={{
        padding: "12px 18px",
        backdropFilter: "blur(4px)",
        borderBottom: "1px solid #0e162f29",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      {boardHeader.title}
    </Stack>
  );
};

export default BoardHeader;
