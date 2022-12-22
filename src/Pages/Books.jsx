import React from 'react';
import { useDispatch } from 'react-redux';
import BookList from '../components/BookList';
import Form from '../components/Form';
import getBooks from '../redux/books/booksAPI/getBooks';

const Books = () => {
  const dispatch = useDispatch();
  dispatch(getBooks());
  return (
    <section>
      <BookList />
      <Form />
    </section>
  );
};

export default Books;
