import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer'

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;