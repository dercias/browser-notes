import {
  render,
  screen,
  initialNotes,
} from './test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import App from './App';

test('clicking a note in the list shows its content in the editor', async () => {
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
