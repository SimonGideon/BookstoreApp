import Book from './Book';
import '../App.css';

function BookList() {
  const books = [
    {
      id: 1,
      title: 'The Hunger Games',
      genres: ['Action', 'Adventure', 'Sci-Fi'],
      author: 'Suzanne Collins',
      progress: 64,
      chapter: 'Chapter 17',
    },
    {
      id: 2,
      title: 'Dune',
      genres: ['Sci-Fi', 'Fantasy'],
      author: 'Frank Herbert',
      progress: 8,
      chapter: 'Chapter 3: "A Lesson Learned"',
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      genres: ['Economics', 'Non-Fiction'],
      author: 'Suzanne Collins',
      progress: 0,
      chapter: 'Introduction',
    },
  ];
  return (
    <ul>
      {books.map((book) => (
        <li className="Main-content" key={book.id}>
          <Book title={book.title} author={book.author} />
          <button type="button">Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default BookList;
