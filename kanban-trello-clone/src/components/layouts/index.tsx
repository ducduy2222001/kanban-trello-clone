import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import Header from "./header";
import Sidebar from "./sidebar";

const LayoutContainer = () => {
  return (
    <Box sx={{ overflow: "hidden", height: "100vh" }}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999
        }}
      >
        <Header />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          direction: "row",
          marginTop: "48px",
          height: `calc(100vh - 48px) `,
          overflowY: "auto"
        }}
      >
        {/* check điều kiện để show slider detail nữa sẽ có 2 sidebar: 1 là cái phía dưới, 2 là cái khi click vô card*/}
        <Box
          sx={{
            width: "256px",
            padding: "0 16px",
            position: "sticky",
            maxHeight: "90%",
            top: "40px",
            marginBottom: "40px"
          }}
        >
          <Sidebar />
        </Box>
        <Box
          sx={{
            width: "825px",
            padding: "0 16px",
            height: "min-content",
            margin: "40px 0"
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default LayoutContainer;
