import React, { useState } from "react";

import Card from "../UI/Card";

import Button from "../UI/Button";

import classes from "./AddUser.module.css";

import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
            title: "Invalid Input",
            message: "Please enter a valid name and age."
        })
      return;
    }
    if (+enteredAge < 1) {
        setError({
            title: "Invalid Age",
            message: "Please enter a valid age > 0"
        })
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChange = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChange = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>
        {/* //The only way to get rid of the modal is to reset error so that it is empty or null or falsey */}
     {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChange}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChange}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
