package org.example.service;

import org.example.model.Car;
import org.example.repository.CarRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import java.util.Collection;

import java.util.Arrays;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class CarServiceTest {

    @Mock
    private CarRepository carRepository;

    @InjectMocks
    private CarService carService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testAddCar() {
        Car car = new Car();
        car.setBrand("Toyota");

        when(carRepository.save(car)).thenReturn(car);

        Car savedCar = carService.addCar(car);

        assertEquals(car.getBrand(), savedCar.getBrand());
        verify(carRepository, times(1)).save(car);
    }

    @Test
    public void testGetAllCars() {
        Car car1 = new Car();
        car1.setBrand("Toyota");
        Car car2 = new Car();
        car2.setBrand("Honda");

        when(carRepository.findAll()).thenReturn(Arrays.asList(car1, car2));

        Iterable<Car> cars = carService.getAllCars();

        assertNotNull(cars);
        assertEquals(2, ((Collection<?>) cars).size());
        verify(carRepository, times(1)).findAll();
    }

    @Test
    public void testGetCarById() {
        Car car = new Car();
        car.setId(1L);
        car.setBrand("Toyota");

        when(carRepository.findById(1L)).thenReturn(Optional.of(car));

        Car result = carService.getCarById(1L);

        assertNotNull(result);
        assertEquals("Toyota", result.getBrand());
    }

    @Test
    public void testGetCarById_NotFound() {
        when(carRepository.findById(1L)).thenReturn(Optional.empty());

        Car result = carService.getCarById(1L);

        assertNull(result);
    }

    @Test
    public void testDeleteCar() {
        carService.deleteCar(1L);
        verify(carRepository, times(1)).deleteById(1L);
    }

    @Test
    public void testUpdateCar() {
        Car existingCar = new Car();
        existingCar.setId(1L);
        existingCar.setBrand("Toyota");
        Car updatedCar = new Car();
        updatedCar.setBrand("Honda");

        when(carRepository.findById(1L)).thenReturn(Optional.of(existingCar));
        when(carRepository.save(existingCar)).thenReturn(existingCar);

        Car result = carService.updateCar(1L, updatedCar);

        assertNotNull(result);
        assertEquals("Honda", result.getBrand());
        verify(carRepository, times(1)).findById(1L);
        verify(carRepository, times(1)).save(existingCar);
    }

    @Test
    public void testUpdateCar_NotFound() {
        Car updatedCar = new Car();
        updatedCar.setBrand("Honda");

        when(carRepository.findById(1L)).thenReturn(Optional.empty());

        Car result = carService.updateCar(1L, updatedCar);

        assertNull(result);
        verify(carRepository, times(1)).findById(1L);
        verify(carRepository, times(0)).save(any(Car.class));
    }
}
