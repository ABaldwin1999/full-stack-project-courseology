import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Profile = ({ user ,toggle,displayed}) => {
  return (
    <div className="dropdown">
     <Button text= "hi"   onClick={toggle} /> {/* user.username*/} 
      {displayed && (
        <div className="dropdown__items">
          <p className="dropdown__item-blank"></p>
          <Link to="/courses/bookmarked">
            <p>Bookmarked</p>
          </Link>
          <Link to="/courses/bookmarked">
            <p>Log Out</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Profile;
