package com.cognizant.mockito;

import org.junit.jupiter.api.Test;
import org.mockito.InOrder;
import static org.mockito.Mockito.*;

// Exercise 6: Verifying Interaction Order
public class Exercise6_InteractionOrder {

    @Test
    public void testInteractionOrder() {
        // Step 1: Create a mock object
        ExternalApi mockApi = mock(ExternalApi.class);
        MyService service = new MyService(mockApi);

        // Step 2: Call the methods in a specific order
        service.executeMultiple("START", "STOP");

        // Step 3: Verify the interaction order
        InOrder inOrder = inOrder(mockApi);
        inOrder.verify(mockApi).logAction("START");
        inOrder.verify(mockApi).getData();
        inOrder.verify(mockApi).logAction("STOP");
    }
}
