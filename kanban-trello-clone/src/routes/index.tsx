import React from "react";
import { Route, Routes } from "react-router-dom";

import LayoutContainer from "../components/layouts";

import { routes } from "./routes";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutContainer />}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
