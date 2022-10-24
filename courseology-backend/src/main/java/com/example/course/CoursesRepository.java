package com.example.course;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CoursesRepository extends JpaRepository<Course, Long> {
    void deleteCourseById(long id);

}

