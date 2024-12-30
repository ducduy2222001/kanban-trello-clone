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
  Typography,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";

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
            bgcolor: "#e5e5e5",
          },
          "&:active": {
            bgcolor: "#E9F2FF",
            color: "#0c66e4",
          },
          ".MuiButton-icon": {
            marginLeft: "4px",
          },
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
                  <Avatar
                    sx={{
                      bgcolor: deepOrange[500],
                      borderRadius: "4px",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    {item.text[0]}
                  </Avatar>
                  <Typography
                    flex={1}
                    marginBottom={0}
                    marginLeft={"12px"}
                    overflow={"hidden"}
                    fontSize={"14px"}
                    fontWeight={500}
                    textOverflow={"ellipsis"}
                    whiteSpace={"nowrap"}
                  >
                    {item.text}
                  </Typography>
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
