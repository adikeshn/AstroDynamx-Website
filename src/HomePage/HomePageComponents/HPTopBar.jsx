import React, { useState } from "react";
import FirebaseInfo from "../../../firebase-config";
import { Link, useNavigate } from "react-router-dom";
import "../HomePageStyleSheets/HPTopBar.css";

function HPTopBar() {
    const navigate = useNavigate();

  const signout = async () => {
    await FirebaseInfo.auth.signOut();
    navigate("/");
  };

  return (
    <div className="top-screen">
      <div className="top-row-class">
        <div className="hello-text">
          <h1>Hello Person<br /></h1>
        </div>
        <div className="my-account-class">
          My Account
        </div>
      </div>
      <div className="links-class">
        <Link to="/home">
          <div className="text">
            <div className="classes">Classes</div>
          </div>
        </Link>
        <Link to="/home/blog">
          <div className="text">
            <div className="other">Blog</div>
          </div>
        </Link>
        <Link to="/home/forum">
          <div className="text">
            <div className="other">Forum</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HPTopBar;
//&nbsp;|&nbsp;
      //<div className="logout-button">
        //<button onClick={signout}>Log out</button>
      //</div>