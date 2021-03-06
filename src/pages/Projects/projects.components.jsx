import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./projects.component.css";
import ProjectList from "./projectList";
// import useLocoScroll from "../../hooks/useLocoScroll";
import Nav from "../../components/NavBar/nav.component";
function ProjectsPage() {
  gsap.registerPlugin(ScrollTrigger);
  // useLocoScroll(".projects-wrapper");

  useEffect(() => {
    // Main Logo
    gsap.to("#left-ellipse", { fill: "#1d1b26" });
    gsap.to("#right-ellipse", { fill: "#1d1b26" });
    gsap.to("#i-main", { fill: "#1d1b26" });
    // NavBar
    gsap.to("#main-nav", {
      backgroundImage: "linear-gradient(to bottom, #ddd 50%, transparent)",
    });
    gsap.to(".nav-list", { color: "#1d1b26" });
    ScrollTrigger.matchMedia({
      "(min-width: 900px)": function () {
        // Image Containers
        gsap.to(".project__image--container-1", {
          y: -20,
          ease: "ease",
          duration: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: ".project__container-1",
            start: "90% bottom",
            toggleActions: "play none none none",
            // scroller: ".projects-wrapper",
          },
        });
        gsap.to(".project__image--container-2", {
          y: -20,
          ease: "ease",
          duration: 0.8,
          opacity: 1,
          scrollTrigger: {
            trigger: ".project__container-2",
            start: "90% bottom",
            toggleActions: "play none none none",
            // scroller: ".projects-wrapper",
          },
        });
        gsap.to(".project__image--container-3", {
          y: -20,
          ease: "ease",
          duration: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: ".project__container-3",
            start: "90% bottom",
            toggleActions: "play none none none",
            // scroller: ".projects-wrapper",
          },
        });
        gsap.to(".project__image--container-4", {
          y: -20,
          ease: "ease",
          duration: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: ".project__container-4",
            start: "90% bottom",
            toggleActions: "play none none none",
            // scroller: ".projects-wrapper",
          },
        });
        gsap.to(".project__image--container-5", {
          y: -20,
          ease: "ease",
          duration: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: ".project__container-5",
            start: "90% bottom",
            toggleActions: "play none none none",
            // scroller: ".projects-wrapper",
          },
        });

        // Descriptions Container
        gsap.to(".project__description--container-1", {
          x: 20,
          ease: "ease",
          duration: 0.8,
          opacity: 1,
          scrollTrigger: {
            trigger: ".project__container-1",
            start: "90% bottom",
            toggleActions: "play none none none",
            // scroller: ".projects-wrapper",
          },
        });
        gsap.to(".project__description--container-2", {
          x: 20,
          ease: "ease",
          duration: 0.8,
          opacity: 1,
          scrollTrigger: {
            trigger: ".project__container-2",
            start: "90% bottom",
            toggleActions: "play none none none",
            // scroller: ".projects-wrapper",
          },
        });
        gsap.to(".project__description--container-3", {
          x: 20,
          ease: "ease",
          duration: 0.8,
          opacity: 1,
          scrollTrigger: {
            trigger: ".project__container-3",
            start: "90% bottom",
            toggleActions: "play none none none",
            // scroller: ".projects-wrapper",
          },
        });
        gsap.to(".project__description--container-4", {
          x: 20,
          ease: "ease",
          duration: 0.8,
          opacity: 1,
          scrollTrigger: {
            trigger: ".project__container-4",
            start: "90% bottom",
            toggleActions: "play none none none",
            // scroller: ".projects-wrapper",
          },
        });
        gsap.to(".project__description--container-5", {
          x: 20,
          ease: "ease",
          duration: 0.8,
          opacity: 1,
          scrollTrigger: {
            trigger: ".project__container-5",
            start: "90% bottom",
            toggleActions: "play none none none",
            // scroller: ".projects-wrapper",
          },
        });
        gsap.to(".project__description--container-6", {
          x: 20,
          ease: "ease",
          duration: 0.8,
          opacity: 1,
          scrollTrigger: {
            trigger: ".project__container-6",
            start: "70% bottom",
            toggleActions: "play none none none",
            // scroller: ".projects-wrapper",
          },
        });
      },
    });
  }, []);
  const ProjectsGen = () => {
    return ProjectList.map((project, index) => {
      return (
        <div className={`project__container project__container-${index + 1}`}>
          <div
            className={`project__image--container project__image--container-${
              index + 1
            }`}
          >
            <img
              className="project__image"
              src={project.projectImage}
              alt={project.projectImageName}
            />
          </div>
          <div className={`project__bg project__bg--${index + 1}`}>
            {/* <img src="" alt="fs" /> */}
            <p className="project-number">{project.projectNumber}</p>
          </div>
          <div
            className={`project__description--container project__description--container-${
              index + 1
            }`}
          >
            <p className="project__description--heading">
              {project.projectHeading}
            </p>
            <a className="live-button__project" href={project.projectLink}>
              See Live
            </a>
            <p className="project__description--para">
              {project.projectDescription}
            </p>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <Nav />
      <section className="projects-wrapper">
        <ProjectsGen />
      </section>
    </>
  );
}

export default withRouter(ProjectsPage);
