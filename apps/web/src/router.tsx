import { createBrowserRouter } from 'react-router';

import { AppShell } from '@/app/app-shell';
import { ExplorePage } from '@/pages/explore-page';
import { HomePage } from '@/pages/home-page';
import { NotFoundPage } from '@/pages/not-found-page';
import { TestPage } from '@/pages/test-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'explore', element: <ExplorePage /> },
      { path: 'test', element: <TestPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
