import React, { useState } from "react";
import FirebaseInfo from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";


function HomePage() {
  const navigate = useNavigate();

  const signout = async () => {
    await FirebaseInfo.auth.signOut();
    navigate("/");
  };

  return (
    <div className="outside-class">
      <div className="add-class-box">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeer3eGO5dAdOpEoN02hY01ZdAjjIjr6XrIWtWIx4MtrV4k6g/viewform?usp=sf_link" target="_blank">
          <div className="add-class">
            Join a class
          </div>
          <img src="AddClassIcon.png" className="class-img" />
        </a>
      </div>
      <div className="logout-button">
        <button onClick={signout}>Log out</button>
      </div>
    </div>
  );

}
  
  export default HomePage;
//<button onClick={signout}>hello world</button>;
