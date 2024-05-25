import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';

function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </header>
            </Router>
        </div>
    );
}

export default App;