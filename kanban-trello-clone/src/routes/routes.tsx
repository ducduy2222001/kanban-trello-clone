export const routerPaths = {
  boards: "/",
  errorPage: "*"
};

export const routes = [
  {
    path: routerPaths.boards,
    element: <>Boards</>
  },
  {
    path: routerPaths.errorPage,
    element: <>Error</>
  }
];
