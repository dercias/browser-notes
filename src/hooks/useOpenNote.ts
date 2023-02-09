import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Note, NotesContext } from '../context';

export type NoteRouteParams = {
  id: string;
};

export const useOpenNote = () => {
  const [note, setNote] = useState<Note | null>();
  const { notes } = useContext(NotesContext);
  const { id } = useParams<keyof NoteRouteParams>() as NoteRouteParams;

  useEffect(() => {
    const found = notes.find((n) => n.id === Number(id));
    setNote(found || null);
  }, [id, notes, setNote]);

  return { openNote: note };
};
