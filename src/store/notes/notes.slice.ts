import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Note, NotesState } from './notes.types';

const initialState: NotesState = {
  list: JSON.parse(localStorage.getItem('bn/notes') || '[]'),
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    createNote: {
      reducer: (state: NotesState, action: PayloadAction<Note>) => {
        state.list.push(action.payload);
        localStorage.setItem('bn/notes', JSON.stringify(state.list));
      },
      prepare: ({ title, content }) => {
        return {
          payload: {
            id: nanoid(),
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
      localStorage.setItem('bn/notes', JSON.stringify(state.list));
    },
    updateNote: (state: NotesState, action: PayloadAction<Note>) => {
      const { id, title, content } = action.payload;
      let existingNote = state.list.find((note) => note.id === id);

      if (existingNote) {
        existingNote.title = title;
        existingNote.content = content;
        existingNote.updatedAt = Date.now();
      }
      localStorage.setItem('bn/notes', JSON.stringify(state.list));
    },
  },
});

export const { createNote, removeNote, updateNote } = notesSlice.actions;

export const selectAllNotes = (state: RootState) => state.notes.list;

export const selectNoteById = (id: string) => (state: RootState) =>
  state.notes.list.find((note) => String(note.id) === String(id));

export default notesSlice.reducer;
