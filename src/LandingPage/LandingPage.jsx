import "./LandingPageStyles/index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect, useRef } from "react";
import Person from "./LandingPageComponents/Person";
import ContactUs from "./LandingPageComponents/ContactUs";
import BottomBar from "./LandingPageComponents/BottomBar";
import TopBar from "./LandingPageComponents/TopBar";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import FirebaseInfo from "../../firebase-config";

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

  return (
    <div className='screen'>
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

      <div className='backgroundDiv'>
        <div className='landingDiv'>
          <h1 className='titleText'>Fueling Dreams with STEM Tutoring and Rocketry</h1>
          <div className='startedDiv'>
            <div className='getStartedBox'>
              <Link
                to='/signup'
                className='startedText'
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='separator2' />


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
          <p className='mission-desc'>
            Of course, we are very privileged, and it is important to give back to our community.
            That is why we are also creating teaching resources that will educate the next
            generation on STEM topics. Hopefully you stick with us on our mission. We'd love to have
            your help!
          </p>
        </div>
        <img
          className='earth-image'
          src='earth.png'
          alt=''
        />
      </div>
      <div className='separator2' />

      <div
        ref={team}
        className='team-bg'
      >
        <div
          className='margin-content'
          data-aos='fade-up'
        >
          <h1 className='team-title'>Our Team</h1>
          <div className='team-row'>
            <Person
              name={"Adi Jha, CEO"}
              uri={"Adi.png"}
              desc={
                <ul>
                  Junior at West Windsor Plainsboro High School North
                  <li>Top 10 at Science Olympiad Nationals</li>
                  <li>Studied relativity at Columbia University</li>
                  <li>Engineer on MidKnight Inventors</li>
                  <li>Studying Multivariable Calculus and College Physics</li>
                </ul>
              }
              />
            <Person
              name={"Charlie Xiang, COO"}
              uri={"Charlie.png"}
              desc={
                <ul>
                  Junior at West Windsor Plainsboro High School North
                  <li>AIME Qualifier</li>
                  <li>AMC 10 Honor Roll</li>
                  <li>Researched applications of dMRI at the University of Illinois at Chicago</li>
                  <li>Varsity Tennis First Singles</li>
                </ul>
              }
              />
            <Person
              name={"Arav Gupta, CTO"}
              uri={"Arav.png"}
              desc={
                <ul>
                  Junior at West Windsor Plainsboro High School North
                  <li>Recently moved in from Singapore</li>
                  <li>Top 10 in National Junior Biology Olympiad</li>
                  <li>Studied college level STEM courses</li>
                  <li>Gold, Silver in Chemistry, Physics Olympiads</li>
                  <li>International Space Challenge Distinction winner</li>
                </ul>
              }
              />
          </div>
          <div className='team-row'>
            <Person
              name={"Jonathan Tang, CFO"}
              uri={"Jonathan.jpeg"}
              desc={
                <ul>
                  Junior at West Windsor Plainsboro High School North
                  <li>Studied business & entrepreneurship at Columbia University</li>
                  <li>Researched aerospace and mechanical engineering at Rutgers</li>
                  <li>Varsity Basketball Player</li>
                  <li>Studying college physics</li>
                </ul>
              }
              />
            <Person
              name={"Aldric Benalan, CAO"}
              uri={"Aldric.png"}
              desc={
                <ul>
                  Sophomore at West Windsor Plainsboro High School North
                  <li>Placed 6th place nationally in the Science Olympiad Astronomy event</li>
                  <li>2x champion of National Science Bee</li>
                  <li>USA Biology Olympiad Semifinalist</li>
                </ul>
              }
              />
            <Person
              name={"Akanksha Bagchi, CMO"}
              uri={"Akanksha.png"}
              desc={
                <ul>
                  Freshman at West Windsor Plainsboro High School North
                  <li>Top 10 at Science Olympiad Nationals</li>
                  <li>Studied relativity at Columbia University</li>
                  <li>Engineer on MidKnight Inventors</li>
                  <li>Studying Multivariable Calculus and College Physics</li>
                </ul>
              }
            />
          </div>
        </div>
      </div>
      <div
        className='bottom-d'
        ref={involved}
      >
        <BottomBar />
      </div>
    </div>
  );
}

export default LandingPage;
