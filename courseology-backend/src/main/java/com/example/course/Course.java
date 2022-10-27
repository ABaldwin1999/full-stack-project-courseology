package com.example.course;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;
import java.util.Random;
@Entity
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id = new Random().nextLong();
    private String createdBy;
    private String title;
    private String syllabus;
    private String category;
    private long price;
    private LocalDate dateCreated = LocalDate.now();
    public Course() {
    }

    public Course(long id, String createdBy, String title, String syllabus, String category, long price){
        this.id = id;
        this.createdBy = createdBy;
        this.title = title;
        this.syllabus = syllabus;
        this.category = category;
        this.price = price;
        this.dateCreated = dateCreated;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSyllabus() {
        return syllabus;
    }

    public void setSyllabus(String syllabus) {
        this.syllabus = syllabus;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }


    public LocalDate getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(LocalDate dateCreated) {
        this.dateCreated = dateCreated;
    }
}