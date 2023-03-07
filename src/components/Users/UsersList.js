import React from 'react';
import Card from '@mui/material/Card';

function UsersList(props) {
    return (
        <Card variant="outlined">
            <ul>
                {props.users.map(user => (
                    <li key={user.id}>{user.name} ({user.age} years old)</li>
                ))}
            </ul>
        </Card>
    );
}

export default UsersList;