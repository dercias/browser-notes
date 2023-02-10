import {
  renderWithBrowser,
  screen,
} from '../../test-utils/testing-library-utils';
import { Sidebar } from './sidebar.component';
import userEvent from '@testing-library/user-event';

const initialNotes = [
  {
    id: '1',
    title: 'Mauris sed sapien at diam sollicitudin',
    content: 'Lorem ipsum',
    createdAt: 1675766577,
    updatedAt: 1675766578,
  },
];

const initialState = {
  notes: { list: initialNotes },
  settings: {
    isFirstRun: false,
  },
};

test('clicking add note button should create a new list item', async () => {
  const user = userEvent.setup();

  renderWithBrowser(<Sidebar />, { preloadedState: initialState });

  const addButton = screen.getByRole('button', { name: 'Add Note' });
  await user.click(addButton);

  const listItems2 = screen.getAllByRole('listitem');
  expect(listItems2).toHaveLength(initialNotes.length + 1);
});
