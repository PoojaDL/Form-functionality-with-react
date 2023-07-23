import "./ShowUsers.css";

const ShowUsers = (props) => {
  return (
    <div>
      <ul>
        <li>
          <div>{`${props.name} (${props.age} years old)`}</div>
        </li>
      </ul>
    </div>
  );
};

export default ShowUsers;
