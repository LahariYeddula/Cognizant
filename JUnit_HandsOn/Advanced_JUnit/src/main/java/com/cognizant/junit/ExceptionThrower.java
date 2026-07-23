package com.cognizant.junit;

public class ExceptionThrower {

    public void throwException(String input) {
        if (input == null || input.trim().isEmpty()) {
            throw new IllegalArgumentException("Input string cannot be null or empty");
        }
        if ("error".equalsIgnoreCase(input)) {
            throw new RuntimeException("Custom error triggered!");
        }
    }
}
