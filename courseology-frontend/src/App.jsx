import './App.scss';
///import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomeBar from './Components/HomeBar/HomeBar';

function App() {
  const [user, setUser] = useState("");
  const getUser = async () => {
    const response = await fetch("http://localhost:8080/courses/categories");
    const data = await response.json();
    setUser(data);
  };
  return (
    <div className="App" getUser={getUser}>
  {/*<Router>*/}
      <HomeBar admin={user.admin} loggedIn={false}/>
      {/* <Routes>
        <Route path=""/>
        <Route path=""/>
        <Route path=""/>
        <Route path="" />
      </Routes>
    </Router> */}
    </div>
  );
}

export default App;
