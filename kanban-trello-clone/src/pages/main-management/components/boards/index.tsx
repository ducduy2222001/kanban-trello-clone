import React, { useState } from "react";
import {
  Dashboard,
  FavoriteBorder,
  GridView,
  QueryBuilder,
  Settings,
  SupervisorAccount
} from "@mui/icons-material";
import { Avatar, Box, Button, Grid2, Stack, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { ITypeButtonIcon } from "common/types-common";
import CardBoard from "pages/main-management/common/cardBoard";

interface ICard {
  id: string;
  title: string;
  image: string;
}

interface ILayoutCardProps {
  items: ICard[];
}

interface IWorkSpace {
  id: string;
  nameProject: string;
  countMembers: number;
  taskList: ICard[];
}

enum EMenuWorkSpace {
  Boards,
  View,
  Members,
  Settings
}

const ListButtonWorkSpace: ITypeButtonIcon[] = [
  {
    key: EMenuWorkSpace.Boards,
    text: "Boards",
    icon: (
      <Dashboard
        sx={{
          width: "16px",
          height: "16px"
        }}
      />
    ),
    link: (id: string) => `/${id}/boards`
  },
  {
    key: EMenuWorkSpace.View,
    text: "Views",
    icon: (
      <GridView
        sx={{
          width: "16px",
          height: "16px"
        }}
      />
    ),
    link: (id: string) => `/${id}/views/table`
  },
  {
    key: EMenuWorkSpace.Members,
    text: "Members",
    icon: (
      <SupervisorAccount
        sx={{
          width: "16px",
          height: "16px"
        }}
      />
    ),
    link: (id: string) => `/${id}/members`
  },
  {
    key: EMenuWorkSpace.Settings,
    text: "Settings",
    icon: (
      <Settings
        sx={{
          width: "16px",
          height: "16px"
        }}
      />
    ),
    link: (id: string) => `/${id}/settings`
  }
];
const LayoutCard = (props: ILayoutCardProps) => {
  const { items } = props;
  return (
    <Grid2
      container
      spacing={2}
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(auto-fill, minmax(100%, 1fr))",
          sm: "repeat(auto-fill, minmax(48%, 1fr))",
          md: "repeat(auto-fill, minmax(19%, 1fr))",
          lg: "repeat(auto-fill, minmax(20%, 1fr))"
        },
        columnGap: "2%",
        rowGap: "20px"
      }}
    >
      {items.map((item) => (
        <Grid2 key={item.id}>
          <CardBoard title={item.title} image={item.image} />
        </Grid2>
      ))}
    </Grid2>
  );
};

const Boards = () => {
  const [dataRecentlyViewed, setDataRecentlyViewed] = useState<ICard[]>([
    {
      id: "1",
      title: "CSW SPRINT 1_CODING",
      image: ""
    },
    { id: "2", title: "CSW SPRINT 2_CODING", image: "" },
    {
      id: "3",
      title: "CSW SPRINT 3_CODING",
      image: ""
    },
    {
      id: "4",
      title: "CSW SPRINT 4_CODING",
      image: ""
    }
  ]);

  const [dataWorkSpaceList, setDataWorkSpaceList] = useState<IWorkSpace[]>([
    {
      id: "1",
      nameProject: "CAPSTONE 1",
      countMembers: 10,
      taskList: [
        {
          id: "1",
          title: "CSW SPRINT 1_CODING",
          image: ""
        },
        {
          id: "2",
          title: "CSW SPRINT 2_CODING",
          image: ""
        },
        {
          id: "3",
          title: "CSW SPRINT 3_CODING",
          image: ""
        },
        {
          id: "4",
          title: "CSW SPRINT 4_CODING",
          image: ""
        },
        {
          id: "5",
          title: "CSW SPRINT 5_CODING",
          image: ""
        },
        {
          id: "",
          title: "CSW SPRINT 6_CODING",
          image: ""
        }
      ]
    },
    {
      id: "2",
      nameProject: "CAPSTONE 2",
      countMembers: 10,
      taskList: [
        {
          id: "1",
          title: "CSW SPRINT 1_CODING",
          image: ""
        },
        {
          id: "2",
          title: "CSW SPRINT 2_CODING",
          image: ""
        },
        {
          id: "3",
          title: "CSW SPRINT 3_CODING",
          image: ""
        },
        {
          id: "4",
          title: "CSW SPRINT 4_CODING",
          image: ""
        }
      ]
    }
  ]);

  return (
    <Box>
      <Box paddingBottom={"24px"}>
        <Stack direction="row" spacing={1.5} margin={"0 0 12px 3px"}>
          <QueryBuilder
            sx={{ width: "24px", height: "24px", color: "#42526e" }}
          />
          <Typography fontSize={16} fontWeight={600}>
            Recently viewed
          </Typography>
        </Stack>
        <LayoutCard items={dataRecentlyViewed} />
      </Box>
      <Box paddingBottom={"24px"}>
        <Typography
          fontSize={16}
          fontWeight={700}
          color={"#44546f"}
          textTransform={"uppercase"}
          lineHeight={"24px"}
          margin={"20px 0"}
          fontFamily={
            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Droid Sans, Helvetica Neue, sans-serif"
          }
        >
          YOUR WORKSPACES
        </Typography>
        {dataWorkSpaceList.map((item) => (
          <Stack key={window.crypto.randomUUID()} paddingBottom={"40px"}>
            <Stack
              marginBottom={"16px"}
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row"
                },
                justifyContent: "space-between"
              }}
            >
              <Stack direction={"row"} alignItems={"center"}>
                <Avatar
                  sx={{
                    bgcolor: deepOrange[500],
                    borderRadius: "4px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    height: "32px",
                    width: "32px"
                  }}
                >
                  {item.nameProject[0]}
                </Avatar>
                <Typography
                  flex={1}
                  marginBottom={0}
                  marginLeft={"12px"}
                  overflow={"hidden"}
                  fontSize={"16px"}
                  fontWeight={700}
                  textTransform={"uppercase"}
                >
                  {item.nameProject}
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"center"}
                gap={"8px"}
                sx={{
                  display: {
                    xs: "grid",
                    sm: "grid",
                    md: "flex",
                    lg: "flex"
                  },
                  gridTemplateColumns: {
                    xs: "repeat(auto-fill, minmax(100%, 1fr))",
                    sm: "repeat(auto-fill, minmax(48%, 1fr))"
                  }
                }}
              >
                {ListButtonWorkSpace.map((item) => (
                  <Button
                    key={item.key}
                    sx={{
                      width: "auto",
                      height: "32px",
                      fontSize: "14px",
                      color: "#172b4d",
                      border: "none",
                      bgcolor: "#091e420f",
                      textTransform: "capitalize",
                      padding: "6px 12px 6px 6px",
                      gap: "4px",
                      "& .MuiButton-startIcon": {
                        margin: 0,
                        color: "#44546f"
                      },
                      "&:hover": {
                        bgcolor: "#e5e5e5"
                      }
                    }}
                    variant="outlined"
                    startIcon={item.icon}
                  >
                    {item.text}
                  </Button>
                ))}
              </Stack>
            </Stack>
            <LayoutCard items={item.taskList} />
          </Stack>
        ))}
      </Box>
    </Box>
  );
};

export default Boards;
