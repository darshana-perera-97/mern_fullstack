import React from "react";

import Axios from "axios";

export default function Design() {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((responce) => {
      setList(responce.data);
    });
  }, []);
  return (
    <div>
      {list.map((user) => {
        return (
          <div>
            <h1>Name :{user.name}</h1>
            <h1>Age :{user.age}</h1>
            <h1>UserName :{user.username}</h1>
          </div>
        );
      })}
      <div>
        <input type="text" placeholder="name"/>
        <input type="text" placeholder="age"/>
        <input type="text" placeholder="username"/>
        <button>Create user</button>
      </div>
    </div>
  );
}
