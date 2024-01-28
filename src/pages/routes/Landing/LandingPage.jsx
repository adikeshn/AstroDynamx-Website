import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect, useRef, useCallback } from "react";
import Person from "../../../components/Landing/Person/Person";
import ContactUs from "../../../components/Landing/ContactUs/ContactUs";
import BottomBar from "../../../components/Landing/BottomBar/BottomBar";
import TopBar from "../../../components/Landing/TopBar/TopBar";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import FirebaseInfo from "../../../../firebase-config";

import styles from "./LandingPage.module.scss";
import Header from "../../../components/Landing/Header/Header";
import Mission from "../../../components/Landing/Mission/Mission";

function LandingPage() {
  const mission = useRef(null);
  const team = useRef(null);
  const involved = useRef(null);
  const [showContact, setShowContact] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY, setShow, setLastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [controlNavbar]);

  useEffect(() => {
    const moniterAuthState = () => {
      onAuthStateChanged(FirebaseInfo.auth, (users) => {
        if (users) {
          navigate("/home");
        }
      });
    };
    moniterAuthState();
  });

  useEffect(() => {
    AOS.init();
  });

  return (
    <div className={styles["screen"]}>
      <TopBar
        shown={show}
        mission={mission}
        team={team}
        involved={involved}
        contact={setShowContact}
        scrolltoSection={scrollToSection}
      />
      <ContactUs
        showContact={showContact}
        setContact={setShowContact}
      />
      <Header />
      <Mission />
      <div className={styles["separator2"]} />
      <div
        ref={team}
        className={styles["team-bg"]}
      >
        <div
          className={styles["margin-content"]}
          data-aos='fade-up'
        >
          <h1 className={styles["team-title"]}>Our Team</h1>
          <div className={styles["team-row"]}>
            <Person
              name={"Donald Trump, CEO"}
              uri={"src/assets/daddydonald.jpeg"}
              desc={
                "Through a commitment to excellence and a passion for continuous improvement, we aim to be a trusted resource that inspires, educates, and transforms the way our community engages with theworld."
              }
            />
            <Person
              name={"Donald Trump, CEO"}
              uri={"src/assets/daddydonald.jpeg"}
              desc={
                "Through a commitment to excellence and a passion for continuous improvement, we aim to be a trusted resource that inspires, educates, and transforms the way our community engages with theworld."
              }
            />
          </div>
          <div className={styles["team-row"]}>
            <Person
              name={"Donald Trump, CEO"}
              uri={"src/assets/daddydonald.jpeg"}
              desc={
                "Through a commitment to excellence and a passion for continuou improvement, we aim to be a trusted resource that inspires, educates, and transforms the way our community engages with theworld."
              }
            />
            <Person
              name={"Donald Trump, CEO"}
              uri={"src/assets/daddydonald.jpeg"}
              desc={
                "Through a commitment to excellence and a passion for continuou improvement, we aim to be a trusted resource that inspires, educates, and transforms the way our community engages with theworld."
              }
            />
          </div>
          <div className={styles["team-row"]}>
            <Person
              name={"Donald Trump, CEO"}
              uri={"src/assets/daddydonald.jpeg"}
              desc={
                "Through a commitment to excellence and a passion for continuou improvement, we aim to be a trusted resource that inspires, educates, and transforms the way our community engages with theworld."
              }
            />
            <Person
              name={"Donald Trump, CEO"}
              uri={"src/assets/daddydonald.jpeg"}
              desc={
                "Through a commitment to excellence and a passion for continuou improvement, we aim to be a trusted resource that inspires, educates, and transforms the way our community engages with theworld."
              }
            />
          </div>
        </div>
      </div>
      <div
        className={styles["bottom-d"]}
        ref={involved}
      >
        <BottomBar />
      </div>
    </div>
  );
}

export default LandingPage;
