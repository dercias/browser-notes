import { render, screen } from './test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import App from './App';

test('clicking a note in the list shows its content in the editor', async () => {
  const initialNotes = [
    { id: 1, title: '', content: 'Lorem ipsum' },
    {
      id: 2,
      title: 'Note #1',
      content:
        'Duis facilisis consectetur risus, ut tincidunt massa consequat at.',
    },
    {
      id: 3,
      title: 'Donec eget magna luctus',
      content:
        'Donec eget magna luctus, iaculis mi vitae, tristique odio. Mauris sed sapien at diam sollicitudin ornare nec pharetra lorem.',
    },
  ];
  localStorage.setItem('bn/notes', JSON.stringify(initialNotes));

  const user = userEvent.setup();

  render(<App />);

  const listItems = screen.getAllByRole('listitem');
  const listItemText = listItems.map((li) => li.textContent);
  expect(listItemText).toEqual(initialNotes.map((n) => n.title));

  await user.click(listItems[1]);

  const titleInput = screen.getByPlaceholderText(/note title/i);
  expect(titleInput).toHaveValue(initialNotes[1].title);

  const contentEditor = screen.getByRole('textbox', { name: /content/i });
  expect(contentEditor).toHaveTextContent(initialNotes[1].content);

  await user.click(listItems[0]);
  expect(titleInput).toHaveValue(initialNotes[0].title);
  expect(contentEditor).toHaveTextContent(initialNotes[0].content);

  await user.click(listItems[2]);
  expect(titleInput).toHaveValue(initialNotes[2].title);
  expect(contentEditor).toHaveTextContent(initialNotes[2].content);
});
