import { PropsWithChildren } from 'react';
import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
import { render, RenderOptions } from '@testing-library/react';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { Provider } from 'react-redux';
import { RootState, store } from '../store/store';
import notesReducer, { NotesState } from '../store/notes/notes.slice';
import { persistReducer } from 'redux-persist';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: typeof store;
}

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

export const initialNotes = [
  {
    id: '1',
    title: '',
    content: 'Lorem ipsum',
    createdAt: 1675766577,
    updatedAt: 1675766578,
  },
  {
    id: '2',
    title: 'Note #1',
    content:
      'Duis facilisis consectetur risus, ut tincidunt massa consequat at.',
    createdAt: 1675766579,
    updatedAt: 1675766580,
  },
  {
    id: '3',
    title: 'Donec eget magna luctus',
    content:
      'Donec eget magna luctus, iaculis mi vitae, tristique odio. Mauris sed sapien at diam sollicitudin ornare nec pharetra lorem.',
    createdAt: 1675766591,
    updatedAt: 1675766598,
  },
];

const renderWithContext = (
  ui: React.ReactElement,
  {
    preloadedState = {
      notes: {
        list: initialNotes,
        _persist: {
          version: 0,
          rehydrated: true,
        },
      },
    },
    store = configureStore({
      reducer: combineReducers({
        notes: persistReducer<NotesState, any>(persistConfig, notesReducer),
      }),
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithContext as render };
