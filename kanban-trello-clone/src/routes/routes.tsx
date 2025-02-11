import BoardsDetail from "pages/detail-workspace-management/components/boards";
import MembersDetail from "pages/detail-workspace-management/components/members";
import WorkSpaceSettingsDetail from "pages/detail-workspace-management/components/workspace-settings";
import YourBoards from "pages/detail-workspace-management/components/your-boards";
import Boards from "pages/main-management/components/boards";
import Home from "pages/main-management/components/home";
import Templates from "pages/main-management/components/templates";

export const routerPaths = {
  boards: "boards",
  templates: "templates",
  home: "home",
  memberDetail: "members",
  workspaceSettingsDetail: "account",
  yourBoards: "yourBoards"
};

export const routesMain = [
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

export const routesDetail = [
  {
    index: true,
    path: "",
    element: <BoardsDetail />
  },
  {
    index: false,
    path: routerPaths.memberDetail,
    element: <MembersDetail />
  },
  {
    index: false,
    path: routerPaths.workspaceSettingsDetail,
    element: <WorkSpaceSettingsDetail />
  }
];
