import React, { useState } from "react";
import classes from "./AddUsers.module.css";
import Card from "../UI/Card";
import Buttons from "../UI/Buttons";

function AddUsers() {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }


        console.log(enteredUsername, enteredAge);
        setEnteredUsername("");
        setEnteredAge("");
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
                <input id="username" value={enteredUsername} type="text" onChange={usernameChangeHandler} />
                <label htmlFor="age">Age (Years):</label>
                <input id="age" value={enteredAge} type="number" onChange={ageChangeHandler} />
                <Buttons type="submit">Add User</Buttons>
            </form>
        </Card>
    );
}

export default AddUsers;
