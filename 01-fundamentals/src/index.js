import React from "react";
import ReactDOM from "react-dom/client";

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/91ke43dIxkL._AC_UL900_SR900,600_.jpg"
    alt="Iron Flame (The Empyrean, 2)"
  />
);
const Title = () => <h2>Iron Flame (The Empyrean, 2)</h2>;
const Author = () => {
  return <h4> Rebecca Yarros </h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
