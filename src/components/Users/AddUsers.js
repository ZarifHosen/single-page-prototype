import React, { useState } from "react";
import classes from "./AddUsers.module.css";
import Card from "../UI/Card";
import Buttons from "../UI/Buttons";

function AddUsers() {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredUsername, enteredAge);
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">User Name:</label>
                <input id="username" type="text" onChange={usernameChangeHandler} />
                <label htmlFor="age">Age (Years):</label>
                <input id="age" type="number" onChange={ageChangeHandler} />
                <Buttons type="submit">Add User</Buttons>
            </form>
        </Card>
    );
}

export default AddUsers;
