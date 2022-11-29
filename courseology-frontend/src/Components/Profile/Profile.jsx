import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import './Profile.scss';
const Profile = ({ userLogin ,toggle,displayed,logout}) => {
  return (
    <div className="dropdown">
   <Button text= {`hi ${userLogin.username}`}  buttonStyle="button__login" clickEvent={toggle} /> 
      {displayed && (
        <div className="dropdown__items">
          <p className="dropdown__item-blank"></p>
          <Link style={{ textDecoration: "none" }} to="/courses/bookmarked">
            <p className="dropdown__item">Bookmarked</p>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/" onClick={logout}>
            <p className="dropdown__item">Log Out</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Profile;
