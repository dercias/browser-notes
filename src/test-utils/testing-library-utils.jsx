import { render } from '@testing-library/react';
import { NotesProvider } from '../context';

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: NotesProvider, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithContext as render };
