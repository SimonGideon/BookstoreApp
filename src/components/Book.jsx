import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author, category }) => (
  <div>
    <h2>{title}</h2>
    <h3>{author}</h3>
    <p>{category}</p>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
