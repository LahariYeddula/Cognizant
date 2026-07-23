package com.cognizant.mockito.advanced;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

// Advanced Exercise 5: Mocking Multiple Return Values
public class AdvancedExercise5_MultipleConsecutiveReturns {

    @Test
    public void testServiceWithMultipleReturnValues() {
        // Step 1: Create a mock object using Mockito
        Repository mockRepository = mock(Repository.class);

        // Step 2: Stub the method to return different values on consecutive calls
        when(mockRepository.getData())
            .thenReturn("First Mock Data")
            .thenReturn("Second Mock Data");

        // Step 3: Write a test to verify the service logic using the mocked object
        Service service = new Service(mockRepository);

        String firstResult = service.processData();
        String secondResult = service.processData();

        assertEquals("Processed First Mock Data", firstResult);
        assertEquals("Processed Second Mock Data", secondResult);
    }
}
