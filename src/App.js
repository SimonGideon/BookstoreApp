import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './Components/Pages/Books';
import Navbar from './Components/Pages/Navbar';
import Cartegory from './Components/Pages/Cartegory';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Cartegory" element={<Cartegory />} />
      </Routes>
    </div>
  );
}

export default App;
