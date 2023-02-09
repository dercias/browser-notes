import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createNote } from '../../store/notes';
import { Button } from '../button/button.component';
import { NotesList } from '../notes-list/notes-list.component';
import { SidebarContainer, SidebarHeader } from './sidebar.styles';
import { Logo } from '../logo/logo.component';
import { nanoid } from '@reduxjs/toolkit';

export const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddNoteClicked = () => {
    const id = nanoid();
    dispatch(createNote({ id }));
    navigate(`/${id}`);
  };

  return (
    <SidebarContainer>
      <SidebarHeader>
        <Logo />
        <Button onClick={onAddNoteClicked}>Add Note</Button>
      </SidebarHeader>
      <NotesList />
    </SidebarContainer>
  );
};
