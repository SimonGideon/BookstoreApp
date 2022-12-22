import { createAsyncThunk } from '@reduxjs/toolkit';
import { ADD_BOOK, addBook } from '../books';
import BOOK_URL from '../../commonAPI';

const postBook = createAsyncThunk(ADD_BOOK, async (book, thunkAPI) => {
  const response = await fetch(BOOK_URL, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseText = await response.text();
  thunkAPI.dispatch(addBook(book));
  return responseText;
});

export default postBook;
