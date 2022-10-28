package com.example.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CoursesController {
    @Autowired
    CoursesService courseService;

    @ExceptionHandler
    public String handleExceptions(CourseNotFoundException exception) {
        return exception.getMessage();
    }


    // CREATE

    @PostMapping("/courses")
    public ResponseEntity<Course> createCourse(@RequestBody Course course) {
        courseService.addCourse(course);
        return ResponseEntity.status(HttpStatus.CREATED).body(course);
    }

    // READ


    @GetMapping("/courses")
    public ResponseEntity<List<Course>> getCourses(@RequestParam(required = false) String category, @RequestParam(defaultValue = "10") int limit) {

        if (category != null) {
            return ResponseEntity.status(HttpStatus.OK).body(courseService.getCoursesByCategory(category, limit));
        }

        return ResponseEntity.status(HttpStatus.OK).body(courseService.getAllCourses(limit));

    }

    @GetMapping("/courses/ids")
    public ResponseEntity<List<Long>> getCoursesIds() {
        return ResponseEntity.status(HttpStatus.OK).body(courseService.getCourseIds());
    }


    @GetMapping("/courses/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable long id) {

        return ResponseEntity.status(HttpStatus.OK).body(courseService.getCourseById(id));
    }

    // UPDATE

    @PutMapping("/courses/{id}")
    public ResponseEntity<Course> updateCourse(@RequestBody Course course, @PathVariable long id) {
        course.setId(id);
        courseService.updateCourse(course, id);
        return ResponseEntity.status(HttpStatus.OK).body(course);
    }

    // DELETE

    @DeleteMapping("/courses/{id}")
    public ResponseEntity<Void> deleteCourseById(@PathVariable long id) {
        courseService.deleteCourseById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}

