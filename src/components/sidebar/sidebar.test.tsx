import {
  initialNotes,
  renderWithBrowser,
  screen,
} from '../../test-utils/testing-library-utils';
import { Sidebar } from './sidebar.component';
import userEvent from '@testing-library/user-event';

test('clicking add note button should create a new list item', async () => {
  const user = userEvent.setup();

  renderWithBrowser(<Sidebar />);

  const addButton = screen.getByRole('button', { name: 'Add Note' });
  await user.click(addButton);

  const listItems2 = screen.getAllByRole('listitem');
  expect(listItems2).toHaveLength(initialNotes.length + 1);
});
