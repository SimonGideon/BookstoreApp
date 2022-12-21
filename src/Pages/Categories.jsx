import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={() => dispatch(checkStatus())}>Check Status</button>
      <h1>{categories}</h1>
    </div>
  );
};

export default Categories;
