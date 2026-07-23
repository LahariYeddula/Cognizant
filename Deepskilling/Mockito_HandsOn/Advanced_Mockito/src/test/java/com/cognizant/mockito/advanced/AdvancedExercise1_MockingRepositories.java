package com.cognizant.mockito.advanced;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

// Advanced Exercise 1: Mocking Databases and Repositories
public class AdvancedExercise1_MockingRepositories {

    @Test
    public void testServiceWithMockRepository() {
        // Step 1: Create a mock repository using Mockito
        Repository mockRepository = mock(Repository.class);

        // Step 2: Stub the repository methods to return predefined data
        when(mockRepository.getData()).thenReturn("Mock Data");

        // Step 3: Write a test to verify the service logic using the mocked repository
        Service service = new Service(mockRepository);
        String result = service.processData();

        assertEquals("Processed Mock Data", result);
    }
}
