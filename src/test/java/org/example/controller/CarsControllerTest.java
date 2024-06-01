package org.example.controller;

import org.example.model.Car;
import org.example.service.CarService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

public class CarsControllerTest {

    private MockMvc mockMvc;

    @Mock
    private CarService carService;

    @InjectMocks
    private CarsController carsController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(carsController).build();
    }

    @Test
    public void testAddCar() throws Exception {
        Car car = new Car();
        car.setBrand("Toyota");

        when(carService.addCar(any(Car.class))).thenReturn(car);

        mockMvc.perform(post("/cars/add")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"brand\":\"Toyota\"}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.brand").value("Toyota"));

        verify(carService, times(1)).addCar(any(Car.class));
    }

    @Test
    public void testGetAllCars() throws Exception {
        Car car1 = new Car();
        car1.setBrand("Toyota");
        Car car2 = new Car();
        car2.setBrand("Honda");

        when(carService.getAllCars()).thenReturn(Arrays.asList(car1, car2));

        mockMvc.perform(get("/cars"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].brand").value("Toyota"))
                .andExpect(jsonPath("$[1].brand").value("Honda"));

        verify(carService, times(1)).getAllCars();
    }

    @Test
    public void testGetCarById() throws Exception {
        Car car = new Car();
        car.setId(1L);
        car.setBrand("Toyota");

        when(carService.getCarById(1L)).thenReturn(car);

        mockMvc.perform(get("/cars/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.brand").value("Toyota"));

        verify(carService, times(1)).getCarById(1L);
    }

    @Test
    public void testDeleteCar() throws Exception {
        doNothing().when(carService).deleteCar(1L);

        mockMvc.perform(delete("/cars/1"))
                .andExpect(status().isOk());

        verify(carService, times(1)).deleteCar(1L);
    }

    @Test
    public void testUpdateCar() throws Exception {
        Car car = new Car();
        car.setId(1L);
        car.setBrand("Honda");

        when(carService.updateCar(anyLong(), any(Car.class))).thenReturn(car);

        mockMvc.perform(put("/cars/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"brand\":\"Honda\"}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.brand").value("Honda"));

        verify(carService, times(1)).updateCar(anyLong(), any(Car.class));
    }
}
