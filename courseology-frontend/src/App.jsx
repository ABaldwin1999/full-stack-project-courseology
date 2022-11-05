import "./App.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import HomeBar from "./Components/HomeBar/HomeBar";
import CourseContainer from "./Containers/CourseContainer/CourseContainer";
import CreateCourse from "./Containers/CreateCourse/CreateCourse";
import UpdateCourse from "./Containers/UpdateCourse/UpdateCourse";
import CreateUser from "./Containers/CreateUser/CreateUser";
function App() {
  const [user, setUser] = useState([]);
  const [displayed, setDisplayed] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const toggle = () => {
    setDisplayed(!displayed);
  };
  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };
  const getUser = async (username) => {
    const response = await fetch(`http://localhost:8080/user/${username}`);
    const data = await response.json();
    setUser(data);
  };
  const checkPassword = async (input) => {
    const response = await fetch(
      `http://localhost:8080/user/verify/${input.username}?password=${input.password}`
    );
    const data = await response.json();
    return data;
  };
  const getUserById = async (username) => {
    const response = await fetch(`http://localhost:8080/user/${username}`);
    const data = await response.json();
    setUser(true);
  };
  const defaultUserState = { username: "", password: "" };

  const handleLogin = (input) => {
    if (checkPassword(input)) {
      getUserById(input.username);
      setShowLogin(false);
    } else {
      ///invalid username
      ///invalid password
    }
    ///checkpassword
    ///return true
    ///return invalid username/invalid password
  };
  return (
    <div className="app">
      <Router>
        <HomeBar
          admin={user.admin}
          loggedIn={false}
          getUser={getUser}
          toggle={toggle}
          displayed={displayed}
          toggleLogin={toggleLogin}
          showLogin={showLogin}
          defaultUserState={defaultUserState}
          handleLogin={handleLogin}
        />
        <Routes>
          <Route path="/" element={<CourseContainer />} />
          <Route path="/courses/:id" element={<UpdateCourse />} />
          <Route path="/courses/create" element={<CreateCourse />} />
          <Route path="/user/create" element={<CreateUser />} />
          <Route path="courses/Bookmarked" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
