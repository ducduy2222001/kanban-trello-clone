import React, { useState } from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { CalendarViewDayRounded, Dashboard, Home } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import Collapse from "./components/collapse";
import { ITypeButtonIcon } from "../../../common/types-common";

export enum EItemsSlider {
  Boards,
  Templates,
  Home,
}

const ItemsSlider: ITypeButtonIcon[] = [
  {
    key: EItemsSlider.Boards,
    text: "Boards",
    icon: (color: string) => (
      <Dashboard
        sx={{
          width: "16px",
          height: "16px",
          color: color,
        }}
      />
    ),
    link: "",
  },
  {
    key: EItemsSlider.Templates,
    text: "Templates",
    icon: (color: string) => (
      <CalendarViewDayRounded
        sx={{ width: "16px", height: "16px", color: color }}
      />
    ),
    link: "",
  },
  {
    key: EItemsSlider.Home,
    text: "Home",
    icon: (color: string) => (
      <Home sx={{ width: "16px", height: "16px", color: color }} />
    ),
    link: "",
  },
];
const Slider = () => {
  const [selectedIndex, setSelectedIndex] = useState<any>(null);

  return (
    <Stack>
      <MenuList
        sx={{
          minWidth: "256px",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          paddingTop: "0px",
          borderBottom: "1px solid #091e4224",
          overflowX: "hidden",
        }}
      >
        {ItemsSlider.map((item, index) => {
          const isSelected = selectedIndex === index;
          const color = isSelected ? "#0c66e4" : "#172b4d";
          return (
            <MenuItem
              key={index}
              onClick={() => setSelectedIndex(index)}
              sx={{
                borderRadius: "8px",
                color: color,
                height: "36px",
                padding: "6px 8px",
                bgcolor: isSelected ? "#E9F2FF" : "",
                "&:hover": {
                  bgcolor: isSelected ? "#E9F2FF" : "#e5e5e5",
                },
                cursor: "pointer",
                gap: "10px",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: "24px !important",
                  width: 16,
                  height: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  "& .MuiSvgIcon-root": {
                    width: 16,
                    height: 16,
                  },
                }}
              >
                {item.icon(color)}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                slotProps={{
                  primary: {
                    fontSize: "14px",
                    fontWeight: 500,
                    color: color,
                  },
                }}
              />
            </MenuItem>
          );
        })}
      </MenuList>
      <Stack
        sx={{
          paddingTop: "12px",
          gap: "4px",
          overflowY: "auto",
          overflowX: "hidden",
          maxHeight: "400px",
        }}
      >
        <Typography
          fontSize={12}
          padding={"8px 0 8px 12px"}
          color="#44546f"
          fontWeight={500}
          sx={{ width: "100%", boxSizing: "border-box" }}
        >
          Workspaces
        </Typography>
        <Collapse />
        <Collapse />
      </Stack>
    </Stack>
  );
};

export default Slider;
