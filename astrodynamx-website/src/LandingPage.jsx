import "./styleSheets/index.css";
import TopBar from "./components/TopBar";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect, useRef } from "react";
import Person from "./components/Person";
import ContactUs from "./components/ContactUs";
import BottomBar from "./components/BottomBar";

function LandingPage() {
  const mission = useRef(null);
  const team = useRef(null);
  const involve = useRef(null);
  const [showContact, setContact] = useState(false);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
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
        contact={setContact}
        scrolltoSection={scrollToSection}
      />

      <ContactUs showContact={showContact} setContact={setContact} />

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
      <div className="separator2" />

      <div ref={mission} className="mission-bg">
        <div className="mission-text" data-aos="fade-up">
          <h1 className="mission-title">MISSION STATEMENT</h1>
          <p className="mission-desc">
            Hey and welcome to AstroDynamX! We are a group of passionate high
            school students working to create a rocket that will reach space and
            make aerospace engineering more accessible to all. Doing this is
            hard and we know it's hard, but that is what makes it fulfilling. In
            a year when we have our rocket flying, you will thank yourself for
            putting in the work.
          </p>
          <p className="mission-desc">
            Of course, we are very privileged, and it is important to give back
            to our community. That is why we are also creating teaching
            resources that will educate the next generation on STEM topics.
            Hopefully you stick with us on our mission. We'd love to have your
            help!
          </p>
        </div>
        <img className="earth-image" src="src/assets/earth.png" />
      </div>
      <div className="separator2" />

      <div ref={team} className="team-bg">
        <div className="margin-content" data-aos="fade-up">
          <h1 className="team-title">Our Team</h1>
          <div className="team-row">
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
          <div className="team-row">
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
          <div className="team-row">
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

      <BottomBar />
    </div>
  );
}

export default LandingPage;
