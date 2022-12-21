import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import { ImUser } from 'react-icons/im';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];
  return (
    <header>
      <nav>
        <h1>Bookstore CMS</h1>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} className={({ isActive }) => (isActive ? 'activelink' : undefined)}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="avatar">
        <ImUser />
      </div>
    </header>
  );
};

export default Navbar;
