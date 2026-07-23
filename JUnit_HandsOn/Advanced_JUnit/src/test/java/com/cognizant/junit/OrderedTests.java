package com.cognizant.junit;

import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import static org.junit.jupiter.api.Assertions.*;

// Exercise 3: Test Execution Order
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class OrderedTests {

    @Test
    @Order(1)
    public void testFirstStep_Initialization() {
        System.out.println("Executing Step 1: Initialization");
        assertTrue(true);
    }

    @Test
    @Order(2)
    public void testSecondStep_Processing() {
        System.out.println("Executing Step 2: Processing");
        assertTrue(true);
    }

    @Test
    @Order(3)
    public void testThirdStep_Cleanup() {
        System.out.println("Executing Step 3: Cleanup");
        assertTrue(true);
    }
}
