package com.cognizant.mockito.advanced;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

// Advanced Exercise 2: Mocking External Services (RESTful APIs)
public class AdvancedExercise2_MockingRESTClient {

    @Test
    public void testServiceWithMockRestClient() {
        // Step 1: Create a mock REST client using Mockito
        RestClient mockRestClient = mock(RestClient.class);

        // Step 2: Stub the REST client methods to return predefined responses
        when(mockRestClient.getResponse()).thenReturn("Mock Response");

        // Step 3: Write a test to verify the service logic using the mocked REST client
        ApiService apiService = new ApiService(mockRestClient);
        String result = apiService.fetchData();

        assertEquals("Fetched Mock Response", result);
    }
}
