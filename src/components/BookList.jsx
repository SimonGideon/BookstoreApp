
import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);

import React, { useState } from 'react';
import Book from './Book';

const BookList = () => {
  const [books] = useState([
    { title: 'book 1', author: 'Author 1' },
    { title: 'book 2', author: 'Author 2' },
  ]);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>

          <li key={book.title}>
            <Book title={book.title} author={book.author} />
            <button type="button">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
