export type Note = {
  id: string;
  title?: string;
  content?: string;
  createdAt: number;
  updatedAt: number;
};

export type NotesState = {
  list: Note[];
};
