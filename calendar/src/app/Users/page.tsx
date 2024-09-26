import React from "react";

const Users = () => {
    const usersList = ["Faniry", "Tsanta", "Arnaud", "Josia"]
    return (
        <div>
           <h2>List of users : </h2>
            <ul>
                {usersList.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
            
        </div>
    );
}

export default Users;