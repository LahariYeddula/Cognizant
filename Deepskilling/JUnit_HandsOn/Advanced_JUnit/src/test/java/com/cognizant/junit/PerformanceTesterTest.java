package com.cognizant.junit;

import org.junit.jupiter.api.Test;
import java.time.Duration;
import static org.junit.jupiter.api.Assertions.*;

// Exercise 5: Timeout and Performance Testing
public class PerformanceTesterTest {

    private final PerformanceTester tester = new PerformanceTester();

    @Test
    public void testPerformTask_ExecutesWithinTimeout() {
        assertTimeout(Duration.ofMillis(500), () -> {
            tester.performTask(100);
        });
    }
}
