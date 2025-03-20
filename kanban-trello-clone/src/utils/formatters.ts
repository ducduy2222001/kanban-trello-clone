import {
  ICard,
  IColumn
} from "pages/detail-workspace-management/components/your-boards/types";

export const generatePlaceholderCard = (column: IColumn): ICard => {
  return {
    _id: `${column._id}-placeholder-card`,
    boardId: column.boardId,
    columnId: column._id,
    FE_Placeholder: true
  };
};
