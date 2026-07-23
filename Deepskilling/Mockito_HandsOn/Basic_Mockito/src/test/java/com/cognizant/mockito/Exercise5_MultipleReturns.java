package com.cognizant.mockito;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

// Exercise 5: Mocking and Stubbing with Multiple Returns
public class Exercise5_MultipleReturns {

    @Test
    public void testMultipleReturnValues() {
        // Step 1: Create a mock object for the external API
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2: Stub the methods to return different values on consecutive calls
        when(mockApi.getData())
            .thenReturn("First Call Data")
            .thenReturn("Second Call Data");

        MyService service = new MyService(mockApi);

        // Step 3: Write a test case that uses the mock object
        assertEquals("First Call Data", service.fetchData());
        assertEquals("Second Call Data", service.fetchData());
    }
}
