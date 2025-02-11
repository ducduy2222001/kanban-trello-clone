import React from "react";
import { useNavigate } from "react-router-dom";
import { PeopleOutlineOutlined, StarBorderRounded } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

import imageCard from "../../../../assets/images/imageCardTemplate.jpg";

interface ICardBoardProps {
  title: string;
  image: string;
  nameProject?: string;
}

const CardBoard = (props: ICardBoardProps) => {
  const { title, image, nameProject } = props;
  const navigation = useNavigate();
  return (
    <Box
      component="button"
      sx={{
        width: "100%",
        minWidth: "0",
        height: 96,
        borderRadius: "3px",
        cursor: "pointer",
        backgroundImage: `url(${imageCard})`,
        backgroundSize: "cover",
        objectFit: "cover",
        border: "none",
        outline: "none",
        "&:hover .starIcon": {
          width: "18px"
        },
        "&:hover": {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${imageCard})`
        }
      }}
      onClick={() =>
        navigation(
          `/project/${nameProject
            ?.toLowerCase()
            ?.trim()
            .replace(/\s(.)/g, (match: string) => match.toUpperCase())
            .replace(/\s/g, "")}`
        )
      }
    >
      <Stack
        sx={{
          padding: "8px",
          flexDirection: "column",
          boxSizing: "border-box",
          height: "100%",
          justifyContent: "space-between"
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: "#fff",
            fontSize: 16,
            wordWrap: "break-word",
            lineHeight: "20px"
          }}
        >
          {title}
        </Typography>
        <Stack flexDirection={"row"} justifyContent={"space-between"}>
          <PeopleOutlineOutlined sx={{ fontSize: 17, color: "#fff" }} />
          <StarBorderRounded
            sx={{
              fontSize: 17,
              color: "#fff",
              width: 0,
              transition: "width 0.2s"
            }}
            className="starIcon"
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default CardBoard;
