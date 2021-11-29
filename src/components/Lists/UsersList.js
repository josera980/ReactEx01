const UsersList = (props) => {
  return props.items.map((user) => {
    return <ul>{user}</ul>;
  });
};

export default UsersList;
