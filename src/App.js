import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './Pages/Books';
import Categories from './Pages/Categories';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </Router>
);

export default App;
