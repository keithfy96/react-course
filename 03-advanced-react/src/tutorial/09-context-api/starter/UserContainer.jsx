import React from "react";
import { useAppContext } from "./Navbar";

const UserContainer = () => {
  const { user, logout } = useAppContext();

  return (
    <div>
      {user ? (
        <div>
          <p>hello there {user.name}</p>{" "}
          <button className="btn" onClick={logout}>
            logout
          </button>{" "}
        </div>
      ) : (
        <p>please login</p>
      )}
    </div>
  );
};

export default UserContainer;
