import React, { useEffect, useState } from "react";
import { useFetchPhotos } from "./ReactQueryCustomHooks";
import { useGlobalContext } from "./contex";

const SearchForm = () => {
  const { setSearch } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;

    if (!searchValue) return;

    setSearch(searchValue);
    return searchValue;
  };

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          className="form-input search-input"
          placeholder="cat"
          name="search"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
