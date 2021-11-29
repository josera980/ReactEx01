const UsersList = (props) => {
  return (
    <ul>
      {props.items.map((user) => {
        return user;
      })}
    </ul>
  );
};

export default UsersList;
