import React, { useState } from "react";
import FirebaseInfo from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import "./HomePageStyleSheets/HomePage.css";
import HPTopBar from "./HomePageComponents/HPTopBar";


function HomePage() {

  return (
    <div className="outside-class">
      <div className="inside-class">
        <HPTopBar />
        <div className="add-class-box">
          <div className="add-class-text">
            Taking off your STEM education is one click away! 
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeer3eGO5dAdOpEoN02hY01ZdAjjIjr6XrIWtWIx4MtrV4k6g/viewform?usp=sf_link" target="_blank">
            <div className="add-class-button">
              <button>Start Learning</button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
  
  export default HomePage;
