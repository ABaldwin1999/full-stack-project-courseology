import CourseForm from '../../Components/CourseForm/CourseForm';
const CreateCourse = () => {
  const handleSubmit = async course => {
    const result = await fetch("http://localhost:8080/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });

    if (result.ok) {
      alert("Course added");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const defaultFormState = {createdBy:"", title:"",syllabus:"",category:"",price:""};

  return (
    <section className="create-course">
      <CourseForm handleSubmit={handleSubmit} defaultFormState={defaultFormState} formTitle="Add A New Course" />
    </section>
  );
};

export default CreateCourse;