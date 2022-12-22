export const ADD_BOOK = 'Bookstore/books/ADD_BOOK';
export const REMOVE_BOOK = 'Bookstore/books/REMOVE_BOOK';
export const FETCH_BOOKS = 'Bookstore/books/FETCH_BOOKS';

const initialState = [];

// Actions

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});

export const fetchBooks = (books) => ({
  type: FETCH_BOOKS,
  books,
});

// Reducer

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.bookId);
    case FETCH_BOOKS: {
      const bookList = [];
      Object.entries(action.books).forEach(([key, value]) => bookList.push({
        item_id: key,
        title: value[0].title,
        author: value[0].author,
        category: value[0].category,
      }));
      return [...bookList];
    }
    default:
      return state;
  }
};

export default bookReducer;
