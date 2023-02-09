import { FC, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Note, NotesContext } from '../../context';
import { Icon, ItemContainer, Text } from './notes-list-item.styles';

type NotesListItemProps = {
  note: Note;
};

export const NotesListItem: FC<NotesListItemProps> = ({ note }) => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const { setOpenNoteId, openNoteId } = useContext(NotesContext);

  const handleOpenNote = (note: Note) => () => {
    if (note) {
      setOpenNoteId(note.id);
      navigate(`/${note.id}`);
    }
  };

  useEffect(() => {
    setActive(note.id === openNoteId);
  }, [setActive, note, openNoteId]);

  return (
    <ItemContainer active={active} onClick={handleOpenNote(note)}>
      <Icon />
      <Text>{note.id}</Text>
    </ItemContainer>
  );
};
