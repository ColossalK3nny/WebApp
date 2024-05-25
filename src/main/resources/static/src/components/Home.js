import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/register');
    };

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <div>
            <h2>Welcome to User Management</h2>
            <button onClick={handleRegister}>Register</button>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Home;