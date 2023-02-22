import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Note } from './notes.types';

export type NotesState = {
  list: Note[];
};

const initialState: NotesState = {
  list: [],
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    createNote: {
      reducer: (state: NotesState, action: PayloadAction<Note>) => {
        state.list.push(action.payload);
      },
      prepare: ({ id = nanoid(), title = '', content = '' }) => {
        return {
          payload: {
            id,
            title,
            content,
            createdAt: Date.now(),
            updatedAt: Date.now(),
          },
        };
      },
    },
    removeNote: (state: NotesState, action: PayloadAction<Note>) => {
      const { id } = action.payload;

      state.list = state.list.filter((note) => String(note.id) !== String(id));
    },
    updateNote: (state: NotesState, action: PayloadAction<Note>) => {
      const { id, title, content, starred } = action.payload;
      let existingNote = state.list.find((note) => note.id === id);

      if (existingNote) {
        existingNote.title = title;
        existingNote.content = content;
        existingNote.starred = starred;
        existingNote.updatedAt = Date.now();
      }
    },
  },
});

export const { createNote, removeNote, updateNote } = notesSlice.actions;

export const selectAllNotes = (state: RootState) => state.notes.list;

export const selectNoteById = (id: string) => (state: RootState) =>
  state.notes.list.find((note) => String(note.id) === String(id));

export default notesSlice.reducer;
