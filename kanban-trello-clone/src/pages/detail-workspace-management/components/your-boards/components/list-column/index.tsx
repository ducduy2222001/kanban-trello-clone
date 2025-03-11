import React from "react";
import { Box } from "@mui/material";

import { mapOrder } from "utils/sort";

import { IColumn } from "../../types";

import AddOtherColumn from "./addOtherColumn";
import Column from "./column";

interface IBListColumnProps {
  columns: IColumn[];
}

const ListColumn = (props: IBListColumnProps) => {
  const { columns } = props;
  const handleOrderCards = (column: IColumn) => {
    return mapOrder(column?.cards, column?.cardOrderIds, "_id");
  };
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
      {columns?.map((column) => (
        <Column
          column={column}
          key={column?._id}
          cards={handleOrderCards(column)}
        />
      ))}
      <AddOtherColumn />
    </Box>
  );
};

export default ListColumn;
