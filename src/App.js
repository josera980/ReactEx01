import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="table">Table</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<h1>JR Exercise 1 -- KLK</h1>}></Route>
          <Route
            exact
            path="/form"
            element={<UserInputs onAddUser={addUserHandler} />}
          ></Route>
          <Route exact path="/table" element={content}></Route>
        </Routes>
      </div>
    </Router>

    // <div className="App">
    //   <h1>JR Exercise 1 -- KLK</h1>
    //   <UserInputs onAddUser={addUserHandler} />
    //   {content}
    // </div>
  );
}

export default App;
