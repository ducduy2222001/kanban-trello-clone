export interface ICard {
  _id: string;
  boardId: string;
  columnId: string;
  title: string;
  description: string;
  cover: string;
  memberIds: string[];
  comments: string[];
  attachments: string[];
}

export interface IColumn {
  _id: string;
  boardId: string;
  title: string;
  cardOrderIds: string[];
  cards: ICard[];
}

export interface IBoard {
  _id: string;
  title: string;
  description: string;
  type: string;
  ownerIds: string[];
  memberIds: string[];
  columnOrderIds: string[];
  columns: IColumn[];
}
