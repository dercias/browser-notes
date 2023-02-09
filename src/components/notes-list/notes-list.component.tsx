import { useContext } from 'react';
import { NotesContext } from '../../context';
import { NotesListItem } from '../notes-list-item/notes-list-item.component';
import { NotesListContainer } from './notes-list.styles';

export const NotesList = () => {
  const { notes } = useContext(NotesContext);

  return (
    <NotesListContainer>
      {notes.map((note) => (
        <NotesListItem key={note.id} note={note} />
      ))}
    </NotesListContainer>
  );
};
