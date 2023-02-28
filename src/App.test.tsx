import { render, screen, within } from './test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import App from './App';

const initialNotes = [
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

const initialState = {
  notes: { list: initialNotes },
  settings: {
    isFirstRun: false,
  },
};

test('clicking a note in the list should show its content in the editor', async () => {
  const user = userEvent.setup();

  render(<App />, { preloadedState: initialState });

  const list = screen.getByTestId('notes-list');
  const listItems = within(list).getAllByRole('listitem');
  const listItemText = listItems.map((li) => li.textContent);
  expect(listItemText).toEqual(initialNotes.map((n) => n.title));

  const noteIdx = 1;
  await user.click(listItems[noteIdx]);

  const titleInput = screen.getByPlaceholderText(/^note title$/i);
  expect(titleInput).toHaveValue(initialNotes[noteIdx].title);

  const contentEditor = screen.getByRole('textbox', { name: /content/i });
  expect(contentEditor).toHaveTextContent(initialNotes[noteIdx].content);

  const note2Idx = 2;
  await user.click(listItems[note2Idx]);
  expect(titleInput).toHaveValue(initialNotes[note2Idx].title);
  expect(contentEditor).toHaveTextContent(initialNotes[note2Idx].content);

  const note3Idx = 0;
  await user.click(listItems[note3Idx]);
  expect(titleInput).toHaveValue(initialNotes[note3Idx].title);
  expect(contentEditor).toHaveTextContent(initialNotes[note3Idx].content);
});

test('clicking add note button should open a new note', async () => {
  const user = userEvent.setup();

  render(<App />, { preloadedState: initialState });

  const list = screen.getByTestId('notes-list');
  const listItems = within(list).getAllByRole('listitem');
  const noteIdx = 1;
  await user.click(listItems[noteIdx]);

  const titleInput = screen.getByPlaceholderText(/^note title$/i);
  expect(titleInput).toHaveValue(initialNotes[noteIdx].title);

  const contentEditor = screen.getByRole('textbox', { name: /content/i });
  expect(contentEditor).toHaveTextContent(initialNotes[noteIdx].content);

  // click add note button
  const addButton = screen.getByRole('button', { name: 'Add Note' });
  await user.click(addButton);

  // note view is updated
  expect(titleInput).toHaveValue('');
  expect(contentEditor).toHaveTextContent('');

  // type in new note content
  const newTitle = 'Test list item :D';
  // const newContent = 'New content.';
  await user.type(titleInput, newTitle);
  // await user.type(contentEditor, newContent);

  // note view is updated
  expect(titleInput).toHaveValue(newTitle);
  // expect(contentEditor).toHaveTextContent(newContent);

  // switch to another note on the list
  const note2Idx = 0;
  await user.click(listItems[note2Idx]);

  // note view is updated
  expect(titleInput).toHaveValue(initialNotes[note2Idx].title);
  expect(contentEditor).toHaveTextContent(initialNotes[note2Idx].content);
});
