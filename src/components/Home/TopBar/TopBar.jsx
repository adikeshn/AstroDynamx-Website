import { useState } from "react";
import FirebaseInfo from "../../../../firebase-config";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

import styles from "./TopBar.module.scss";

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
    <div className={styles["top-screen"]}>
      <div className={styles["top-row-class"]}>
        <div className={styles["hello-text"]}>
          <h1>
            Hello Person!
            <br />
          </h1>
        </div>
        <div
          className={styles["menu-container"] + ` ${isOpen ? styles["show"] : ""}`}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles["menu-trigger"]}>
            <button
              onClick={handleToggle}
              onMouseEnter={handleToggle}
            >
              My Account
              <RiArrowDropDownLine
                className={styles["dropdown-arrow"]}
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.001s ease-in-out",
                }}
              />
            </button>
          </div>
          {isOpen && (
            <div className={styles["menu-items"]}>
              <div className={styles["add-class-button"]}>
                <a
                  className={styles["add-class-link"]}
                  href='https://docs.google.com/forms/d/e/1FAIpQLSeer3eGO5dAdOpEoN02hY01ZdAjjIjr6XrIWtWIx4MtrV4k6g/viewform?usp=sf_link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Add Class
                </a>
              </div>
              <div className={styles["logout-button"]}>
                <button onClick={signout}>Log out</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles["links-class"]}>
        <Link to='/home'>
          <div className={styles["text"]}>
            <div className={styles["classes"]}>Classes</div>
          </div>
        </Link>
        <Link to='/home/blog'>
          <div className={styles["text"]}>
            <div className={styles["other"]}>Blog</div>
          </div>
        </Link>
        <Link to='/home/forum'>
          <div className={styles["text"]}>
            <div className={styles["other"]}>Forum</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HPTopBar;
//&nbsp;|&nbsp;
