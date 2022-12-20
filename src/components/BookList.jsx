import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Book id={book.id} title={book.title} author={book.author} />
            <button type="button" onClick={() => dispatch(removeBook(book.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
