import React, { useState } from "react";

import UserInputs from "./components/Inputs/UserInputs";

function App() {
  const [usersInfo, setUsersInfo] = useState("");

  const addUserHandler = (enteredUser) => {
    setUsersInfo((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.push(enteredUser);
      return updatedUsers;
    });
  };
  console.log(usersInfo);

  return (
    <div>
      <UserInputs onAddUser={addUserHandler} />
      {usersInfo}
      <p>probandooo</p>
    </div>
  );
}

export default App;
