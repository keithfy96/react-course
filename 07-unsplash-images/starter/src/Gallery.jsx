import React from "react";
import { useFetchPhotos } from "./ReactQueryCustomHooks";
import { useGlobalContext } from "./contex";

const Gallery = () => {
  const { search } = useGlobalContext();
  const { isLoading, data, results, isError } = useFetchPhotos(search);
  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }
  if (data?.results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results Found...</h4>
      </section>
    );
  }
  return (
    <section className="image-container">
      {data.results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          ></img>
        );
      })}
    </section>
  );
};

export default Gallery;
