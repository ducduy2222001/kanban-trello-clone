import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Avatar,
  Box,
  Button,
  ClickAwayListener,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import UIAvatar from "common/ui-avatar";

import { IUIDropdownProps } from "./types";

const UIDropdown = (props: IUIDropdownProps) => {
  const { title, options } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        variant="contained"
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
        sx={{
          borderRadius: 0.7,
          textTransform: "none",
          padding: "5px 10px",
          bgcolor: `${anchorEl ? "#E9F2FF" : "#fff"}`,
          color: `${anchorEl ? "#0c66e4" : "#44546f"}`,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
            bgcolor: "#e5e5e5"
          },
          "&:active": {
            bgcolor: "#E9F2FF",
            color: "#0c66e4"
          },
          ".MuiButton-icon": {
            marginLeft: "4px"
          }
        }}
      >
        {title}
      </Button>

      <Popper
        anchorEl={anchorEl}
        open={isOpen}
        placement="bottom-start"
        sx={{ width: 304 }}
      >
        <Paper sx={{ marginTop: "7px", borderRadius: "8px" }}>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList>
              {options.map((item) => (
                <MenuItem key={item.key} onClick={handleClose}>
                  <UIAvatar
                    name={item.text}
                    size={40}
                    sx={{ fontWeight: "500" }}
                  />
                </MenuItem>
              ))}
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </Box>
  );
};

export default UIDropdown;
