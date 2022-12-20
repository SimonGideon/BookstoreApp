const CHECK = 'React-BookStore/categories/Check';
const initialState = [];

// Action

export const checkStatus = () => ({
  type: CHECK_STATUS,
  payload: 'Under construction',
});

// Reducer

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return action.payload;
    default:
      return state;
  }
};

export default categoriesReducer;
