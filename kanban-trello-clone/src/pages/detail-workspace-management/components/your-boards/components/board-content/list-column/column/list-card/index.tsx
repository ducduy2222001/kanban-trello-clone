import { Box } from "@mui/material";

import CardItem from "./card";

const ListCard = () => {
  return (
    <Box
      sx={{
        overflowX: "hidden",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        margin: "0 4px 0 0",
        height: "fit-content",
        maxHeight: "calc(100vh - 100px - 50px - 48px - 48px)",
        "&::-webkit-scrollbar": {
          width: "10px"
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#091e4224"
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#e3e5ea"
        },
        "&::-webkit-scrollbar-button:single-button:decrement": {
          background: `#e3e5ea url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'%3E%3Cpath d='M8 14l4-4 4 4' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center no-repeat`,
          height: "12px",
          width: "12px"
        },
        "&::-webkit-scrollbar-button:single-button:increment": {
          background: `#e3e5ea url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'%3E%3Cpath d='M8 10l4 4 4-4' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center no-repeat`,
          height: "12px",
          width: "12px"
        }
      }}
    >
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </Box>
  );
};

export default ListCard;
