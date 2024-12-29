import React, { useState } from "react";
import { Stack, IconButton, Box, Avatar } from "@mui/material";
import { Apps } from "@mui/icons-material";
import styles from "./index.module.scss";

import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  NotificationsOutlined,
  HelpOutline,
  AddOutlined,
} from "@mui/icons-material";
import { ETypeDropDown, LIST_DROP_DOWN } from "./types";
import UIDropdown from "../../../common/ui-dropdown";

const Header = () => {
  const [optionsDropdown] = useState({
    [ETypeDropDown.Workspaces]: [
      { key: 0, text: "CAPSTONE1" },
      { key: 1, text: "CAPSTONE2" },
    ],
    [ETypeDropDown.Recent]: [
      { key: 0, text: "CAPSTONE1" },
      { key: 1, text: "CAPSTONE2" },
    ],
    [ETypeDropDown.Starred]: [
      { key: 0, text: "CAPSTONE1" },
      { key: 1, text: "CAPSTONE2" },
    ],
    [ETypeDropDown.More]: [
      { key: 0, text: "CAPSTONE1" },
      { key: 1, text: "CAPSTONE2" },
    ],
  });
  const newListDropDown = LIST_DROP_DOWN.map((item) => ({
    ...item,
    options: optionsDropdown[item.key],
  }));

  return (
    <Stack
      component={"header"}
      direction={"row"}
      height={32}
      padding={1}
      borderBottom={"1px solid #0e162f29"}
      bgcolor={"#fff"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        <Box display={"flex"}>
          <IconButton onClick={() => {}} sx={{ height: 32, width: 32 }}>
            <Apps sx={{ fontSize: 20 }} />
          </IconButton>
          <a
            href="/"
            className={`${styles.logoContainer} ${styles.logoLink}`}
            aria-label="Back to home"
          >
            <div className={styles.logoWrapper}>
              <div className={styles.logoImage} data-loading="false"></div>
            </div>
          </a>
        </Box>
        {newListDropDown.map((item) => (
          <UIDropdown key={item.key} title={item.text} options={item.options} />
        ))}
        <IconButton
          sx={{
            bgcolor: "#0c66e4",
            borderRadius: "3px",
            width: "32px",
            height: "32px",
            "&:hover": {
              bgcolor: "#0a56c9",
            },
          }}
        >
          <AddOutlined sx={{ color: "#fff" }} />
        </IconButton>
      </Stack>
      <Stack direction={"row"} alignItems={"center"}>
        <TextField
          placeholder="Search"
          variant="outlined"
          size="small"
          sx={{
            width: 200,
            "& .MuiOutlinedInput-root": {
              height: 32,
              padding: "0 8px",
            },
            "& .MuiOutlinedInput-input": {
              padding: 0,
              "&::placeholder": {
                fontSize: "14px",
                color: "#888",
              },
            },
            fontSize: 14,
          }}
          slotProps={{
            input: {
              startAdornment: (
                <IconButton
                  sx={{
                    padding: 0,
                  }}
                >
                  <SearchIcon
                    sx={{ height: 20, width: 20, paddingRight: "4px" }}
                  />
                </IconButton>
              ),
            },
          }}
        />
        <IconButton
          color="inherit"
          sx={{
            height: 32,
            width: 32,
            marginLeft: "6px",
          }}
        >
          <NotificationsOutlined
            sx={{
              height: 23,
              width: 23,
              transform: "rotate(45deg)",
            }}
          />
        </IconButton>
        <IconButton
          color="inherit"
          sx={{
            height: 32,
            width: 32,
          }}
        >
          <HelpOutline
            sx={{
              height: 23,
              width: 23,
            }}
          />
        </IconButton>
        <IconButton>
          <Avatar alt="Remy Sharp" src="" sx={{ width: 23, height: 23 }} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Header;
