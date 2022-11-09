package com.example.user;

import com.example.course.Course;
import com.example.course.CoursesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UsersService {
    @Autowired
    UsersRepository usersRepository;
    CoursesRepository coursesRepository;
    // CREATE

    public void addUser(User user) {
        user.setPassword(encryptPassword(user.getPassword()));
        usersRepository.save(user);
    }


    // READ

    public List<String> getAllUsernames() {
        List<User>  users = usersRepository.findAll();
        return users
                .stream()
                .map(User::getUsername)
                .collect(Collectors.toList());
    }

    public User getUserById(String userName) {
        Optional<User> user = usersRepository.findById(userName);

        if (user.isEmpty()) {
            throw new UserNotFoundException();
        }

        return user.get();
    }

    public boolean verifyPassword(String username, String password){
        return getUserById(username).getPassword().equals(encryptPassword(password));
    }

    public List<Course> getInterestedIn(String username){
        List<Long> interestedInIds = getUserById(username).getInterestedIn();
        List<Course>  courses = coursesRepository.findAll();
        return courses
                .stream()
                .filter(course -> interestedInIds.contains(course.getId()))
                .collect(Collectors.toList());
    }

    // UPDATE

    public void updateUser(User newUser, String userName) {
        if (!usersRepository.existsById(userName)) {
            throw new UserNotFoundException();
        }

        newUser.setUsername(userName);

        usersRepository.save(newUser);
    }

    // DELETE
    @Transactional
    public void deleteUserByUsername(String userName) {
        if (!usersRepository.existsById(userName)) {
            throw new UserNotFoundException();
        }

        usersRepository.deleteUserByUsername(userName);
    }
    ////Encrypt

    private String encryptPassword(String password) {
        MessageDigest md = null;
        try {
            md = MessageDigest.getInstance("SHA-256");
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
        md.update(password.getBytes());
        byte[] digest = md.digest();
        return  new BigInteger(1, digest).toString(16).toUpperCase();
    }
}

