export type Note = {
  id: string;
  title?: string;
  content?: string;
  starred?: boolean;
  deleted?: boolean;
  createdAt: number;
  updatedAt: number;
};

export type NoteFilter = {
  showStarred?: boolean;
  showDeleted?: boolean;
};
