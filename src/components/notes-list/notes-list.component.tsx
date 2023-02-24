import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Note, selectAllNotes, selectFilterBy } from '../../store/notes';
import { NotesListItem } from '../notes-list-item/notes-list-item.component';
import { NotesListContainer } from './notes-list.styles';

export const NotesList = () => {
  const [visibleNotes, setVisibleNotes] = useState<Note[]>([]);
  const notes = useSelector(selectAllNotes);
  const filters = useSelector(selectFilterBy);

  useEffect(() => {
    const notDeletedNotes = notes.filter((note) => !note.deleted);

    if (filters?.showDeleted) {
      setVisibleNotes(notes.filter((note) => note.deleted));
      return;
    }
    if (filters?.showStarred) {
      setVisibleNotes(notDeletedNotes.filter((note) => note.starred));
    } else {
      setVisibleNotes(notDeletedNotes);
    }
  }, [notes, filters]);

  return (
    <NotesListContainer data-testid='notes-list'>
      {visibleNotes.map((note: Note) => (
        <NotesListItem key={note.id} note={note} />
      ))}
    </NotesListContainer>
  );
};
