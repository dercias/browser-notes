import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearFilters, createNote, filterBy } from '../../store/notes';
import { NotesList } from '../notes-list/notes-list.component';
import {
  NotesIcon,
  SidebarButtons,
  SidebarContainer,
  SidebarHeader,
  SidebarNav,
  SidebarNavItem,
  StarIcon,
  TrashIcon,
} from './sidebar.styles';
import { Logo } from '../logo/logo.component';
import { nanoid } from '@reduxjs/toolkit';
import { HiPlus } from 'react-icons/hi';
import { SidebarButton } from '../sidebar-button/sidebar-button.component';
import { useState } from 'react';

const NAV_ITEMS = {
  ALL_NOTES: 'All Notes',
  STARRED: 'Starred',
  TRASH: 'Trash',
};

export const Sidebar = () => {
  const [selectedNavItem, setSelectedNavItem] = useState(NAV_ITEMS.ALL_NOTES);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddNoteClicked = () => {
    const id = nanoid();
    dispatch(createNote({ id }));
    navigate(`/${id}`);
  };

  const onShowStarredClick = () => {
    dispatch(filterBy({ showStarred: true }));
    setSelectedNavItem(NAV_ITEMS.STARRED);
  };

  const onShowAllNotesClick = () => {
    dispatch(clearFilters());
    setSelectedNavItem(NAV_ITEMS.ALL_NOTES);
  };

  const onShowTrashClick = () => {
    dispatch(filterBy({ showDeleted: true }));
    setSelectedNavItem(NAV_ITEMS.TRASH);
  };

  const isSelected = (navItem: string) => navItem === selectedNavItem;

  return (
    <SidebarContainer>
      <SidebarHeader>
        <Logo />
        <SidebarNav>
          <SidebarNavItem
            onClick={onShowAllNotesClick}
            className={isSelected(NAV_ITEMS.ALL_NOTES) ? 'font-semibold' : ''}
          >
            <NotesIcon />
            {NAV_ITEMS.ALL_NOTES}
          </SidebarNavItem>
          <SidebarNavItem
            onClick={onShowStarredClick}
            className={isSelected(NAV_ITEMS.STARRED) ? 'font-semibold' : ''}
          >
            <StarIcon />
            {NAV_ITEMS.STARRED}
          </SidebarNavItem>
          <SidebarNavItem
            onClick={onShowTrashClick}
            className={isSelected(NAV_ITEMS.TRASH) ? 'font-semibold' : ''}
          >
            <TrashIcon />
            {NAV_ITEMS.TRASH}
          </SidebarNavItem>
        </SidebarNav>
      </SidebarHeader>
      <SidebarButtons>
        <SidebarButton title='Add Note' onClick={onAddNoteClicked}>
          <HiPlus />
        </SidebarButton>
      </SidebarButtons>
      <NotesList />
    </SidebarContainer>
  );
};
