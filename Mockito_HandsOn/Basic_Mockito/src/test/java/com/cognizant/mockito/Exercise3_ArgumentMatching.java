package com.cognizant.mockito;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

// Exercise 3: Argument Matching
public class Exercise3_ArgumentMatching {

    @Test
    public void testArgumentMatching() {
        // Step 1: Create a mock object
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.getDataByCategory(anyString())).thenReturn("Category Data");

        MyService service = new MyService(mockApi);

        // Step 2: Call the method with specific arguments
        String result = service.fetchDataByCategory("Tech");

        // Step 3: Use argument matchers to verify the interaction
        assertEquals("Category Data", result);
        verify(mockApi).getDataByCategory(eq("Tech"));
    }
}
