import React, { useState } from "react";
import {
  Avatar,
  Box,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";
import { ECollapseSlider } from "./types";

import {
  Dashboard,
  FavoriteBorder,
  GridView,
  SupervisorAccount,
  Settings,
} from "@mui/icons-material";
import { deepOrange } from "@mui/material/colors";
import { ITypeButtonIcon } from "../../../../../common/types-common";
import { useNavigate } from "react-router";

const ListCollapseSlider: ITypeButtonIcon[] = [
  {
    key: ECollapseSlider.Boards,
    text: "Boards",
    icon: (
      <Dashboard
        sx={{
          width: "16px",
          height: "16px",
        }}
      />
    ),
    link: (id: string) => `/${id}/boards`,
  },
  {
    key: ECollapseSlider.Highlights,
    text: "Highlights",
    icon: (
      <FavoriteBorder
        sx={{
          width: "16px",
          height: "16px",
        }}
      />
    ),
    link: (id: string) => `/${id}/highlights`,
  },
  {
    key: ECollapseSlider.View,
    text: "Views",
    icon: (
      <GridView
        sx={{
          width: "16px",
          height: "16px",
        }}
      />
    ),
    link: (id: string) => `/${id}/views/table`,
  },
  {
    key: ECollapseSlider.Members,
    text: "Members",
    icon: (
      <SupervisorAccount
        sx={{
          width: "16px",
          height: "16px",
        }}
      />
    ),
    link: (id: string) => `/${id}/members`,
  },
  {
    key: ECollapseSlider.Settings,
    text: "Settings",
    icon: (
      <Settings
        sx={{
          width: "16px",
          height: "16px",
        }}
      />
    ),
    link: (id: string) => `/${id}/settings`,
  },
];
const Collapse = () => {
  const navigate = useNavigate();
  const [listWorkSpaces, setListWorkSpaces] = useState([
    { title: "capstone 1", id: "capstone1" },
  ]);
  // call api and convert data to ListWorkSpaces
  const [selectedIndex, setSelectedIndex] = useState<any>(null);

  return (
    <Box>
      <SimpleTreeView
        sx={{
          "& .MuiTreeItem-content": {
            display: "flex",
            flexDirection: "inherit",
            alignItems: "center",
            justifyContent: "space-between",
          },
          "& .MuiTreeItem-iconContainer": {
            order: 2,
            marginLeft: "auto",
          },
        }}
      >
        {listWorkSpaces.map((item) => (
          <TreeItem
            itemId={item.id}
            label={
              <Stack direction={"row"} alignItems={"center"}>
                <Avatar
                  sx={{
                    bgcolor: deepOrange[500],
                    borderRadius: "4px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    height: "24px",
                    width: "24px",
                  }}
                >
                  {item.title[0]}
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
                  textTransform={"uppercase"}
                >
                  {item.title}
                </Typography>
              </Stack>
            }
            sx={{
              "& .MuiCollapse-root": {
                paddingLeft: "0px",
              },
              "& .MuiTreeItem-content": {
                height: "36px",
              },
            }}
          >
            {ListCollapseSlider.map((ite, index) => {
              const isSelected = selectedIndex === index;
              const color = isSelected ? "#0c66e4" : "#172b4d";
              return (
                <TreeItem
                  sx={{
                    "& .MuiTreeItem-content": {
                      height: "36px",
                      borderRadius: "8px",
                      gap: "4px",
                      marginTop: "4px",
                      bgcolor: isSelected ? "#E9F2FF" : "",
                      "&:hover": {
                        bgcolor: isSelected ? "#E9F2FF" : "#e5e5e5",
                      },
                    },
                  }}
                  onClick={() => {
                    setSelectedIndex(index);
                    navigate((ite.link as (id: string) => string)(item?.id));
                  }}
                  key={ite.key}
                  itemId={`${ite.key}-${window.crypto.randomUUID()}`}
                  label={
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      gap={"10px"}
                      padding={"4px 8px 4px 40px"}
                      sx={{
                        "& .MuiTreeItem-content": { height: "32px" },
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
                        {ite.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={ite.text}
                        slotProps={{
                          primary: {
                            fontSize: "14px",
                            fontWeight: 500,
                            color: color,
                          },
                        }}
                      />
                    </Stack>
                  }
                />
              );
            })}
          </TreeItem>
        ))}
      </SimpleTreeView>
    </Box>
  );
};

export default Collapse;