import React from 'react';
import classes from './AddUsers.module.css';
import Card from '../UI/Card';

function AddUsers() {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">User Name:</label>
                <input id="username" type="text"/>
                <label htmlFor="age">Age (Years):</label>
                <input id="age" type="number"/>
                <button type="submit">Add User</button>
            </form>
        </Card>
    );
}


export default AddUsers;