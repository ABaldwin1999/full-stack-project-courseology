import './App.scss';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import HomeBar from './Components/HomeBar/HomeBar';
import CourseContainer from './Containers/CourseContainer/CourseContainer';
import CreateCourse from './Containers/CreateCourse/CreateCourse';
import UpdateCourse from './Containers/UpdateCourse/UpdateCourse';
function App() {
  const [user, setUser] = useState([]);
  const [displayed, setDisplayed] = useState(false);

  const toggle = () => {
    setDisplayed(!displayed);
  };
  const getUser = async (username) => {
    const response = await fetch(`http://localhost:8080/user/${username}`);
    const data = await response.json();
    setUser(data);
  };
  const checkPassword= async (password) => {
    const response = await fetch(`http://localhost:8080/user/{username}?password=${password}`);
    const data = await response.json();
    return data;
  };
  const getUserById =async(username)=>{
    const response = await fetch(`http://localhost:8080/user/${username}`);
    const data = await response.json();
    setUser(data); 
  }

  const checkUsernameAndPassword=(username, password)=>{
    if(checkPassword(password)){
      getUserById(username);
    }
    else{
      ///invalid username
      ///invalid password
    }
    ///checkpassword
    ///return true
    ///return invalid username/invalid password
  }
  return (
    <div className="app">
 <Router>
      <HomeBar admin={user.admin} loggedIn={false} getUser={getUser} toggle={toggle} displayed={displayed}/>
     <Routes>
        <Route path="/" element={<CourseContainer/>}/>
        <Route path="/courses/:id" element={<UpdateCourse/>}/>
        <Route path="/courses/create" element={<CreateCourse/>}/>
        <Route path="courses/Bookmarked" />
      </Routes>
    </Router> 
    </div>
  );
}

export default App;
