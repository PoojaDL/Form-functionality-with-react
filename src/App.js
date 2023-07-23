import React, { useState } from "react";
import Form from "./Components/Form";

const formElements = [
  { id: 1, name: "Max", age: 30 },
  { id: 2, name: "Nick", age: 32 },
];

function App() {
  const [userList, addUser] = useState(formElements);

  const getUser = (value) => {
    addUser([...userList, value]);
  };

  return (
    <div>
      <Form getUser={getUser} users={userList}></Form>
    </div>
  );
}

export default App;
