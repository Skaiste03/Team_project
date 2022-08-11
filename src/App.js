import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ROUTES from './shared/constants/routes';
import './App.css';
import Header from './components/organisms/Header/Header';
import Footer from './components/organisms/Footer/Footer';
import SERVICES from './shared/constants/services';
import Card from './components/atoms/Card/Card';


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
      {SERVICES.map((service) => (
        <Card key={service.id} service={service} />
      ))}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
