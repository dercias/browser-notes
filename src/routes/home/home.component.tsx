import { nanoid } from '@reduxjs/toolkit';
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components';
import { Main } from './home.styles';
import { useNavigate } from 'react-router-dom';
import { markFirstRun, selectIsFirstRun } from '../../store/settings';
import { createNote } from '../../store/notes';

const welcomeContent = `
# Heading 1

Lorem ipsum **dolor sit amet**. Sit repudiandae quos aut asperiores facere et distinctio repellendus.

## Heading 2

Est rerum _molestias sed laboriosam_ tempora et ~~exercitationem eius~~.

### Heading 3

#### Heading 4

##### Heading 5

1. First ordered list item
2. Another item

- Unordered sub-list.

1. Actual numbers don't matter, just that it's a number
1. Ordered sub-list
1. And another item.

`;

export const Home = () => {
  const navigate = useNavigate();
  const shouldInitializeNotes = useRef(true);
  const dispatch = useDispatch();
  const isFirstRun = useSelector(selectIsFirstRun);

  useEffect(() => {
    if (isFirstRun && shouldInitializeNotes.current) {
      shouldInitializeNotes.current = false;
      const id = nanoid();
      dispatch(markFirstRun());
      dispatch(
        createNote({
          id,
          content: welcomeContent,
          title: 'Hello world!',
          starred: true,
        })
      );
      dispatch(
        createNote({
          id,
          content: welcomeContent,
          title: 'A second note',
        })
      );
      navigate(`/${id}`);
    }
  }, [isFirstRun, dispatch, navigate]);

  return (
    <>
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};
