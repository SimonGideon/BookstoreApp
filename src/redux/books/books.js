const ADD = 'React-BookStore/Books/Add';
const REMOVE = 'React-BookStore/Books/Remove';

const initialState = [{
  id: '1',
  title: 'Clean Code',
  author: 'Robert Martin',
},
{
  id: '2',
  title: 'Refactoring',
  author: 'Kent Beck',
},
];

// Actions

export const addBook = (book) => ({
  type: ADD,
  book,
});

export const removeBook = (bookId) => ({
  type: REMOVE,
  bookId,
});

// Reducer

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, { ...action.book, id: new Date().getTime().toString() }];
    case REMOVE:
      return state.filter((book) => book.id !== action.bookId);
    default:
      return state;
  }
};

export default bookReducer;
