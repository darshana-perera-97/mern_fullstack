import React from "react";

export default function Design() {
  const [list, setList] = React.useState([
    { id: 1, name: "dsp", age: 12, username: "pspp" },
  ]);
  return (
    <div>
      {list.map((user) => {
        return <div>
            <h1>Name :{user.name}</h1>
            <h1>Age :{user.age}</h1>
            <h1>UserName :{user.username}</h1>
        </div>;
      })}
    </div>
  );
}
