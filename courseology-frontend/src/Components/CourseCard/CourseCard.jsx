import React from 'react'
import Category from '../Category/Category';
import './CourseCard.scss';
import { Link } from "react-router-dom";
const CourseCard = ({courseArr}) => {
  const courseCards = courseArr.map((course) =>
    <div class="flip-card">
    <div class="flip-card__inner">
      <div class="flip-card__front">
        <h1>{course.title}</h1>
      </div>
      <div class="flip-card__back">
          <Link className='allLinks' to ={`/courses/${course.id}`} style={{ textDecoration: "none" }} >
            <p>{course.syllabus}</p>
            <Category>{course.category}</Category>
          </Link>
      </div>
    </div>
  </div>
  )
  return (
    <>{courseCards}</>
  )
}

export default CourseCard