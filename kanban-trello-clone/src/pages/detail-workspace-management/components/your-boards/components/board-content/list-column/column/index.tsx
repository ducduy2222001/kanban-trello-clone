import React from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TableViewIcon from "@mui/icons-material/TableView";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import ListCard from "./list-card";

const Column = () => {
  return (
    <Box
      sx={{
        minWidth: "290px",
        ml: 2,
        borderRadius: "15px",
        bgcolor: "#f1f2f4",
        height: "fit-content",
        maxHeight: "calc(100vh - 100px)"
      }}
    >
      <HeaderContent />
      <ListCard />
      <FooterContent />
    </Box>
  );
};

export default Column;

const HeaderContent = () => {
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
      <Typography>Header</Typography>
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
