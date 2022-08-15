// import React from 'react';
import React from 'react';
import { uid } from 'uid';
import TEXTS from '../texts/texts';
const HomePage = React.lazy(() => import('../../pages/HomePage'));
const ServicesPage = React.lazy(() => import('../../pages/ServicesPage'));
const AboutPage = React.lazy(() => import('../../pages/AboutPage'));
const BlogPage = React.lazy(() => import('../../pages/BlogPage'));

const ROUTES = [
  {
    id: uid(),
    path: '/',
    element: <HomePage />,
    text: `${TEXTS.navigation.home}`,
  },
  {
    id: uid(),
    path: '/about',
    element: <AboutPage />,
    text: `${TEXTS.navigation.aboutus}`,
  },
  {
    id: uid(),
    path: '/services',
    element: <ServicesPage />,
    text: `${TEXTS.navigation.services}`,
  },
  {
    id: uid(),
    path: '/blog',
    element: <BlogPage />,
    text: `${TEXTS.navigation.blog}`,
  },
  { id: uid(), path: '/', element: '', text: `${TEXTS.navigation.contact}` },
];

export default ROUTES;
