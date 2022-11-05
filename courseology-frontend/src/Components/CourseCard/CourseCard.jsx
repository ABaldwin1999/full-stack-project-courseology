import React from 'react'
import Category from '../Category/Category';
import './CourseCard.scss';
import { Link } from "react-router-dom";
const CourseCard = ({courseArr}) => {
  const courseCards = courseArr.map((course,index) =>
    <div className="flip-card" key={index}>
    <div className="flip-card__inner">
      <div className="flip-card__front">
        <h1>{course.title}</h1>
      </div>
      <div className="flip-card__back">
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