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
  const [userLogin, setUserLogin] = useState([]);
  const [user, setUser] = useState(false);
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
    setUserLogin(data);
  };
  const checkPassword = async (input) => {
    const response = await fetch(
      `http://localhost:8080/user/verify/${input.username}?password=${input.password}`
    );
    const data = await response.json();
    return data;
  };
  const defaultUserState = { username: "", password: "" };

  const handleLogin = (input) => {
    console.log("handle Login");
    console.log(checkPassword(input))
    if (checkPassword(input)) {
      console.log(checkPassword(input))
      getUser(input.username);
      setShowLogin(false);
      setUser(true);
    } else {
      ///invalid username
      ///invalid password
    }
  };
  const logout =()=>{
    setUser(false);
    setUserLogin([]);
  }
  return (
    <div className="app">
      <Router>
        <HomeBar
          admin={userLogin.admin}
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
          <Route path="/" element={<CourseContainer user={user} admin={userLogin.admin} />} />
          <Route path="/courses/:id" element={<UpdateCourse user={user} />} />
          <Route path="/courses/create" element={<CreateCourse />} />
          <Route path="/user/create" element={<CreateUser />} />
          <Route path="courses/Bookmarked" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
