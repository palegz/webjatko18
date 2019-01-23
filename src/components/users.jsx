import React, { Component } from 'react';
import UsersTable from './usersdata';


class Users extends Component {
    render() {
        return(
            <div>
                <h1>Users page</h1>
                <p> This page shows information about the users of this system.</p>
                <UsersTable></UsersTable>
            </div>
        )
    }
}

export default Users;