import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Book from './Components/Pages/Books';
import Navbar from './Components/Navbar';
import Cartegory from './Components/Pages/Cartegory';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/Cartegory" element={<Cartegory />} />
      </Routes>
    </div>
  );
}

export default App;
