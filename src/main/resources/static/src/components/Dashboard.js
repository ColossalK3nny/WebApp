import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import axios from 'axios';

const Dashboard = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async () => {
        try {
            const response = await axios.get('http://localhost:8080/cars');
            setCars(response.data);
        } catch (error) {
            console.error('Error fetching cars:', error);
        }
    };

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
                            <th>Prod.Year</th>
                            <th>Plate Number</th>
                            <th>Mileage out</th>
                            <th>Mileage in</th>
                            <th>Date out</th>
                            <th>Date in</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cars.map((car) => (
                            <tr key={car.id}>
                                <td>{car.id}</td>
                                <td>{car.brand}</td>
                                <td>{car.model}</td>
                                <td>{car.productionYear}</td>
                                <td>{car.plateNumber}</td>
                                <td>{car.mileageOut}</td>
                                <td>{car.mileageIn}</td>
                                <td>{car.dateOut}</td>
                                <td>{car.dateIn}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
