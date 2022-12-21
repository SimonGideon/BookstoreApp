import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [inputData, setInputData] = useState({ title: '', author: '' });

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const addBookHandler = (e) => {
    e.preventDefault();
    const { title, author } = inputData;
    if (title && author) {
      dispatch(addBook({ title, author }));
      setInputData({ title: '', author: '' });
    }
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" name="title" value={inputData.title} placeholder="Title" onChange={changeHandler} required />
        <input type="text" name="author" value={inputData.author} placeholder="Author" onChange={changeHandler} required />
        <button type="button" onClick={addBookHandler}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
