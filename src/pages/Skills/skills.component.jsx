import React, { useEffect } from "react";
import "./skills.component.css";
import { gsap } from "gsap";
import { withRouter } from "react-router-dom";
import SkillsDataComfortable from "./skillsDataComfortable";
import SkillsDataBasic from "./skillsDataBasic";
import Nav from "../../components/NavBar/nav.component.jsx";
function SkillsPageComponent() {
  useEffect(() => {
    // Main Logo
    gsap.to("#left-ellipse", { fill: "#1d1b26" });
    gsap.to("#right-ellipse", { fill: "#1d1b26" });
    gsap.to("#i-main", { fill: "#1d1b26" });
    // NavBar
    gsap.to("#main-nav", {
      backgroundImage: "linear-gradient(to bottom, #ddd 50%, transparent)",
    });
    gsap.to(".nav-list", { color: "black" });
  }, []);
  const SkillsComfortGen = () => {
    return SkillsDataComfortable.map((skills, index) => {
      return (
        <div key={index} className="skills skills-comfort__container">
          <div className="skills-comfort__image--container">
            <img src={skills.skillLogo} alt={skills.skillLogoName} />
          </div>
          <p className="skills-comfort__title">{skills.skillName}</p>
        </div>
      );
    });
  };
  const SkillsBasicGen = () => {
    return SkillsDataBasic.map((skills, index) => {
      return (
        <div key={index} className="skills skills-basic__container">
          <div className="skills-basic__image--container">
            <img src={skills.skillLogo} alt={skills.skillLogoName} />
          </div>
          <p className="skills-basic__title">{skills.skillName}</p>
        </div>
      );
    });
  };
  return (
    <>
      <Nav />
      <div className="skills-container">
        <h2>Moderate</h2>
        <div className="hr-skills"></div>
        <div className="comfort-skills__wrapper">
          <SkillsComfortGen />
        </div>
        <h2>Basic</h2>
        <div className="hr-skills"></div>
        <div className="basic-skills__wrapper">
          <SkillsBasicGen />
        </div>
      </div>
    </>
  );
}

export default withRouter(SkillsPageComponent);
