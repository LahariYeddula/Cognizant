package com.cognizant.mockito.advanced;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

// Advanced Exercise 4: Mocking Network Interactions
public class AdvancedExercise4_MockingNetwork {

    @Test
    public void testServiceWithMockNetworkClient() {
        // Step 1: Create a mock network client using Mockito
        NetworkClient mockNetworkClient = mock(NetworkClient.class);

        // Step 2: Stub the network client methods to simulate network interactions
        when(mockNetworkClient.connect()).thenReturn("Mock Connection");

        // Step 3: Write a test to verify the service logic using the mocked network client
        NetworkService networkService = new NetworkService(mockNetworkClient);
        String result = networkService.connectToServer();

        assertEquals("Connected to Mock Connection", result);
    }
}
