import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });
            if (response.ok) {
                setMessage('User registered successfully!');
                navigate('/login'); // Navigálás a bejelentkezési oldalra sikeres regisztráció után
            } else {
                const errorData = await response.json();
                setMessage(`Failed to register user: ${errorData.message}`);
            }
        } catch (error) {
            setMessage('Failed to register user.');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="custom-form">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                    {message && <p className="mt-3">{message}</p>}
                    <button onClick={() => navigate('/login')} className="btn btn-secondary mt-3">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
