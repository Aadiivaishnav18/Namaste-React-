import { use, useState } from "react";
const User = ({ name, location, contact }) => {

    const [count] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h2>Count2: {count2}</h2>
            <h1>Name: {name}</h1>
            <h2>Location: {location}</h2>
            <h3>Contact: {contact}</h3>
        </div>
    )
}

export default User;