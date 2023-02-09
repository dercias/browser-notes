import { PropsWithChildren } from 'react';
import { PreloadedState } from '@reduxjs/toolkit';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { RootState, setupStore, store } from '../store/store';
import { BrowserRouter } from 'react-router-dom';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: typeof store;
}

export const initialNotes = [
  {
    id: '4',
    title: '',
    content: '',
    createdAt: 1675766577,
    updatedAt: 1675766578,
  },
  {
    id: '1',
    title: 'Mauris sed sapien at diam sollicitudin',
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
      },
    },
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

const renderWithBrowser = (
  ui: React.ReactElement,
  {
    preloadedState = {
      notes: {
        list: initialNotes,
      },
    },
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  };

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithContext as render, renderWithBrowser };
