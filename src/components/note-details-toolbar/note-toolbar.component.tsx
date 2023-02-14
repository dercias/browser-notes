import { FC } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Note, removeNote } from '../../store/notes';
import { IconButton } from '../icon-button/icon-button.component';
import {
  NoteToolbarContainer,
  Toolbar,
  ToolbarEnd,
  ToolbarStart,
} from './note-toolbar.styles';

type NoteDetailsProps = {
  note: Note;
};

export const NoteToobar: FC<NoteDetailsProps> = ({ note }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRemoveNoteClicked = (note: Note) => () => {
    dispatch(removeNote(note));
    navigate('/');
  };

  return (
    <NoteToolbarContainer>
      <Toolbar>
        <ToolbarStart />
        <ToolbarEnd>
          <IconButton
            Icon={HiOutlineTrash}
            title='Delete note'
            onClick={onRemoveNoteClicked(note)}
          >
            Delete note
          </IconButton>
        </ToolbarEnd>
      </Toolbar>
    </NoteToolbarContainer>
  );
};
