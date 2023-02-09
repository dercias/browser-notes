import { useDispatch } from 'react-redux';

import { createNote } from '../../store/notes';
import { Button } from '../button/button.component';
import { NotesList } from '../notes-list/notes-list.component';
import { SidebarContainer, SidebarHeader } from './sidebar.styles';
import { Logo } from '../logo/logo.component';

export const Sidebar = () => {
  const dispatch = useDispatch();

  const onAddNoteClicked = () => {
    dispatch(createNote({ title: '', content: '' }));
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
