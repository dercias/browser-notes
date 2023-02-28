import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components';
import { Main } from './home.styles';
import { useNavigate } from 'react-router-dom';
import { markFirstRun, selectIsFirstRun } from '../../store/settings';
import { createNote } from '../../store/notes';
import { initialNotes } from './initial-notes';

export const Home = () => {
  const navigate = useNavigate();
  const shouldInitializeNotes = useRef(true);
  const dispatch = useDispatch();
  const isFirstRun = useSelector(selectIsFirstRun);

  useEffect(() => {
    if (isFirstRun && shouldInitializeNotes.current) {
      shouldInitializeNotes.current = false;
      dispatch(markFirstRun());
      initialNotes.forEach((note) => dispatch(createNote(note)));
      navigate(`/note/${initialNotes[0].id}`);
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
