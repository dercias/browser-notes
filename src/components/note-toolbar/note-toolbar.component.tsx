import { FC } from 'react';
import { HiOutlineTrash, HiUpload } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Note, removeNote, restoreNote, updateNote } from '../../store/notes';
import {
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuTrigger,
} from '../dropdown/';
import { StarButton } from '../star-button/star-button.component';
import {
  DocumentIcon,
  DropdownButton,
  DropdownIcon,
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <DropdownButton type='button'>
                <DropdownIcon />
              </DropdownButton>
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
              <DropdownMenuContent>
                {!note.deleted && (
                  <DropdownMenuItem onClick={onRemoveNoteClick}>
                    <span className='text-red-500 flex'>
                      <HiOutlineTrash className='mr-2 w-4 h-4' />
                      Delete Note
                    </span>
                  </DropdownMenuItem>
                )}
                {note.deleted && (
                  <DropdownMenuItem onClick={onRestoreNoteClick}>
                    <span className=' flex'>
                      <HiUpload className='mr-2 w-4 h-4' />
                      Remove from Trash
                    </span>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenuPortal>
          </DropdownMenu>
        </ToolbarEnd>
      </Toolbar>
    </NoteToolbarContainer>
  );
};
