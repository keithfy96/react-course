import { useState, useEffect } from "react";
const url = "https://api.github.com/users";

// const FetchData = () => {
//   const getData = async () => {
//     const resp = await fetch(url);
//     const data = await resp.json();
//     console.log(data);
//     return data;
//   };

//   const [users, setUsers] = useState(getData());
//   useEffect(() => {
//     setUsers(getData());
//     // console.log(users);
//   });

//   return (
//     <div>
//       {users.map(({ avatar_url, login }) => {
//         console.log(login);
//         return (
//           <div>
//             <img src={avatar_url} alt="" />
//             <h2>{login}</h2>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default FetchData;

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
