import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutContainer from "../components/layouts";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutContainer />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
