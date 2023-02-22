import {
  renderWithBrowser,
  screen,
  within,
} from '../../test-utils/testing-library-utils';
import { Home } from './home.component';

test('welcome note is shown on first run', async () => {
  renderWithBrowser(<Home />);

  const sidebar = screen.getByRole('complementary');
  const listItems = within(sidebar).getAllByRole('listitem');

  expect(listItems[0]).toHaveTextContent(/hello world/i);
  expect(listItems[1]).toHaveTextContent(/A second note/i);
});
