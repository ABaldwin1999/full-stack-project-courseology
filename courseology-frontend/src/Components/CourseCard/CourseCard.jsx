import React from 'react'
import Category from '../Category/Category';
import './CourseCard.scss';
const CourseCard = ({courseArr,syllabus,courseTitle}) => {
  return (
    <div class="flip-card">
    <div class="flip-card__inner">
      <div class="flip-card__front">
        <h1>{courseTitle}</h1>
      </div>
      <div class="flip-card__back">
        <h2>{syllabus}</h2>
        <Category/>
      </div>
    </div>
  </div> 
  )
}

export default CourseCard