import { FC } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Note, removeNote } from '../../store/notes';
import { Dropdown, DropdownOption } from '../dropdown/dropdown.component';
import {
  DocumentIcon,
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
        <ToolbarStart>
          <DocumentIcon />
          {note.title}
        </ToolbarStart>
        <ToolbarEnd>
          <Dropdown>
            <DropdownOption onClick={onRemoveNoteClicked(note)}>
              <span className='text-red-500 flex'>
                <HiOutlineTrash className='mr-2 w-4 h-4' />
                Delete Note
              </span>
            </DropdownOption>
          </Dropdown>
        </ToolbarEnd>
      </Toolbar>
    </NoteToolbarContainer>
  );
};
