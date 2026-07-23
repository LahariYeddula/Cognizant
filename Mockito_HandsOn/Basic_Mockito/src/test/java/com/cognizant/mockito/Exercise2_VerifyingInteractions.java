package com.cognizant.mockito;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import static org.mockito.Mockito.*;

// Exercise 2: Verifying Interactions
public class Exercise2_VerifyingInteractions {

    @Test
    public void testVerifyInteraction() {
        // Step 1: Create a mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        MyService service = new MyService(mockApi);

        // Step 2: Call the method
        service.fetchData();

        // Step 3: Verify the interaction
        verify(mockApi).getData();
    }
}
