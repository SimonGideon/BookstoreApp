import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import deleteBook from '../redux/books/booksAPI/deleteBook';
import Book from './Book';
import '../styles/Books.css';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  return (
    <ul>
      {books.map((book) => (
        <li key={book.item_id}>
          <div className="book-details">
            <Book
              title={book.title}
              author={book.author}
              category={book.category}
            />
            <div className="action-buttons">
              <button className="btn" type="button">Comments</button>
              <div className="divider" />
              <button className="btn remove-btn" type="button" onClick={() => dispatch(deleteBook(book.item_id))}>Remove</button>
              <div className="divider" />
              <button className="btn" type="button">Edit</button>
            </div>
          </div>
          <div className="progress">
            <div className="progress-circle" />
            <div className="percentage">
              <p className="percent">
                {Math.floor(Math.random() * 101)}
                %
              </p>
              <p className="completed">Completed</p>
            </div>
          </div>
          <div className="column-divider" />
          <div className="chapter">
            <div className="chapter-info">
              <p className="cur-chapter">CURRENT CHAPTER</p>
              <p className="chapter-num">
                Chapter
                {' '}
                {Math.floor(Math.random() * 101)}
              </p>
            </div>
            <button type="button" className="progress-btn">UPDATE PROGRESS</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
