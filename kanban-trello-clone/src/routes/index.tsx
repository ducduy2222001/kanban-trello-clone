import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import LayoutContainer from "../components/layouts";

import { routes } from "./routes";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/boards" replace />} />
      <Route path="/" element={<LayoutContainer />}>
        {routes.map((route) => (
          <Route
            key={route.path}
            index={route.index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Route>
      <Route path="*" element={<div>Not found page</div>} />
    </Routes>
  );
};

export default AppRoutes;
