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
      prepare: ({ id = nanoid(), ...rest }) => {
        return {
          payload: {
            id,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            ...rest,
          },
        };
      },
    },
    updateNote: (state: NotesState, action: PayloadAction<Note>) => {
      const payload = action.payload;

      let existingNote = state.list.find((note) => note.id === payload.id);

      if (existingNote) {
        const keys = Object.keys(payload) as Array<keyof typeof payload>;

        keys.forEach(<K extends keyof typeof payload>(key: K) => {
          if (existingNote) {
            existingNote[key] = action.payload[key];
          }
        });
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
