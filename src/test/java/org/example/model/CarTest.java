package org.example.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class CarTest {

    @Test
    public void testEquals() {
        Car car1 = new Car();
        car1.setId(1L);
        car1.setBrand("Toyota");

        Car car2 = new Car();
        car2.setId(1L);
        car2.setBrand("Toyota");

        Car car3 = new Car();
        car3.setId(2L);
        car3.setBrand("Honda");

        assertEquals(car1, car2, "Cars with same ID and brand should be equal");
        assertNotEquals(car1, car3, "Cars with different ID and brand should not be equal");
    }

    @Test
    public void testHashCode() {
        Car car1 = new Car();
        car1.setId(1L);
        car1.setBrand("Toyota");

        Car car2 = new Car();
        car2.setId(1L);
        car2.setBrand("Toyota");

        assertEquals(car1.hashCode(), car2.hashCode(), "Hash codes should be equal for cars with same ID and brand");
    }

    @Test
    public void testToString() {
        Car car = new Car();
        car.setId(1L);
        car.setBrand("Toyota");
        car.setModel("Corolla");

        String expected = "Car(id=1, brand=Toyota, model=Corolla, productionYear=0, plateNumber=null, mileageOut=0, mileageIn=0, dateOut=null, dateIn=null)";
        assertEquals(expected, car.toString(), "ToString should return the correct string representation of the car");
    }

    @Test
    public void testCanEqual() {
        Car car1 = new Car();
        Car car2 = new Car();

        assertTrue(car1.canEqual(car2), "Car should be able to equal another car");
    }
}
