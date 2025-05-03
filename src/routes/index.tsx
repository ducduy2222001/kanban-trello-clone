import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import YourBoards from "pages/detail-workspace-management/components/your-boards";

import LayoutContainer from "../components/layouts";

import { routesDetail, routesMain } from "./routes";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/boards" replace />} />
      <Route path="/" element={<LayoutContainer />}>
        {routesMain.map((route) => (
          <Route
            key={route.path}
            index={route.index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Route>

      <Route path="/project" element={<LayoutContainer />}>
        <Route path=":projectId/">
          {routesDetail.map((route) => (
            <Route
              key={route.path}
              index={route.index}
              path={route.path}
              element={route.element}
            />
          ))}
          <Route path="myBoards/:nameBoard" element={<YourBoards />} />
        </Route>
      </Route>
      <Route path="*" element={<div>Not found page</div>} />
    </Routes>
  );
};

export default AppRoutes;
