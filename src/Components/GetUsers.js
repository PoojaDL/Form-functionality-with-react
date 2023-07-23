import "./GetUsers.css";
import { useState } from "react";

const GetUsers = (props) => {
  const [title, setTitle] = useState("");
  const [age, setAge] = useState("");

  const getTitle = (event) => {
    setTitle(event.target.value);
  };

  const getAge = (event) => {
    setAge(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    if (title && age > 0) {
      const user = {
        key: Math.random().toString(),
        name: title,
        age: age,
      };
      props.getUser(user);
      setTitle("");
      setAge("");
    } else if (title && age <= 0) {
      alert("enter proper age");
      return;
    } else {
      alert("enter details");
      return;
    }
  };

  return (
    <div className="form-control">
      <form onSubmit={formSubmit}>
        <label>Name</label>
        <input type="text" value={title} onChange={getTitle} />
        <label>Age</label>
        <input type="number" value={age} onChange={getAge} />
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default GetUsers;
