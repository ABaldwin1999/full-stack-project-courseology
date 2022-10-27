import React from 'react'

const Bookmarked = () => {
  return (
    <>
    <h2>Bookmarked Courses</h2>
    <CourseCard courseArr={filteredCourses}/>
    </>
  )
}

export default Bookmarked