import "./Form.css";
import GetUsers from "./GetUsers";
import ShowUsers from "./ShowUsers";

const Form = (props) => {
  const addUsers = (user) => {
    props.getUser(user);
  };

  return (
    <div className="form-control">
      <GetUsers getUser={addUsers}></GetUsers>
      {props.users.map((users) => (
        <ShowUsers key={users.id} name={users.name} age={users.age} />
      ))}
    </div>
  );
};

export default Form;
