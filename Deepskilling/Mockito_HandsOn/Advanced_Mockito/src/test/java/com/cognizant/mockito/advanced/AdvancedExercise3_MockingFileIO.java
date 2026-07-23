package com.cognizant.mockito.advanced;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

// Advanced Exercise 3: Mocking File I/O
public class AdvancedExercise3_MockingFileIO {

    @Test
    public void testServiceWithMockFileIO() {
        // Step 1: Create a mock file reader and writer using Mockito
        FileReader mockFileReader = mock(FileReader.class);
        FileWriter mockFileWriter = mock(FileWriter.class);

        // Step 2: Stub the file reader and writer methods to simulate file operations
        when(mockFileReader.read()).thenReturn("Mock File Content");

        // Step 3: Write a test to verify the service logic using the mocked file reader and writer
        FileService fileService = new FileService(mockFileReader, mockFileWriter);
        String result = fileService.processFile();

        assertEquals("Processed Mock File Content", result);
        verify(mockFileWriter).write("Processed Mock File Content");
    }
}
