import {
  createSelector,
  createSlice,
  nanoid,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Note, NoteFilter } from './notes.types';

export type NotesState = {
  list: Note[];
  filters?: NoteFilter;
};

const initialState: NotesState = {
  list: [],
  filters: {} as NoteFilter,
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    createNote: {
      reducer: (state: NotesState, action: PayloadAction<Note>) => {
        state.list.push(action.payload);
        state.filters = {};
      },
      prepare: ({
        id = nanoid(),
        title = '',
        content = '',
        starred = false,
      }) => {
        return {
          payload: {
            id,
            title,
            content,
            starred,
            createdAt: Date.now(),
            updatedAt: Date.now(),
          },
        };
      },
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
    removeNote: (state: NotesState, action: PayloadAction<Note>) => {
      const { id } = action.payload;
      let noteToDelete = state.list.find((note) => note.id === id);

      if (noteToDelete) {
        noteToDelete.deleted = true;
      }
    },
    restoreNote: (state: NotesState, action: PayloadAction<Note>) => {
      const { id } = action.payload;
      let noteToRestore = state.list.find((note) => note.id === id);

      if (noteToRestore) {
        noteToRestore.deleted = false;
      }
    },
    filterBy: (state: NotesState, action: PayloadAction<NoteFilter>) => {
      const { showStarred, showDeleted, searchString } = action.payload;

      state.filters = state.filters || {}; // initialize
      state.filters.showStarred = Boolean(showStarred);
      state.filters.showDeleted = Boolean(showDeleted);
      state.filters.searchString = searchString;
    },
    clearFilters: (state: NotesState) => {
      state.filters = {};
    },
  },
});

export const {
  createNote,
  removeNote,
  restoreNote,
  updateNote,
  filterBy,
  clearFilters,
} = notesSlice.actions;

export const selectAllNotes = (state: RootState) => state.notes.list;

export const selectNoteById = (id: string) =>
  createSelector([selectAllNotes], (notes: Note[]) =>
    notes.find((note) => note.id === id)
  );

export const selectStarredNotes = createSelector(
  [selectAllNotes],
  (notes: Note[]) => notes.filter((note: Note) => note.starred)
);

export const selectFilterBy = (state: RootState) => state.notes.filters;

export default notesSlice.reducer;
