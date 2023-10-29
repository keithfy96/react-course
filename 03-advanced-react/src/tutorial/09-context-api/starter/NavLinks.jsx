import React from "react";
import UserContainer from "./UserContainer";
import { links } from "./data.js";

const NavLinks = () => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        {links.map((item) => {
          const { id, link, text } = item;
          return (
            <li key={id}>
              <a href={link}>{text}</a>
            </li>
          );
        })}
      </ul>
      <UserContainer />
    </div>
  );
};

export default NavLinks;
