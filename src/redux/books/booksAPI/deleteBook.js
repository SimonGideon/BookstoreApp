import { createAsyncThunk } from '@reduxjs/toolkit';
import { REMOVE_BOOK, removeBook } from '../books';
import BOOK_URL from '../../commonAPI';

const deleteBook = createAsyncThunk(REMOVE_BOOK, async (bookId, thunkAPI) => {
  const response = await fetch(`${BOOK_URL}/${bookId}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: bookId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseText = await response.text();
  thunkAPI.dispatch(removeBook(bookId));
  return responseText;
});

export default deleteBook;
