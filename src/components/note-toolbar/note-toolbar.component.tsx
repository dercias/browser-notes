import { FC } from 'react';
import { HiOutlineTrash, HiUpload } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Note, removeNote, restoreNote, updateNote } from '../../store/notes';
import { Dropdown, DropdownOption } from '../dropdown/dropdown.component';
import { StarButton } from '../star-button/star-button.component';
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

  const onRemoveNoteClick = () => {
    dispatch(removeNote(note));
    navigate('/');
  };

  const onRestoreNoteClick = () => {
    dispatch(restoreNote(note));
    navigate('/');
  };

  const onStarButtonClick = () => {
    dispatch(
      updateNote({
        ...note,
        starred: !note.starred,
      })
    );
  };

  return (
    <NoteToolbarContainer>
      <Toolbar>
        <ToolbarStart>
          <DocumentIcon />
          {note.title}
        </ToolbarStart>
        <ToolbarEnd>
          <StarButton
            checked={note.starred}
            onClick={onStarButtonClick}
            className='mr-2'
          />
          <Dropdown>
            {!note.deleted && (
              <DropdownOption onClick={onRemoveNoteClick}>
                <span className='text-red-500 flex'>
                  <HiOutlineTrash className='mr-2 w-4 h-4' />
                  Delete Note
                </span>
              </DropdownOption>
            )}
            {note.deleted && (
              <DropdownOption onClick={onRestoreNoteClick}>
                <span className=' flex'>
                  <HiUpload className='mr-2 w-4 h-4' />
                  Remove from Trash
                </span>
              </DropdownOption>
            )}
          </Dropdown>
        </ToolbarEnd>
      </Toolbar>
    </NoteToolbarContainer>
  );
};
