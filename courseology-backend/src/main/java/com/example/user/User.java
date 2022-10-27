package com.example.user;

import com.example.course.Course;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
public class User {

    @Id
    private String username;
    private String password;
    private String email;
    private LocalDate birthDate;

    @ElementCollection
    private List<Long> interestedIn;


    private boolean admin = false;

    public User() {
    }

    public User(String username, String password, String email, LocalDate birthDate, boolean admin,List<Long> interestedIn) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.birthDate = birthDate;
        this.admin = admin;
        this.interestedIn =interestedIn;
    }

    public List<Long> getInterestedIn() {
        return interestedIn;
    }

    public void setInterestedIn(List<Long> interestedIn) {
        this.interestedIn = interestedIn;
    }

    public boolean isAdmin() {
        return admin;
    }

    public void setAdmin(boolean admin) {
        this.admin = admin;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }
}
