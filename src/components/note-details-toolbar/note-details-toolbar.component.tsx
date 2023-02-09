import { FC, useContext } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

import { Note, NotesContext } from '../../context';
import { NoteDetailsToolbarContainer } from './note-details-toolbar.styles';

type NoteDetailsProps = {
  note: Note;
};

export const NoteDetailsToobar: FC<NoteDetailsProps> = ({ note }) => {
  const { removeNote } = useContext(NotesContext);
  const navigate = useNavigate();

  const removeNoteHandler = (note: Note) => () => {
    removeNote(note);
    navigate('/');
  };
  return (
    <NoteDetailsToolbarContainer>
      <button title='Delete note' onClick={removeNoteHandler(note)}>
        <HiOutlineTrash />
      </button>
    </NoteDetailsToolbarContainer>
  );
};
