import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Books.css';

const Book = ({ title, author, category }) => (
  <div>
    <p className="category">{category}</p>
    <h2 className="title">{title}</h2>
    <p className="author">{author}</p>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
