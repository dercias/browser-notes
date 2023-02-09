import { FC } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Note, removeNote } from '../../store/notes';
import { NoteDetailsToolbarContainer } from './note-details-toolbar.styles';

type NoteDetailsProps = {
  note: Note;
};

export const NoteDetailsToobar: FC<NoteDetailsProps> = ({ note }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRemoveNoteClicked = (note: Note) => () => {
    dispatch(removeNote(note));
    navigate('/');
  };

  return (
    <NoteDetailsToolbarContainer>
      <button title='Delete note' onClick={onRemoveNoteClicked(note)}>
        <HiOutlineTrash />
      </button>
    </NoteDetailsToolbarContainer>
  );
};
