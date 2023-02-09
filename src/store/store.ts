import { combineReducers, configureStore } from '@reduxjs/toolkit';
import notesReducer from './notes/notes.slice';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { NotesState } from './notes';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const store = configureStore({
  reducer: combineReducers({
    notes: persistReducer<NotesState, any>(persistConfig, notesReducer),
  }),
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export { store, persistor };
