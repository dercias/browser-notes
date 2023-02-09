import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectNoteById } from '../store/notes';

export type NoteRouteParams = {
  id: string;
};

export const useOpenNote = () => {
  const { id } = useParams<keyof NoteRouteParams>() as NoteRouteParams;
  const note = useSelector(selectNoteById(id));

  return { openNote: note };
};
