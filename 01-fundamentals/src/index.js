import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from "./books.js";
import Book from "./Book.js";

// const Book = require("./Book");
const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
  };
  return (
    <>
      <h1>amazon best seller</h1>
      <section className="booklist">
        <EventExamples />
        {books.map((book, index) => {
          return (
            <Book {...book} key={book.id} getBook={getBook} number={index} />
          );
        })}
      </section>
    </>
  );
};

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log("handle form input");
  };
  const handleButtonClick = () => {
    alert("handle button click");
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("form submission");
  };
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="product"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        ></input>
        <button onClick={handleButtonClick} type="submit">
          submit
        </button>
        <div>
          <button type="button" onClick={() => console.log("click me")}>
            click me
          </button>
        </div>
      </form>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
