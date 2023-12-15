import "./styleSheets/index.css";
import TopBar from "./components/TopBar";
import React, { useState, useEffect } from "react";

function LandingPage() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 30) {
      // if scroll down hide the navbar
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

  return (
    <div className="screen">
      <TopBar shown={show} />
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
      <p>
        ;eorigs;ehisuehgoiejrgioajr;gosj;oerijse;origj;sioerjgo;isejr;gois
        serg;oser;ogijser;oigj;soeirgiuaher;oisergo;ijse;rg
        serg;soerg;soierjg;oiserjg;osiejrg;oisjer;goisjer;goisjerg
        sergserg;oisjer;goisjer;ogijse;roigjs;eorigjsr
        ;eorigs;ehisuehgoiejrgioajr;gosj;oerijse;origj;sioerjgo;isejr;gois
        serg;oser;ogijser;oigj;soeirgiuaher;oisergo;ijse;rg
        serg;soerg;soierjg;oiserjg;osiejrg;oisjer;goisjer;goisjerg
        sergserg;oisjer;goisjer;ogijse;roigjs;eorigjsr
        ;eorigs;ehisuehgoiejrgioajr;gosj;oerijse;origj;sioerjgo;isejr;gois
        serg;oser;ogijser;oigj;soeirgiuaher;oisergo;ijse;rg
        serg;soerg;soierjg;oiserjg;osiejrg;oisjer;goisjer;goisjerg
        sergserg;oisjer;goisjer;ogijse;roigjs;eorigjsr
        ;eorigs;ehisuehgoiejrgioajr;gosj;oerijse;origj;sioerjgo;isejr;gois
        serg;oser;ogijser;oigj;soeirgiuaher;oisergo;ijse;rg
        serg;soerg;soierjg;oiserjg;osiejrg;oisjer;goisjer;goisjerg
        sergserg;oisjer;goisjer;ogijse;roigjs;eorigjsr
        ;eorigs;ehisuehgoiejrgioajr;gosj;oerijse;origj;sioerjgo;isejr;gois
        serg;oser;ogijser;oigj;soeirgiuaher;oisergo;ijse;rg
        serg;soerg;soierjg;oiserjg;osiejrg;oisjer;goisjer;goisjerg
        sergserg;oisjer;goisjer;ogijse;roigjs;eorigjsr
        ;eorigs;ehisuehgoiejrgioajr;gosj;oerijse;origj;sioerjgo;isejr;gois
        serg;oser;ogijser;oigj;soeirgiuaher;oisergo;ijse;rg
        serg;soerg;soierjg;oiserjg;osiejrg;oisjer;goisjer;goisjerg
        sergserg;oisjer;goisjer;ogijse;roigjs;eorigjsr
        jrgioajr;gosj;oerijse;origj;sioerjgo;isejr;gois
        serg;oser;ogijser;oigj;soeirgiuaher;oisergo;ijse;rg
        serg;soerg;soierjg;oiserjg;osiejrg;oisjer;goisjer;goisjerg
        sergserg;oisjer;goisjer;ogijse;roigjs;eorigjsr
        ;eorigs;ehisuehgoiejrgioajr;gosj;oerijse;origj;sioerjgo;isejr;gois
        serg;oser;ogijser;oigj;soeirgiuaher;oisergo;ijse;rg
        serg;soerg;soierjg;oiserjg;osiejrg;oisjer;goisjer;goisjerg
        sergserg;oisjer;goisjer;ogijse;roigjs;eorigjsr
        ;eorigs;ehisuehgoiejrgioajr;gosj;oerijse;origj;sioerjgo;isejr;gois
        serg;oser;ogijser;oigj;soeirgiuaher;oisergo;ijse;rg
        serg;soerg;soierjg;oiserjg;osiejrg;oisjer;goisjer;goisjerg
        sergserg;oisjer;goisjer;ogijse;roigjs;eorigjsr
        ;eorigs;ehisuehgoiejrgioajr;gosj;oerijse;origj;sioerjgo;isejr;gois
        serg;oser;ogijser;oigj;soeirgiuaher;oisergo;ijse;rg
        serg;soerg;soierjg;oiserjg;osiejrg;oisjer;goisjer;goisjerg
        sergserg;oisjer;goisjer;ogijse;roigjs;eorigjsr
        jrgioajr;gosj;oerijse;origj;sioerjgo;isejr;gois
        serg;oser;ogijser;oigj;soeirgiuaher;oisergo;ijse;rg
        serg;soerg;soierjg;oiserjg;osiejrg;oisjer;goisjer;goisjerg
        sergserg;oisjer;goisjer;ogijse;roigjs;eorigjsr
        ;eorigs;ehisuehgoiejrgioajr;gosj;oerijse;origj;sioerjgo;isejr;gois
        serg;oser;ogijser;oigj;soeirgiuaher;oisergo;ijse;rg
        serg;soerg;soierjg;oiserjg;osiejrg;oisjer;goisjer;goisjerg
        sergserg;oisjer;goisjer;ogijse;roigjs;eorigjsr
        ;eorigs;ehisuehgoiejrgioajr;gosj;oerijse;origj;sioerjgo;isejr;gois
        serg;oser;ogijser;oigj;soeirgiuaher;oisergo;ijse;rg
        serg;soerg;soierjg;oiserjg;osiejrg;oisjer;goisjer;goisjerg
        sergserg;oisjer;goisjer;ogijse;roigjs;eorigjsr
        ;eorigs;ehisuehgoiejrgioajr;gosj;oerijse;origj;sioerjgo;isejr;gois
        serg;oser;ogijser;oigj;soeirgiuaher;oisergo;ijse;rg
        serg;soerg;soierjg;oiserjg;osiejrg;oisjer;goisjer;goisjerg
        sergserg;oisjer;goisjer;ogijse;roigjs;eorigjsr
        jrgioajr;gosj;oerijse;origj;sioerjgo;isejr;gois
        serg;oser;ogijser;oigj;soeirgiuaher;oisergo;ijse;rg
        serg;soerg;soierjg;oiserjg;osiejrg;oisjer;goisjer;goisjerg
        sergserg;oisjer;goisjer;ogijse;roigjs;eorigjsr
        ;eorigs;ehisuehgoiejrgioajr;gosj;oerijse;origj;sioerjgo;isejr;gois
        serg;oser;ogijser;oigj;soeirgiuaher;oisergo;ijse;rg
        serg;soerg;soierjg;oiserjg;osiejrg;oisjer;goisjer;goisjerg
        sergserg;oisjer;goisjer;ogijse;roigjs;eorigjsr
        ;eorigs;ehisuehgoiejrgioajr;gosj;oerijse;origj;sioerjgo;isejr;gois
        serg;oser;ogijser;oigj;soeirgiuaher;oisergo;ijse;rg
        serg;soerg;soierjg;oiserjg;osiejrg;oisjer;goisjer;goisjerg
        sergserg;oisjer;goisjer;ogijse;roigjs;eorigjsr
        ;eorigs;ehisuehgoiejrgioajr;gosj;oerijse;origj;sioerjgo;isejr;gois
        serg;oser;ogijser;oigj;soeirgiuaher;oisergo;ijse;rg
        serg;soerg;soierjg;oiserjg;osiejrg;oisjer;goisjer;goisjerg
        sergserg;oisjer;goisjer;ogijse;roigjs;eorigjsr
        jrgioajr;gosj;oerijse;origj;sioerjgo;isejr;gois
        serg;oser;ogijser;oigj;soeirgiuaher;oisergo;ijse;rg
        serg;soerg;soierjg;oiserjg;osiejrg;oisjer;goisjer;goisjerg
        sergserg;oisjer;goisjer;ogijse;roigjs;eorigjsr
        ;eorigs;ehisuehgoiejrgioajr;gosj;oerijse;origj;sioerjgo;isejr;gois
        serg;oser;ogijser;oigj;soeirgiuaher;oisergo;ijse;rg
        serg;soerg;soierjg;oiserjg;osiejrg;oisjer;goisjer;goisjerg
        sergserg;oisjer;goisjer;ogijse;roigjs;eorigjsr
        ;eorigs;ehisuehgoiejrgioajr;gosj;oerijse;origj;sioerjgo;isejr;gois
        serg;oser;ogijser;oigj;soeirgiuaher;oisergo;ijse;rg
        serg;soerg;soierjg;oiserjg;osiejrg;oisjer;goisjer;goisjerg
        sergserg;oisjer;goisjer;ogijse;roigjs;eorigjsr
        ;eorigs;ehisuehgoiejrgioajr;gosj;oerijse;origj;sioerjgo;isejr;gois
        serg;oser;ogijser;oigj;soeirgiuaher;oisergo;ijse;rg
        serg;soerg;soierjg;oiserjg;osiejrg;oisjer;goisjer;goisjerg
        sergserg;oisjer;goisjer;ogijse;roigjs;eorigjsr
      </p>
    </div>
  );
}

export default LandingPage;
