package com.example.course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CoursesService {
    @Autowired
    CoursesRepository coursesRepository;

    // CREATE
    public void addCourse(Course course) {
        coursesRepository.save(course);
    }


    // READ

    public Course getCourseById(long id) {
        Optional<Course> course= coursesRepository.findById(id);
        if (course.isEmpty()) {
            throw new CourseNotFoundException();
        }
        return course.get();
    }

    public List<Long> getCourseIds() {
        List<Course> courses = coursesRepository.findAll();

        return courses
                .stream()
                .map(Course::getId)
                .collect(Collectors.toList());
    }


    public List<Course> getCoursesByCategory(String category, int limit) {
        List<Course> courses = coursesRepository.findAll();

        return courses.stream()
                .filter(course -> course.getCategory().equalsIgnoreCase(category))
                .limit(limit)
                .collect(Collectors.toList());
    }

    public List<Course> getAllCourses(int limit) {
        return coursesRepository.findAll().stream().limit(limit)
                .collect(Collectors.toList());
    }

    // UPDATE
    public void updateCourse(Course course, long id) {
        if (!coursesRepository.existsById(id)) {
            throw new CourseNotFoundException();
        }
        course.setId(id);
        coursesRepository.save(course);
    }

    // DELETE
    public void deleteCourseById(long id) {
        if (!coursesRepository.existsById(id)) {
            throw new CourseNotFoundException();
        }

        coursesRepository.deleteCourseById(id);
    }
}
