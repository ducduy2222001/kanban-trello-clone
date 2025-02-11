import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

import imageBgTemplate from "../../assets/images/bgTemplate.jpg";

import DrawerMenu from "./drawer-menu";
import Header from "./header";
import Sidebar from "./sidebar";

const LayoutContainer = () => {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith("/project/");
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  return (
    <Box
      sx={{
        overflow: "hidden",
        height: "100vh",
        ...(isProjectPage && {
          backgroundImage: `url(${imageBgTemplate})`,
          backgroundBlendMode: "multiply",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          width: "100%"
        })
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999
        }}
      >
        <Header blurBg={isProjectPage} />
      </Box>
      {isProjectPage ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            direction: "row",
            marginTop: "48px",
            height: "100vh"
          }}
        >
          <Box
            sx={{
              width: isDrawerOpen ? 260 : 17,
              transition: "width 0.3s"
            }}
          >
            <DrawerMenu isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              transition: "margin 0.3s ease-in-out",
              width: "100%"
            }}
          >
            <Outlet />
          </Box>
        </Box>
      ) : (
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
      )}
    </Box>
  );
};

export default LayoutContainer;
