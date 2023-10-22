import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "read books",
  });
  // version 1
  // const [name, setName] = useState("peter");
  // const [age, setAge] = useState(24);
  // const [hobby, setHobby] = useState("read books");

  const displayPerson = () => {
    // version 1
    // setName("john");
    // setAge(28);
    // setHobby("scream at the computer");

    // not using desctructuring
    // setPerson({ name: "john", age: 28, hobby: "screaming at the computer" });

    // copying values
    setPerson({ ...person, name: "susan" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys : {person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        show john
      </button>
    </>
  );
};

export default UseStateObject;
