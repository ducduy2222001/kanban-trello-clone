import React from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Box, Button } from "@mui/material";

const AddOtherColumn = () => {
  return (
    <Box
      sx={{
        minWidth: "272px",
        maxWidth: "272px",
        mx: 2,
        borderRadius: "8px",
        height: "fit-content",
        bgcolor: "#ffffff3d"
      }}
    >
      <Button
        startIcon={<AddRoundedIcon />}
        sx={{
          color: "white",
          width: "100%",
          justifyContent: "flex-start",
          textTransform: "unset",
          fontWeight: 600,
          height: 44,
          padding: "12px"
        }}
      >
        Add another list
      </Button>
    </Box>
  );
};

export default AddOtherColumn;
