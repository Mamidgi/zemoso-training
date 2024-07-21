import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Description from './Description';
import Home from './Home';
import Navbar from './NavBar';

const App: React.FC = () => (
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/description" element={<Description />} />
    </Routes>
  </Router>
);

export default App;
