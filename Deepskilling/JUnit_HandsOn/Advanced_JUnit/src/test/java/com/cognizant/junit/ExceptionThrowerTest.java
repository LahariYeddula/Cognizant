package com.cognizant.junit;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

// Exercise 4: Exception Testing
public class ExceptionThrowerTest {

    private final ExceptionThrower thrower = new ExceptionThrower();

    @Test
    public void testThrowException_NullInput_ThrowsIllegalArgumentException() {
        IllegalArgumentException exception = assertThrows(
            IllegalArgumentException.class,
            () -> thrower.throwException(null)
        );
        assertEquals("Input string cannot be null or empty", exception.getMessage());
    }

    @Test
    public void testThrowException_ErrorInput_ThrowsRuntimeException() {
        RuntimeException exception = assertThrows(
            RuntimeException.class,
            () -> thrower.throwException("error")
        );
        assertEquals("Custom error triggered!", exception.getMessage());
    }
}
