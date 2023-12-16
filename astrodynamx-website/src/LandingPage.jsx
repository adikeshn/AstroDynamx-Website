import "./styleSheets/index.css";
import TopBar from "./components/TopBar";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect, useRef } from "react";

function LandingPage() {
  const mission = useRef(null);
  const team = useRef(null);
  const involve = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 30) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="screen">
      <TopBar
        shown={show}
        mission={mission}
        team={team}
        involve={involve}
        contact={contact}
        scrolltoSection={scrollToSection}
      />
      <div className="backgroundDiv">
        <div className="landingDiv">
          <h1 className="titleText">
            Fueling Dreams with STEM Tutoring and Rocketry
          </h1>
          <div className="startedDiv">
            <div className="getStartedBox">
              <h2 className="startedText">Get Started</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="separator" />

      <div ref={mission} className="mission-bg">
        <div className="mission-text" data-aos="fade-up">
          <h1 className="mission-title">MISSION STATEMENT</h1>
          <p className="mission-desc">
            At [Your Website/Company Name], our mission is to empower
            individuals and businesses with the tools and knowledge they need to
            thrive in an ever-evolving digital landscape. We are dedicated to
            fostering innovation, promoting inclusivity, and delivering
            exceptional value to our users.
          </p>
          <p className="mission-desc">
            Through a commitment to excellence and a passion for continuous
            improvement, we aim to be a trusted resource that inspires,
            educates, and transforms the way our community engages with the
            world.
          </p>
        </div>
        <img className="earth-image" src="src/assets/earth.png" />
      </div>
    </div>
  );
}

export default LandingPage;
