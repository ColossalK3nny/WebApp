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
}
