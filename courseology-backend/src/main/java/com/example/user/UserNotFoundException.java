package com.example.user;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException() {
        super("User has not been found");
    }
}
