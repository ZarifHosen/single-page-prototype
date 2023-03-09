import React, { useState } from "react";
import classes from "./AddUsers.module.css";
import Card from "../UI/Card";
import Buttons from "../UI/Buttons";
import Modals from "../UI/Modals"
import Wrapper from "../Helpers/Wrapper";

function AddUsers(props) {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState("");


    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError("Please enter a valid name and age.");
            return;
        }
        if (+enteredAge < 1 || +enteredAge > 100) {
            setError("Please enter a valid age between 1 and 100.");
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
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
        <Wrapper>
            {/* Render the Modals component  */}
            <Modals error={error} setError={setError} />
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">User Name:</label>
                    <input
                        id="username"
                        value={enteredUsername}
                        type="text"
                        onChange={usernameChangeHandler}
                    />
                    <label htmlFor="age">Age (Years):</label>
                    <input
                        id="age"
                        value={enteredAge}
                        type="number"
                        onChange={ageChangeHandler}
                    />
                    <Buttons type="submit">Add User</Buttons>
                </form>
            </Card>
        </Wrapper>
    );
}

export default AddUsers;
