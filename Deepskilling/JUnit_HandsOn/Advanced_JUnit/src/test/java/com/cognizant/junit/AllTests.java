package com.cognizant.junit;

import org.junit.platform.suite.api.SelectClasses;
import org.junit.platform.suite.api.Suite;

// Exercise 2: Test Suites and Categories
@Suite
@SelectClasses({
    EvenCheckerTest.class,
    OrderedTests.class,
    ExceptionThrowerTest.class,
    PerformanceTesterTest.class
})
public class AllTests {
    // Test Suite grouping multiple test classes together
}
