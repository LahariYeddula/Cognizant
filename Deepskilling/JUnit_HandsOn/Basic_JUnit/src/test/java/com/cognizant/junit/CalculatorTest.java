package com.cognizant.junit;

import org.junit.Test;
import static org.junit.Assert.*;

// Exercise 1 & 2: Setting Up JUnit and Writing Basic JUnit Tests
public class CalculatorTest {

    @Test
    public void testAdd() {
        Calculator calc = new Calculator();
        int result = calc.add(10, 5);
        assertEquals(15, result);
    }

    @Test
    public void testSubtract() {
        Calculator calc = new Calculator();
        int result = calc.subtract(10, 5);
        assertEquals(5, result);
    }

    @Test
    public void testMultiply() {
        Calculator calc = new Calculator();
        int result = calc.multiply(4, 5);
        assertEquals(20, result);
    }

    @Test
    public void testDivide() {
        Calculator calc = new Calculator();
        double result = calc.divide(10, 2);
        assertEquals(5.0, result, 0.0001);
    }
}
