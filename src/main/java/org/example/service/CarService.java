package org.example.service;

import org.example.model.Car;
import org.example.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class CarService {
    @Autowired
    private CarRepository carRepository;

    public Car addCar(Car car) {
        return carRepository.save(car);
    }

    public Iterable<Car> getAllCars() {
        return carRepository.findAll();
    }

    public Car getCarById(Long id) {
        return carRepository.findById(id).orElse(null);
    }

    public void deleteCar(Long id) {
        carRepository.deleteById(id);
    }
    public Car updateCar(Long id, Car updatedCar) {
        Optional<Car> existingCarOptional = carRepository.findById(id);
        if (existingCarOptional.isPresent()) {
            Car existingCar = existingCarOptional.get();
            existingCar.setBrand(updatedCar.getBrand());
            existingCar.setModel(updatedCar.getModel());
            existingCar.setProductionYear(updatedCar.getProductionYear());
            existingCar.setPlateNumber(updatedCar.getPlateNumber());
            existingCar.setMileageOut(updatedCar.getMileageOut());
            existingCar.setMileageIn(updatedCar.getMileageIn());
            existingCar.setDateOut(updatedCar.getDateOut());
            existingCar.setDateIn(updatedCar.getDateIn());
            return carRepository.save(existingCar);
        } else {
            return null;
        }
    }
}
