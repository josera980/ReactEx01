import React, { useState } from "react";

import UsersList from "./components/Lists/UsersList";
import UserInputs from "./components/Inputs/UserInputs";

function App() {
  const [usersInfo, setUsersInfo] = useState([]);

  const addUserHandler = (enteredUser) => {
    setUsersInfo((prevUsers) => {
      return [enteredUser, ...prevUsers];
    });
  };
  console.log(usersInfo);

  let content = <p>No users found.</p>;

  if (usersInfo.length > 0) {
    content = <UsersList items={usersInfo} />;
  }

  return (
    <div>
      <UserInputs onAddUser={addUserHandler} />
      {content}
    </div>
  );
}

export default App;
