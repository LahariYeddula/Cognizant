package com.cognizant.junit;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

// Exercise 4: Arrange-Act-Assert (AAA) Pattern, Test Fixtures, Setup and Teardown Methods in JUnit
public class AAAPatternTest {

    private Calculator calculator;

    // Setup method executed before each test case
    @Before
    public void setUp() {
        System.out.println("Setting up test fixture...");
        calculator = new Calculator();
    }

    // Teardown method executed after each test case
    @After
    public void tearDown() {
        System.out.println("Tearing down test fixture...");
        calculator = null;
    }

    @Test
    public void testAdditionUsingAAA() {
        // Arrange
        int number1 = 20;
        int number2 = 30;

        // Act
        int result = calculator.add(number1, number2);

        // Assert
        assertEquals(50, result);
    }
}
