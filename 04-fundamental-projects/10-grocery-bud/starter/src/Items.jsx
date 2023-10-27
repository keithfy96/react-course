import React from "react";
import SingleItem from "./SingleItem";

const items = ({ items, removeItem }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} removeItem={removeItem} />;
      })}
    </div>
  );
};

export default items;
