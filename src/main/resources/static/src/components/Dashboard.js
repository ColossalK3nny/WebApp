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
            <div className="container-content mt-5">
                <h2>Welcome to the Car rental page</h2>
                <p>This is the main page after login.</p>

                <div className="container mt-5">
                    <h2>Car List</h2>
                    <table className="table table-striped table-hover">
                        <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Year</th>
                            <th>Plate Number</th>
                            <th>Mileage out</th>
                            <th>Mileage in</th>
                            <th>Date out</th>
                            <th>Date in</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Toyota</td>
                            <td>Corolla</td>
                            <td>2020</td>
                            <td>ABC-123</td>
                            <td>15000</td>
                            <td>15300</td>
                            <td>2023-05-01</td>
                            <td>2023-05-10</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Honda</td>
                            <td>Civic</td>
                            <td>2019</td>
                            <td>XYZ-456</td>
                            <td>22000</td>
                            <td>22350</td>
                            <td>2023-04-15</td>
                            <td>2023-04-20</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Ford</td>
                            <td>Focus</td>
                            <td>2018</td>
                            <td>AABX-789</td>
                            <td>30000</td>
                            <td>30500</td>
                            <td>2023-03-10</td>
                            <td>2023-03-15</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
