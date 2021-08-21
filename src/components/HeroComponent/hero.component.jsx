import React, { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import Typical from "react-typical";
import "./hero.component.css";
function HeroComponent() {
  let heroDivRef = useRef(null);
  useEffect(() => {
    gsap.to(heroDivRef.current, 1.5, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
  }, []);
  return (
    <div className="hero" ref={heroDivRef}>
      <h3 className="hero-name">
        <span className="hero-name__span">{`// `}</span>K M Iqbal
      </h3>

      <p className="typing-para">
        <Typical
          steps={[
            "A Frontend Developer",
            4000,
            "An Urban Planner",
            2000,
            "A M.Sc Student",
            2000,
          ]}
          loop={Infinity}
        />
      </p>
    </div>
  );
}

export default HeroComponent;