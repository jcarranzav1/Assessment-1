/* eslint-disable linebreak-style */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/ui/NavBar';
import { Spinner } from 'react-bootstrap';

const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Detail = React.lazy(() => import('./components/Detail'));

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="home"
          element={
            <React.Suspense fallback={<Spinner animation="border" />}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="about"
          element={
            <React.Suspense fallback={<Spinner animation="border" />}>
              <About />
            </React.Suspense>
          }
        />
        <Route path="detail">
          <Route
            path=":id"
            element={
              <React.Suspense fallback={<Spinner animation="border" />}>
                <Detail />
              </React.Suspense>
            }
          />
        </Route>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<Spinner animation="border" />}>
              <Home />
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
};
export default App;
