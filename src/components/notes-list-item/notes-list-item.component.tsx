import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOpenNote } from '../../hooks';
import { Note } from '../../store/notes';
import { Star } from '../star-button';
import { Icon, ItemContainer, Text } from './notes-list-item.styles';

type NotesListItemProps = {
  note: Note;
};

export const NotesListItem: FC<NotesListItemProps> = ({ note }) => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const { openNote } = useOpenNote();

  const handleOpenNote = (note: Note) => () => {
    if (note) {
      navigate(`/${note.id}`);
    }
  };

  useEffect(() => {
    setActive(note.id === String(openNote?.id));
  }, [setActive, note, openNote]);

  return (
    <ItemContainer active={active} onClick={handleOpenNote(note)}>
      <Icon />
      <Text>{note.title}</Text>
      {note.starred && <Star />}
    </ItemContainer>
  );
};
