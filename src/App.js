import React, { useState } from "react";

import UsersList from "./components/Lists/UsersList";
import UserInputs from "./components/Inputs/UserInputs";
import "./App.css";

function App() {
  const [usersInfo, setUsersInfo] = useState([]);

  const addUserHandler = (enteredUser) => {
    setUsersInfo((prevUsers) => {
      return [...prevUsers, enteredUser];
    });
  };
  console.log(usersInfo);

  let content = <p>No users found.</p>;

  if (usersInfo.length > 0) {
    content = (
      <table className="table">
        <tr>
          <th>Name </th>
          <th>Last Name </th>
          <th>Age </th>
        </tr>
        <UsersList users={usersInfo} />
      </table>
    );
  }

  return (
    <div className="App">
      <h1>JR Exercise 1 -- KLK</h1>
      <UserInputs onAddUser={addUserHandler} />
      {content}
    </div>
  );
}

export default App;
