export enum ETypeDropDown {
  Workspaces,
  Recent,
  Starred,
  More,
}

export enum ENameDropDownHeader {
  Workspaces = "Workspaces",
  Recent = "Recent",
  Starred = "Starred",
  More = "More",
}

export const LIST_DROP_DOWN = [
  {
    key: ETypeDropDown.Workspaces,
    text: ENameDropDownHeader.Workspaces,
  },
  {
    key: ETypeDropDown.Recent,
    text: ENameDropDownHeader.Recent,
  },
  {
    key: ETypeDropDown.Starred,
    text: ENameDropDownHeader.Starred,
  },
  {
    key: ETypeDropDown.More,
    text: ENameDropDownHeader.More,
  },
];
