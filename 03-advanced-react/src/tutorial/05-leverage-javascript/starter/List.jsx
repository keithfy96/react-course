import React from "react";
import { people } from "../../../data.js";
import Person from "./Person.jsx";

const List = () => {
  return (
    <div>
      {people.map((person) => {
        return (
          <div>
            <Person {...person} />
          </div>
        );
      })}
    </div>
  );
};

export default List;
