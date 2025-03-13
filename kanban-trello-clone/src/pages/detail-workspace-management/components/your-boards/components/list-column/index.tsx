import React from "react";
import {
  horizontalListSortingStrategy,
  SortableContext
} from "@dnd-kit/sortable";
import { Box } from "@mui/material";

import { IColumn } from "../../types";

import AddOtherColumn from "./addOtherColumn";
import Column from "./column";

interface IBListColumnProps {
  columns: IColumn[];
}

const ListColumn = (props: IBListColumnProps) => {
  const { columns } = props;

  return (
    <SortableContext
      items={columns.map((column) => column._id)}
      strategy={horizontalListSortingStrategy}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",
          overflowY: "hidden",
          height: "calc(100vh - 78px - 50px)",
          padding: "8px 0px"
        }}
      >
        {columns?.map((column) => (
          <Column column={column} key={column?._id} />
        ))}
        <AddOtherColumn />
      </Box>
    </SortableContext>
  );
};

export default ListColumn;
