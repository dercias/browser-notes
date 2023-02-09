import { createBrowserRouter } from 'react-router-dom';
import { NoteView } from './components';
import { Home } from './routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [{ path: ':id', element: <NoteView /> }],
  },
  {
    path: '*',
    element: <Home />,
  },
]);
