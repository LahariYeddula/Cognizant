package com.cognizant.mockito;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

// Exercise 4: Handling Void Methods
public class Exercise4_HandlingVoidMethods {

    @Test
    public void testHandlingVoidMethods() {
        // Step 1: Create a mock object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2: Stub the void method (doNothing is default, but explicitly shown)
        doNothing().when(mockApi).logAction(anyString());

        MyService service = new MyService(mockApi);
        service.recordAction("LOGIN");

        // Step 3: Verify the interaction
        verify(mockApi).logAction("LOGIN");
    }
}
