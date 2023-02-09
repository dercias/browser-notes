import { useContext, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Sidebar } from '../../components';
import { NotesContext } from '../../context';
import { Main } from './home.styles';

type NoteRouteParams = {
  id: string;
};

export const Home = () => {
  const { notes, setOpenNoteId } = useContext(NotesContext);

  const { id } = useParams<keyof NoteRouteParams>() as NoteRouteParams;

  useEffect(() => {
    const found = notes.find((n) => n.id === Number(id));

    if (found) {
      setOpenNoteId(Number(id));
    }
  }, [id, notes, setOpenNoteId]);

  return (
    <>
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};
