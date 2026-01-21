import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root/Root';
import Policy from '../Pages/Policy/Policy';
import ShariAndPanjabi from '../Pages/Home/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: ShariAndPanjabi,
      },

      {
        path: '/privacy-policy',
        Component: Policy,
      },
    ],
  },
]);
