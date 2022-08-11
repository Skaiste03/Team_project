import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ROUTES from './shared/constants/routes';
import './App.css';
import Header from './components/organisms/Header/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense>
        <Routes>
          {ROUTES.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
