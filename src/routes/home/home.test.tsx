import {
  renderWithBrowser,
  screen,
  within,
} from '../../test-utils/testing-library-utils';
import { Home } from './home.component';

test('welcome note is shown on first run', async () => {
  renderWithBrowser(<Home />);

  const sidebar = screen.getByRole('complementary');
  const listItems = within(sidebar).getByRole('listitem');

  expect(listItems).toHaveTextContent(/hello world/i);
});
