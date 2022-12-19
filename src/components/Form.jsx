import React from 'react';

const Form = () => (
  <div>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input type="text" name="title" placeholder="Title" required />
      <input type="text" name="author" id="author" placeholder="Author" required />
      <button type="button">ADD BOOK</button>
    </form>
  </div>
);

export default Form;
