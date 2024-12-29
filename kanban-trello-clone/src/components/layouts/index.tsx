import React from "react";
import { Box } from "@mui/material";
import Header from "./header";
import Slider from "./slider";

const LayoutContainer = () => {
  return (
    <Box sx={{ overflow: "hidden", height: "100vh" }}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
        }}
      >
        <Header />
      </Box>
      <Box
        sx={{
          display: "flex",
          marginTop: "48px",
          height: `calc(100vh - 48px) `,
          overflowY: "auto",
          padding: "0 60px",
        }}
      >
        <Box
          sx={{
            width: "256px",
            padding: "0 16px",
            position: "sticky",
            maxHeight: "90%",
            top: "40px",
            marginBottom: "40px",
          }}
        >
          <Slider />
        </Box>
        <Box
          sx={{
            width: "calc(100% - 272px)",
            padding: "0 16px",
            height: "min-content",
            margin: "40px 0",
          }}
        >
          {Array.from({ length: 100 }, (_, i) => (
            <Box key={i}>Nội dung {i}</Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default LayoutContainer;
