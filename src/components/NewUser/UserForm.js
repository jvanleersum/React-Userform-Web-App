import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import classes from "./UserForm.module.css";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const setEnteredUsername = (e) => {
    setUsername(e.target.value);
  };

  const setEnteredAge = (e) => {
    setAge(e.target.value);
  };

  const dismissModalHandler = () => {
    setError();
  }

  const submitNewUserHandler = (e) => {
    e.preventDefault();
    if (age.trim().length === 0 || username.trim().length === 0) {
      setError({title: "Invalid input", content: "Please set a valid name and age (non-empty values)."});

      return;
    }
    if (+age < 1) {
      setError({title: "Invalid age", content: "The age cannot be smaller than 1."});
      return;
    }
    const newUser = {
      key: Math.random(),
      username: username,
      age: age,
    };
    props.onSubmit(newUser);
    setUsername("");
    setAge("");
  };

  return (
    <div>
      {error && <Modal
          title={error.title}
          content={error.content}
          onDismiss={dismissModalHandler}
        ></Modal>}
      <Card className={classes.input}>
        <form onSubmit={submitNewUserHandler}>
          <label htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={setEnteredUsername}
          ></input>
          <label htmlFor="age">
            Age (in years)
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={setEnteredAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
