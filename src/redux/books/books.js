const ADD = 'React-BookStore/Books/Add';
const REMOVE = 'React-BookStore/Books/Remove';
const initialState = [];

// Actions

export const addBook = (book) => ({
  type: ADD,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE,
  payload: id,
});

// Reducer

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default bookReducer;
