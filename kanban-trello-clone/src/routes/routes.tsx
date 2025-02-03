import Boards from "pages/main-management/components/boards";
import Home from "pages/main-management/components/home";
import Templates from "pages/main-management/components/templates";

export const routerPaths = {
  boards: "boards",
  templates: "templates",
  home: "home"
};

export const routes = [
  {
    index: true,
    path: routerPaths.boards,
    element: <Boards />
  },
  {
    index: false,
    path: routerPaths.templates,
    element: <Templates />
  },
  {
    index: false,
    path: routerPaths.home,
    element: <Home />
  }
];
