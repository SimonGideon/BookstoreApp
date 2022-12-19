const ADDBOOK = 'ADD_BOOK';
const REMOVEBOOK = 'REMOVE_BOOK';

const ADD_BOOK = (book) => ({
  type: ADDBOOK,
  payload: book,
});

const REMOVE_BOOK = (book) => ({
  type: REMOVEBOOK,
  payload: book,
});

export const addBook = (book) => (dispatch) => {
  dispatch(ADD_BOOK(book));
};

export const removeBook = (book) => (dispatch) => {
  dispatch(REMOVE_BOOK(book));
};

// Language: javascript
// Path: src/redux/books/books.js
const initialState = {
  books: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case 'REMOVE_BOOK':
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default booksReducer;
