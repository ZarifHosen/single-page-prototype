import React, { useState, useRef } from "react";
import classes from "./AddUsers.module.css";
import Card from "../UI/Card";
import Buttons from "../UI/Buttons";
import Modals from "../UI/Modals"
import Wrapper from "../Helpers/Wrapper";

function AddUsers(props) {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState("");


    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError("Please enter a valid name and age.");
            return;
        }
        if (+enteredUserAge < 1 || +enteredUserAge > 100) {
            setError("Please enter a valid age between 1 and 100.");
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";

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
                        type="text"
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Years):</label>
                    <input
                        id="age"
                        type="number"
                        ref={ageInputRef}
                    />
                    <Buttons type="submit">Add User</Buttons>
                </form>
            </Card>
        </Wrapper>
    );
}

export default AddUsers;
