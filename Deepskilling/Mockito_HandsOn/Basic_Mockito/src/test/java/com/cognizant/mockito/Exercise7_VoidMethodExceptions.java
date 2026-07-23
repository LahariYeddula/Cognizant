package com.cognizant.mockito;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

// Exercise 7: Handling Void Methods with Exceptions
public class Exercise7_VoidMethodExceptions {

    @Test
    public void testVoidMethodWithException() {
        // Step 1: Create a mock object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2: Stub the void method to throw an exception
        doThrow(new IllegalArgumentException("Invalid Action")).when(mockApi).logAction("BAD_ACTION");

        MyService service = new MyService(mockApi);

        // Step 3: Verify the interaction
        assertThrows(IllegalArgumentException.class, () -> {
            service.recordAction("BAD_ACTION");
        });
        verify(mockApi).logAction("BAD_ACTION");
    }
}
