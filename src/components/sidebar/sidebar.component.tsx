import { ChangeEvent, useState, useEffect } from 'react';
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
import { SearchInput } from '../search-input/search-input.component';
import { Button } from '../button';

const NAV_ITEMS = {
  ALL_NOTES: 'All Notes',
  STARRED: 'Starred',
  TRASH: 'Trash',
};

export const Sidebar = () => {
  const [searchString, setSearchString] = useState('');
  const [selectedNavItem, setSelectedNavItem] = useState(NAV_ITEMS.ALL_NOTES);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddNoteClicked = () => {
    const id = nanoid();
    dispatch(createNote({ id }));
    navigate(`/note/${id}`);
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

  const onSearchInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchString(event.target.value);

  const onSearchInputClear = () => setSearchString('');

  useEffect(() => {
    dispatch(filterBy({ searchString }));
  }, [searchString, dispatch]);

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
        <SearchInput
          value={searchString}
          onClear={onSearchInputClear}
          onChange={onSearchInputChange}
          placeholder='Search note title'
        />
        <Button
          title='Add Note'
          variant='ghost'
          data-testid='add-note-button'
          onClick={onAddNoteClicked}
        >
          <HiPlus />
        </Button>
      </SidebarButtons>
      <NotesList />
    </SidebarContainer>
  );
};
