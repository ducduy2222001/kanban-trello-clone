import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Add,
  Dashboard,
  NavigateNext,
  Settings,
  SupervisorAccount
} from "@mui/icons-material";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import {
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Stack,
  Typography
} from "@mui/material";
import { ITypeButtonIcon } from "common/types-common";
import UIAvatar from "common/ui-avatar";

enum EItemsBtnOfDrawer {
  Boards,
  Members,
  WorkspaceSettings
}
interface IItemBoard {
  key: string;
  image: string;
  title: string;
}

interface IYourBoards {
  nameProject: string;
  items: IItemBoard[];
}

interface IDrawerMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ItemsBtnOfDrawer: ITypeButtonIcon[] = [
  {
    key: EItemsBtnOfDrawer.Boards,
    text: "Boards",
    icon: (
      <Dashboard
        sx={{
          width: "16px",
          height: "16px"
        }}
      />
    ),
    link: (nameProject: string) => `${nameProject.toLowerCase()}`
  },
  {
    key: EItemsBtnOfDrawer.Members,
    text: "Members",
    icon: (
      <SupervisorAccount
        sx={{
          width: "16px",
          height: "16px"
        }}
      />
    ),
    link: (nameProject: string) => `${nameProject.toLowerCase()}/members`
  },
  {
    key: EItemsBtnOfDrawer.WorkspaceSettings,
    text: "Workspace settings",
    icon: (
      <Settings
        sx={{
          width: "16px",
          height: "16px"
        }}
      />
    ),
    link: (nameProject: string) => `${nameProject.toLowerCase()}/account`
  }
];

const DrawerMenu = (props: IDrawerMenuProps) => {
  const { isOpen, setIsOpen } = props;
  const navigation = useNavigate();
  //call api end then setListBoards
  const [listBoards] = useState<IYourBoards>({
    nameProject: "CAPSTONE1",
    items: [
      {
        key: window.crypto.randomUUID(),
        image: "",
        title: "CSW Daily"
      },
      {
        key: window.crypto.randomUUID(),
        image: "",
        title: "CSW Daily 1"
      }
    ]
  });

  return (
    <Box>
      <IconButton
        sx={{
          position: "fixed",
          top: "65px",
          left: isOpen ? "-84px" : "5px",
          width: "24px",
          height: "24px",
          bgcolor: "rgba(0, 0, 0, 0.15)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(0, 0, 0, 0.2)",
          zIndex: 1300,
          transition: "left 0.2s ease-in-out",
          "&:hover": {
            bgcolor: "#e5e5e5"
          }
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <NavigateNext sx={{ color: "#44546F", fontSize: "15px" }} />
      </IconButton>
      <Box
        sx={{
          zIndex: 0,
          width: "260px",
          position: "relative",
          transition: "left 0.3s ease-in-out",
          left: isOpen ? "0px" : "-242px",
          backdropFilter: "blur(80px)",
          borderRight: "1.5px solid rgba(255, 255, 255, 0.12)",
          pointerEvents: isOpen ? "unset" : "none"
        }}
      >
        {isOpen && <Divider />}
        <Box>
          <Stack
            sx={{
              padding: "8px 12px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: isOpen ? "1px solid #dfe1e6" : "unset"
            }}
          >
            <UIAvatar
              name={"Capstone 1"} //vài bữa lấy name từ props
              secondaryText="Free"
              size={32}
              sx={{ fontWeight: "600" }}
            />
            <IconButton
              sx={{
                borderRadius: "3px",
                width: "32px",
                height: "32px",
                "&:hover": {
                  bgcolor: "#e5e5e5"
                }
              }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <ChevronLeftRoundedIcon sx={{ color: "#44546F" }} />
            </IconButton>
          </Stack>
          <Box
            sx={{
              height: "calc(100vh - 56px - 49px)",
              overflowX: "hidden",
              overflowY: isOpen ? "auto" : "hidden",
              "&::-webkit-scrollbar": {
                width: "10px"
              },
              "&::-webkit-scrollbar-track": {
                background: "#f1f1f1"
              },
              "&::-webkit-scrollbar-thumb": {
                background: "rgba(136, 136, 136, 0.5)",
                backdropFilter: "blur(16px)"
              },
              "&::-webkit-scrollbar-button:single-button:decrement": {
                background:
                  'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path fill="%23888" d="M12 8l-6 6h12z"/></svg>\') no-repeat center',
                height: "10px",
                backgroundSize: "contain"
              },
              "&::-webkit-scrollbar-button:single-button:increment": {
                background:
                  'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path fill="%23888" d="M12 16l6-6H6z"/></svg>\') no-repeat center',
                height: "10px",
                backgroundSize: "contain"
              }
            }}
          >
            <Stack paddingTop={"12px"}>
              <MenuList
                sx={{
                  minWidth: "256px",
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "0px",
                  overflowX: "hidden"
                }}
              >
                {ItemsBtnOfDrawer.map((item) => (
                  <MenuItem
                    key={item.key}
                    onClick={() => navigation(item?.link("CAPSTONE1"))}
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
                          height: 16
                        }
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      slotProps={{
                        primary: {
                          fontSize: "14px",
                          color: "#44546F",
                          fontWeight: 500
                        }
                      }}
                    />
                  </MenuItem>
                ))}
              </MenuList>
            </Stack>
            <Stack
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              padding="4px 12px"
            >
              <Typography fontSize={14} fontWeight={"bold"}>
                Your boards
              </Typography>
              <IconButton
                sx={{ borderRadius: "0px", width: "24px", height: "24px" }}
              >
                <Add sx={{ height: "16px", width: "16px" }} />
              </IconButton>
            </Stack>
            <Stack padding="4px 0">
              <MenuList
                sx={{
                  minWidth: "256px",
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "0px",
                  overflowX: "hidden"
                }}
              >
                {listBoards.items.map((item) => (
                  <MenuItem
                    key={item.key}
                    sx={{ gap: "8px" }}
                    onClick={() =>
                      navigation(
                        `${listBoards.nameProject.toLowerCase()}/myBoards/${encodeURIComponent(
                          item.title.replace(/\s+/g, "-").toLowerCase()
                        )}`
                      )
                    }
                  >
                    {/* cai nay them anh logo */}
                    <ListItemIcon
                      sx={{
                        minWidth: "24px !important",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "blue",
                        width: 20,
                        height: 20,
                        "& .MuiSvgIcon-root": {
                          width: 16,
                          height: 16
                        }
                      }}
                    />
                    <ListItemText
                      primary={item.title}
                      slotProps={{
                        primary: {
                          fontSize: "14px",
                          fontWeight: 500
                        }
                      }}
                    />
                  </MenuItem>
                ))}
              </MenuList>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DrawerMenu;
