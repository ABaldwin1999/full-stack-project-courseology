package com.example.user;

import com.example.course.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UsersController {

    @Autowired
    private UsersService usersService;

    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(UserNotFoundException exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    // CREATE

    @PostMapping("/user")
    public ResponseEntity<User> createGreeting(@RequestBody User user) {
        usersService.addUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }

    // READ

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable String userName) {
        return ResponseEntity.status(HttpStatus.OK).body(usersService.getUserById(userName));
    }
    @GetMapping("/user/usernames")
    public ResponseEntity<List<String>> getAllUsernames() {
        return ResponseEntity.status(HttpStatus.OK).body(usersService.getAllUsernames());
    }
    @GetMapping("/user/{id}/interestedIn")
    public ResponseEntity<List<Course>> getInterestedIn(@PathVariable String username) {
        return ResponseEntity.status(HttpStatus.OK).body(usersService.getInterestedIn(username));
    }
    @GetMapping("/user/{id}/{password}")
    public ResponseEntity<Boolean> verifyPassword(@PathVariable String username, @PathVariable String passwordAttempt ) {
        return ResponseEntity.status(HttpStatus.OK).body(usersService.verifyPassword(username, passwordAttempt));
    }

    // UPDATE

    @PutMapping("/user/{id}")
    public ResponseEntity<User> updateUser(@RequestBody User newUser, @PathVariable String userName) {
        newUser.setUsername(userName);
        usersService.updateUser(newUser, userName);
        return ResponseEntity.status(HttpStatus.OK).body(newUser);
    }

    // DELETE

    @DeleteMapping("/user/{id}")
    public ResponseEntity<Void> deleteUserById(@PathVariable String userName) {
        usersService.deleteUserById(userName);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
    
}
