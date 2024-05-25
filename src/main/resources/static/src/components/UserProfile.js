import React, { useEffect, useState } from 'react';

const UserProfile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/current-user')
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mt-5">
            <h2>User Profile</h2>
            <ul>
                <li><strong>Name:</strong> {user.name}</li>
                <li><strong>Email:</strong> {user.email}</li>
            </ul>
        </div>
    );
};

export default UserProfile;