import {
  renderWithBrowser,
  screen,
  within,
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
  {
    id: '2',
    title: 'Mauris sed sapien at diam sollicitudin',
    content: 'Lorem ipsum',
    starred: true,
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

  const addButton = screen.getByTestId('add-note-button');
  await user.click(addButton);

  const list = screen.getByTestId('notes-list');
  const listItems = within(list).getAllByRole('listitem');
  expect(listItems).toHaveLength(initialNotes.length + 1);
});

test('show all notes when add button is clicked', async () => {
  const user = userEvent.setup();

  renderWithBrowser(<Sidebar />, { preloadedState: initialState });

  // Show starred notes and add a note
  const starredListItem = screen.getByTestId('sidebar-nav-item-starred');
  await user.click(starredListItem);

  const list = screen.getByTestId('notes-list');
  const listItems = within(list).getAllByRole('listitem');

  const starredCount = initialNotes.filter((n) => n.starred).length;

  expect(listItems).toHaveLength(starredCount);

  const addButton = screen.getByTestId('add-note-button');
  await user.click(addButton);

  const list2 = screen.getByTestId('notes-list');
  const listItems2 = within(list2).getAllByRole('listitem');
  expect(listItems2).toHaveLength(initialNotes.length + 1);

  // Show trashed notes and add a note
  const trashListItem = screen.getByTestId('sidebar-nav-item-trash');
  await user.click(trashListItem);
  await user.click(addButton);

  const list3 = screen.getByTestId('notes-list');
  const listItems3 = within(list3).getAllByRole('listitem');
  expect(listItems3).toHaveLength(initialNotes.length + 2);
});
