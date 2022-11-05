import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import './Profile.scss';
const Profile = ({ user ,toggle,displayed}) => {
  return (
    <div className="dropdown">
     <Button text= "hi"  buttonStyle="button__login" clickEvent={toggle} /> {/* user.username*/} 
      {displayed && (
        <div className="dropdown__items">
          <p className="dropdown__item-blank"></p>
          <Link to="/courses/bookmarked">
            <p className="dropdown__item">Bookmarked</p>
          </Link>
          <Link to="/courses/bookmarked">
            <p className="dropdown__item">Log Out</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Profile;
