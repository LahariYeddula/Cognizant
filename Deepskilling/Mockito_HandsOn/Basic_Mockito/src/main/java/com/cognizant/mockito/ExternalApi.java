package com.cognizant.mockito;

public interface ExternalApi {
    String getData();
    String getDataByCategory(String category);
    void logAction(String action);
}
