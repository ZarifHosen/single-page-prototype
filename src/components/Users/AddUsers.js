import React from 'react';
import classes from './AddUsers.module.css';
import Card from '../UI/Card';
import Buttons from '../UI/Buttons';

function AddUsers() {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">User Name:</label>
                <input id="username" type="text" />
                <label htmlFor="age">Age (Years):</label>
                <input id="age" type="number" />
                <Buttons type="submit">Add User</Buttons>
            </form>
        </Card>
    );
}


export default AddUsers;