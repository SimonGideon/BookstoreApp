import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import postBook from '../redux/books/booksAPI/postBook';
import '../styles/Form.css';

const Form = () => {
  const [inputData, setInputData] = useState({ title: '', author: '', category: '' });

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const addBookHandler = (e) => {
    e.preventDefault();
    const { title, author, category } = inputData;
    if (title && author && category) {
      dispatch(postBook({
        item_id: new Date().getTime().toString(),
        title,
        author,
        category,
      }));
      setInputData({ title: '', author: '', category: '' });
    }
  };

  return (
    <div className="add-book">
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" name="title" value={inputData.title} placeholder="Title" onChange={changeHandler} id="input-title" />
        <input type="text" name="author" value={inputData.author} placeholder="Author" onChange={changeHandler} id="input-author" />
        <select type="text" name="category" value={inputData.category} placeholder="Category" onChange={changeHandler} id="input-category">
          <option value="" disabled>Categories</option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="biography">Biography</option>
        </select>
        <button type="button" className="btn-add-book" onClick={addBookHandler}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
