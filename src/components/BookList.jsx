import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import deleteBook from '../redux/books/booksAPI/deleteBook';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            <Book
              title={book.title}
              author={book.author}
              category={book.category}
            />
            <button type="button" onClick={() => dispatch(deleteBook(book.item_id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
