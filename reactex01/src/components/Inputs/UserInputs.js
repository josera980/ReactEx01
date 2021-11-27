import React, { useState } from "react";

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
      text:
        enteredName +
        " " +
        enteredLastName +
        " -- " +
        enteredAge +
        " years old",
    };
    console.log(userInfo.text);
    props.onAddUser(userInfo.text);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label>Name:</label>
        <input type="text" onChange={nameInputChangeHandler}></input>
      </div>
      <div>
        <label>Last name:</label>
        <input type="text" onChange={lastNameInputChangeHandler}></input>
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          step="1"
          min="1"
          onChange={ageInputChangeHandler}
        ></input>
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserInputs;
