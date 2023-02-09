import { PropsWithChildren } from 'react';
import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { RootState, store } from '../store/store';
import notesReducer from '../store/notes/notes.slice';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: typeof store;
}

export const initialNotes = [
  {
    id: '1',
    title: '',
    content: 'Lorem ipsum',
    createdAt: 1675766577,
    updatedAt: 1675766577,
  },
  {
    id: '2',
    title: 'Note #1',
    content:
      'Duis facilisis consectetur risus, ut tincidunt massa consequat at.',
    createdAt: 1675766577,
    updatedAt: 1675766577,
  },
  {
    id: '3',
    title: 'Donec eget magna luctus',
    content:
      'Donec eget magna luctus, iaculis mi vitae, tristique odio. Mauris sed sapien at diam sollicitudin ornare nec pharetra lorem.',
    createdAt: 1675766577,
    updatedAt: 1675766577,
  },
];

const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {
      notes: {
        list: initialNotes,
      },
    },
    store = configureStore({
      reducer: { notes: notesReducer },
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
export { renderWithProviders as render };
