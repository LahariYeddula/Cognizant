package com.cognizant.junit;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import static org.junit.jupiter.api.Assertions.*;

// Exercise 1: Parameterized Tests
public class EvenCheckerTest {

    private final EvenChecker evenChecker = new EvenChecker();

    @ParameterizedTest
    @ValueSource(ints = {2, 4, 6, 8, 10, 100})
    public void testIsEven_WithEvenNumbers(int number) {
        assertTrue(evenChecker.isEven(number), () -> number + " should be even");
    }

    @ParameterizedTest
    @ValueSource(ints = {1, 3, 5, 7, 9, 99})
    public void testIsEven_WithOddNumbers(int number) {
        assertFalse(evenChecker.isEven(number), () -> number + " should be odd");
    }
}
