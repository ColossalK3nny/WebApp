import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">WebApp</a>
                    <div className="d-flex">
                        <Link className="navbar-text me-3" to="/profile" style={{ color: 'gray', fontSize: '0.9em' }}>
                            User Profile
                        </Link>
                        <form className="d-flex input-group w-auto">
                            <input
                                type="search"
                                className="form-control rounded"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="search-addon"
                            />
                            <span className="input-group-text border-0" id="search-addon">
                                <i className="fas fa-search"></i>
                            </span>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="container-content">
                <h2>Welcome to the Dashboard</h2>
                <p>This is the main page after login.</p>
            </div>
        </div>
    );
};

export default Dashboard;