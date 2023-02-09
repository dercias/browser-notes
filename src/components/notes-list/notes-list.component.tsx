import { useSelector } from 'react-redux';
import { Note, selectAllNotes } from '../../store/notes';
import { NotesListItem } from '../notes-list-item/notes-list-item.component';
import { NotesListContainer } from './notes-list.styles';

export const NotesList = () => {
  const notes = useSelector(selectAllNotes);

  return (
    <NotesListContainer>
      {notes.map((note: Note) => (
        <NotesListItem key={note.id} note={note} />
      ))}
    </NotesListContainer>
  );
};
