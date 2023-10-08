const Book = (props) => {
  const { id, img, title, author, number, getBook } = props;
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={() => getBook(id)}>click me</button>
      <h4> {author.toUpperCase()} </h4>
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  );
};

export default Book;
