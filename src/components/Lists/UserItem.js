const UserItem = (props) => {
  return (
    <div>
      <h2>
        {props.name} {props.lastName}
        {" - "}
        {props.age}
        {" years old"}
      </h2>
    </div>
  );
};

export default UserItem;
