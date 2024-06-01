package org.example.service;

import org.example.model.Car;
import org.example.repository.CarRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
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
    public void testGetCarById() {
        Car car = new Car();
        car.setId(1L);
        car.setBrand("Toyota");

        when(carRepository.findById(1L)).thenReturn(Optional.of(car));

        Car result = carService.getCarById(1L);

        assertNotNull(result);
        assertEquals("Toyota", result.getBrand());
    }
}
