import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components';
import { Main } from './home.styles';

export const Home = () => (
  <>
    <Sidebar />
    <Main>
      <Outlet />
    </Main>
  </>
);
