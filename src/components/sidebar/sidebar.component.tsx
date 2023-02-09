import { useContext } from 'react';

import { Button } from '../button/button.component';
import { NotesList } from '../notes-list/notes-list.component';
import { SidebarContainer, SidebarHeader } from './sidebar.styles';
import { NotesContext } from '../../context';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../logo/logo.component';

export const Sidebar = () => {
  const navigate = useNavigate();
  const { addNote, createNote } = useContext(NotesContext);

  const addNoteHandler = () => {
    const note = createNote({ content: 'New note :D' });

    if (note) {
      addNote(note);
      navigate(`/${note.id}`);
    }
  };

  return (
    <SidebarContainer>
      <SidebarHeader>
        <Logo />
        <Button onClick={addNoteHandler}>Add Note</Button>
      </SidebarHeader>
      <NotesList />
    </SidebarContainer>
  );
};
