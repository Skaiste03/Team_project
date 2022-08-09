// import React from 'react';
import { uid } from 'uid';
// const HomePage = React.lazy(() => import('../pages/HomePage'));

const ROUTES = [
  { id: uid(), path: '/', text: 'Home', element: '' },
  { id: uid(), path: '/', text: 'About us', element: '' },
  { id: uid(), path: '/', text: 'Services', element: '' },
  { id: uid(), path: '/', text: 'Blog', element: '' },
  { id: uid(), path: '/', text: 'Contact', element: '' },
];

export default ROUTES;
