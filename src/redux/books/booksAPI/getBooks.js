import { createAsyncThunk } from '@reduxjs/toolkit';
import { FETCH_BOOKS, fetchBooks } from '../books';
import BOOK_URL from '../../commonAPI';

const getBooks = createAsyncThunk(FETCH_BOOKS, async (_, thunkAPI) => {
  const response = await fetch(BOOK_URL, {
    method: 'GET',
  });
  const responseJSON = await response.json();
  thunkAPI.dispatch(fetchBooks(responseJSON));
  return responseJSON;
});

export default getBooks;
