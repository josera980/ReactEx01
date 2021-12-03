import UserItem from "./UserItem";

const UsersList = (props) => {
  return props.items.map((user) => {
    return (
      <UserItem
        name={user.name}
        lastName={user.lastName}
        age={user.age}
        key={user.id}
      />
    );
  });
};

export default UsersList;
