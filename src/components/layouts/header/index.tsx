import React, { useState } from "react";
import {
  AddOutlined,
  Apps,
  HelpOutline,
  NotificationsOutlined
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Box, IconButton, Stack, TextField } from "@mui/material";
import UIDropdown from "common/ui-dropdown";

import { ETypeDropDown, LIST_DROP_DOWN } from "./types";

import styles from "./index.module.scss";

interface IHeaderProps {
  blurBg: boolean;
}
const Header = (props: IHeaderProps) => {
  const { blurBg } = props;

  const [optionsDropdown] = useState({
    [ETypeDropDown.Workspaces]: [
      { key: 0, text: "CAPSTONE1" },
      { key: 1, text: "CAPSTONE2" }
    ],
    [ETypeDropDown.Recent]: [
      { key: 0, text: "CAPSTONE1" },
      { key: 1, text: "CAPSTONE2" }
    ],
    [ETypeDropDown.Starred]: [
      { key: 0, text: "CAPSTONE1" },
      { key: 1, text: "CAPSTONE2" }
    ],
    [ETypeDropDown.More]: [
      { key: 0, text: "CAPSTONE1" },
      { key: 1, text: "CAPSTONE2" }
    ]
  });
  const newListDropDown = LIST_DROP_DOWN.map((item) => ({
    ...item,
    options: optionsDropdown[item.key]
  }));

  return (
    <Stack
      component={"header"}
      direction={"row"}
      sx={{
        height: 32,
        padding: 1,
        borderBottom: "1px solid #0e162f29",
        alignItems: "center",
        justifyContent: "space-between",
        backdropFilter: "blur(200px)"
      }}
    >
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        <Box display={"flex"}>
          <IconButton onClick={() => {}} sx={{ height: 32, width: 32 }}>
            <Apps sx={{ fontSize: 20 }} />
          </IconButton>
          <a
            href="/boards"
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
              bgcolor: "#0a56c9"
            }
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
              padding: "0 8px"
            },
            "& .MuiOutlinedInput-input": {
              padding: 0,
              "&::placeholder": {
                fontSize: "14px",
                color: "#888"
              }
            },
            fontSize: 14
          }}
          slotProps={{
            input: {
              startAdornment: (
                <IconButton
                  sx={{
                    padding: 0
                  }}
                >
                  <SearchIcon
                    sx={{ height: 20, width: 20, paddingRight: "4px" }}
                  />
                </IconButton>
              )
            }
          }}
        />
        <IconButton
          color="inherit"
          sx={{
            height: 32,
            width: 32,
            marginLeft: "6px"
          }}
        >
          <NotificationsOutlined
            sx={{
              height: 23,
              width: 23,
              transform: "rotate(45deg)"
            }}
          />
        </IconButton>
        <IconButton
          color="inherit"
          sx={{
            height: 32,
            width: 32
          }}
        >
          <HelpOutline
            sx={{
              height: 23,
              width: 23
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
