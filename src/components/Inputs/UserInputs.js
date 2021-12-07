import React, { useState } from "react";

import classes from "./UserInputs.module.css";

const UserInputs = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const lastNameInputChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (
      enteredName.trim().length === 0 ||
      enteredLastName.trim().length === 0 ||
      enteredAge.trim().length === 0
    ) {
      return;
    }
    const userInfo = {
      name: enteredName,
      lastName: enteredLastName,
      age: enteredAge,
      id: Math.random().toString(),
    };
    console.log(userInfo);
    props.onAddUser(userInfo);
    setEnteredName("");
    setEnteredLastName("");
    setEnteredAge("");
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={enteredName}
          onChange={nameInputChangeHandler}
        ></input>
      </div>
      <div>
        <label>Last name:</label>
        <input
          type="text"
          value={enteredLastName}
          onChange={lastNameInputChangeHandler}
        ></input>
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          step="1"
          min="1"
          value={enteredAge}
          onChange={ageInputChangeHandler}
        ></input>
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserInputs;
