import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Book id={book.id} title={book.title} author={book.author} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
