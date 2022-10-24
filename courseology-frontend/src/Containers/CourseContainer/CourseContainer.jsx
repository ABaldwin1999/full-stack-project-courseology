import React from 'react'
import CourseCard from '../../Components/CourseCard/CourseCard'
import SearchBar from '../../Components/SearchBar/SearchBar'
import { useState } from "react";
const CourseContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const getCourses = async category => {
    let url = "http://localhost:8080/courses";

    if (category) {
      url += `?category=${category}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    setCourses(data);
  };

  const getCategories = async () => {
    const response = await fetch("http://localhost:8080/courses/categories");
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
    getCourses(categories);
  }, [categories]);

  const handleSelectCategory = event => setSelectedCategory(event.target.value);
  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCourses = courses?.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <SearchBar inputType="input-search" handleSearchInput={handleSearchInput}/>
      <CourseCard courseArr={filteredCourses}/>
    </div>

  )
}

export default CourseContainer