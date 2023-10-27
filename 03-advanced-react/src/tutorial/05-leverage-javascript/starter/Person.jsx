import React from "react";

const Person = ({ id, name, nickName, images }) => {
  return (
    <div key={id}>
      {images ? <img src={images[0].small.url} alt="" /> : "no image exists"}
      <h2>{name}</h2>
      <p>Nickname: {nickName || "shakeAndBake"}</p>
    </div>
  );
};

export default Person;
