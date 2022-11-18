import React from 'react'
import { useState } from 'react';
const Bookmarked = ({userLogin}) => {
  const [courses, setCourses] = useState([]);
  const [bookmarked, setBookmarked] = useState(UserLogin.interestedIn);
  const getCourses = async () => {
    let url = "http://localhost:8080/courses";
    const response = await fetch(url);
    const data = await response.json();
    setCourses(data);
  };
  return (
    <>
    <h2>Bookmarked Courses</h2>
    <CourseCard courseArr={filteredCourses}/>
    </>
  )
}

export default Bookmarked