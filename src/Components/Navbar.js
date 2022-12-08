import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.module.css';

const Navbar = () => (
  <div>
    <nav>
      <h1>Bookstore CMS</h1>
      <ul>
        <li>
          {' '}
          <Link to="/">Books</Link>
          {' '}
        </li>
        <li>
          {' '}
          <Link to="/Cartegory">Cartegory</Link>
          {' '}
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
