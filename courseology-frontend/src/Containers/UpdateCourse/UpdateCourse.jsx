import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CourseForm from "../../Components/CourseForm/CourseForm"
import CourseInfo from "../../Components/CourseInfo/CourseInfo";
import './UpdateCourse.scss';
const UpdateCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const getCourseById = async id => {
    const url = `http://localhost:8080/courses/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setCourse(data);
  };

  useEffect(() => {
    getCourseById(id);
  }, [id]);

  const handleUpdate = async updatedCourse => {
    const result = await fetch(`http://localhost:8080/courses/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCourse),
    });

    if (result.ok) {
      alert("Course updated");
      setCourse(updatedCourse);
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleDelete = async updatedCourse => {

    const result = await fetch(`http://localhost:8080/courses/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.ok) {
      alert("Course deleted");
      navigate("/");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleShowForm = () => setShowForm(!showForm);


  return (
    <section className="edit-course">
      <div className="edit-course__content">
        <CourseInfo thisCourse={course} user={true}/>
        <div className="edit-course__buttons">
          <button
            className={showForm ? "edit-course__button" : "edit-course__button edit-course__button--secondary"}
            onClick={handleShowForm}
          >
            Update
          </button>
          <button className="edit-course__button edit-course__button--secondary" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      {showForm && <CourseForm defaultFormState={course} formTitle="Update course" handleSubmit={handleUpdate} />}
    </section>
  );
};

export default UpdateCourse;