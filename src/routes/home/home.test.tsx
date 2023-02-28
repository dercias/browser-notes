import {
  renderWithBrowser,
  screen,
  within,
} from '../../test-utils/testing-library-utils';
import { Home } from './home.component';

test('welcome note is shown on first run', async () => {
  renderWithBrowser(<Home />);

  const list = screen.getByTestId('notes-list');
  const listItems = within(list).getAllByRole('listitem');

  expect(listItems[0]).toHaveTextContent(/hello world/i);
  expect(listItems[1]).toHaveTextContent(
    /Mox morte hostiliter eripitur profundi poenaeque es/i
  );
});
