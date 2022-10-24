package com.example.course;

public class CourseNotFoundException extends RuntimeException {
    public CourseNotFoundException() {
        super("Greeting has not been found");
    }
}
