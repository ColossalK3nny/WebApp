import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

const Dashboard = () => {
    const [cars, setCars] = useState([]);
    const [show, setShow] = useState(false);
    const [currentCar, setCurrentCar] = useState({
        id: '',
        brand: '',
        model: '',
        productionYear: '',
        plateNumber: '',
        mileageOut: '',
        mileageIn: '',
        dateOut: '',
        dateIn: ''
    });

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

    const handleUpdate = (car) => {
        setCurrentCar(car);
        setShow(true);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/cars/${id}`);
            fetchCars();  // Refresh the car list
        } catch (error) {
            console.error('Error deleting car:', error);
        }
    };

    const handleClose = () => {
        setShow(false);
        setCurrentCar({
            id: '',
            brand: '',
            model: '',
            productionYear: '',
            plateNumber: '',
            mileageOut: '',
            mileageIn: '',
            dateOut: '',
            dateIn: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentCar({ ...currentCar, [name]: value });
    };

    const handleSave = async () => {
        try {
            if (currentCar.id) {
                await axios.put(`http://localhost:8080/cars/${currentCar.id}`, currentCar);
            } else {
                await axios.post('http://localhost:8080/cars/add', currentCar);
            }
            fetchCars();
            handleClose();
        } catch (error) {
            console.error('Error saving car:', error);
        }
    };

    return (
        <div>
            <nav className="navbar navbar-light bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Car Rental</a>
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

                <div className="container mt-5">
                    <h2>Car List</h2>
                    <button className="btn btn-success btn-sm mb-3" onClick={() => setShow(true)}>
                        Add Car
                    </button>
                    <table className="table table-striped table-responsive table-dark table-bordered">
                        <thead className="thead-light">
                        <tr>
                            <th>ID</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Prod. Year</th>
                            <th>Plate Number</th>
                            <th>Mileage out</th>
                            <th>Mileage in</th>
                            <th>Date out</th>
                            <th>Date in</th>
                            <th>Actions</th>
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
                                <td>
                                    <button
                                        className="btn btn-primary btn-sm me-2"
                                        onClick={() => handleUpdate(car)}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(car.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{currentCar.id ? `Update Car ${currentCar.plateNumber}` : 'Add Car'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Brand</Form.Label>
                            <Form.Control
                                type="text"
                                name="brand"
                                value={currentCar.brand}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Model</Form.Label>
                            <Form.Control
                                type="text"
                                name="model"
                                value={currentCar.model}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Production Year</Form.Label>
                            <Form.Control
                                type="number"
                                name="productionYear"
                                value={currentCar.productionYear}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Plate Number</Form.Label>
                            <Form.Control
                                type="text"
                                name="plateNumber"
                                value={currentCar.plateNumber}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mileage Out</Form.Label>
                            <Form.Control
                                type="number"
                                name="mileageOut"
                                value={currentCar.mileageOut}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mileage In</Form.Label>
                            <Form.Control
                                type="number"
                                name="mileageIn"
                                value={currentCar.mileageIn}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Date Out</Form.Label>
                            <Form.Control
                                type="date"
                                name="dateOut"
                                value={currentCar.dateOut}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Date In</Form.Label>
                            <Form.Control
                                type="date"
                                name="dateIn"
                                value={currentCar.dateIn}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Dashboard;