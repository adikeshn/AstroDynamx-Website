import React, { useState } from "react";
import FirebaseInfo from "../../../firebase-config";
import { Link, useNavigate } from "react-router-dom";
import {RiArrowDropDownLine} from "react-icons/ri";
import "../HomePageStyleSheets/HPTopBar.css";

function HPTopBar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isRotated, setIsRotated] = useState(false);

  const signout = async () => {
    await FirebaseInfo.auth.signOut();
    navigate("/");
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);
  };
  const handleMouseLeave = () => {
    setIsOpen(false);
    setIsRotated(!isRotated);
  };

  return (
    <div className="top-screen">
      <div className="top-row-class">
        <div className="hello-text">
          <h1>Hello Person!<br /></h1>
        </div>
        <div className={`account-dropdown-menu-container ${isOpen ? 'show' : ''}` } onMouseLeave={handleMouseLeave}>
          <div className="account-dropdown-menu-trigger">
            <button onClick={handleToggle} onMouseEnter={handleToggle}>My Account 
              <RiArrowDropDownLine className="dropdown-arrow" 
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.001s ease-in-out',
                }}
              />
            </button>
          </div>
          {isOpen && (
            <div className="account-dropdown-menu-items">
              <div className="account-menu-add-class-button">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeer3eGO5dAdOpEoN02hY01ZdAjjIjr6XrIWtWIx4MtrV4k6g/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                  Add Class
                </a>
              </div>
              <div className="logout-button">
                <button onClick={signout}>Log out</button>
              </div>
            </div>
          )}
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

function DropdownMenuItem(){
  return (
    <li>
      <a> {props.text} </a>
    </li>
  );
}

export default HPTopBar;
//&nbsp;|&nbsp;