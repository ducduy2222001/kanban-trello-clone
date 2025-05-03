import React from "react";
import { Theme } from "@emotion/react";
import { Avatar, Stack, SxProps, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

interface IUIAvatarProps {
  name: string;
  image?: string;
  secondaryText?: string;
  size?: number;
  sx?: SxProps<Theme>;
  fontSizeIconText?: string;
}

const UIAvatar = (props: IUIAvatarProps) => {
  const {
    name,
    image = "",
    secondaryText,
    size = 32,
    sx,
    fontSizeIconText = "20px"
  } = props;
  return (
    <Stack direction={"row"} alignItems={"center"}>
      <Avatar
        sx={{
          bgcolor: deepOrange[500],
          borderRadius: "4px",
          fontSize: fontSizeIconText,
          fontWeight: "bold",
          height: size,
          width: size
        }}
      >
        {name[0]}
      </Avatar>
      <Stack>
        <Typography
          flex={1}
          marginBottom={0}
          marginLeft={"12px"}
          overflow={"hidden"}
          color="#44546f"
          textOverflow={"ellipsis"}
          whiteSpace={"nowrap"}
          sx={{ fontSize: "14px", ...sx }}
        >
          {name.toUpperCase()}
        </Typography>
        {secondaryText && (
          <Typography
            flex={1}
            marginBottom={0}
            marginLeft={"12px"}
            overflow={"hidden"}
            fontSize={"12px"}
            fontWeight={400}
            textOverflow={"ellipsis"}
            whiteSpace={"nowrap"}
            color="#44546f"
          >
            {secondaryText}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
};
export default UIAvatar;
