const UserItem = ({ name, lastName, age }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{lastName}</td>
      <td>{age}</td>
    </tr>

    // <div>
    //   <h2>
    //     {name} {lastName}
    //     {" - "}
    //     {age}
    //     {" years old"}
    //   </h2>
    // </div>
  );
};

export default UserItem;
