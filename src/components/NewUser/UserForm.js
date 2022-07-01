import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import "./UserForm.css";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const setEnteredUsername = (e) => {
    setUsername(e.target.value);
  };

  const setEnteredAge = (e) => {
    setAge(e.target.value);
  }

  const submitNewUserHandler = (e) => {
    e.preventDefault();
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
    <Card>
      <form className="user-form" onSubmit={submitNewUserHandler}>
        <label className="user-form__label">Username</label>
        <input
          type="text"
          className="user-form__input"
          name="username"
          value={username}
          onChange={setEnteredUsername}
        ></input>
        <label className="user-form__label">Age (in years)</label>
        <input
          type="number"
          className="user-form__input"
          name="age"
          value={age}
          onChange={setEnteredAge}
        ></input>
        <Button>Add User</Button>
      </form>
    </Card>
  );
};

export default UserForm;
