import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  const title = "Iron Flame The Empyrean, 2";
  const author = "Rebecca Yarros";
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/91ke43dIxkL._AC_UL900_SR900,600_.jpg"
        alt="Iron Flame (The Empyrean, 2)"
      />
      <h2>{title}</h2>
      <h4> {author.toUpperCase()} </h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
