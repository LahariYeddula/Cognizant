package com.cognizant.mockito;

public class MyService {

    private final ExternalApi externalApi;

    public MyService(ExternalApi externalApi) {
        this.externalApi = externalApi;
    }

    public String fetchData() {
        return externalApi.getData();
    }

    public String fetchDataByCategory(String category) {
        return externalApi.getDataByCategory(category);
    }

    public void recordAction(String action) {
        externalApi.logAction(action);
    }

    public void executeMultiple(String firstAction, String secondAction) {
        externalApi.logAction(firstAction);
        externalApi.getData();
        externalApi.logAction(secondAction);
    }
}
