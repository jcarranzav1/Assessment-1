import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { About } from '../components/About';
import { Detail } from '../components/Detail';
import { Home } from '../components/Home';
import { NavBar } from '../components/ui/NavBar';

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div>
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="detail">
              <Route path=":id" element={<Detail />} />
            </Route>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
