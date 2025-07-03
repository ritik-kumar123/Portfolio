import React, { useRef } from "react";
import "./WorkExp.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register plugin once
gsap.registerPlugin(ScrollTrigger);

const WorkExp = () => {
  const workRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: workRef.current,
          start: "top 80%", // when the top of .work hits 80% of viewport
        },
      });

      tl.from(".main-heading", {
        y: -50,
        opacity: 0,
      },0)
        .from(".work hr", {
          width: 0,
        },0)
        .from(".heading", {
          y: 30,
          opacity: 0,
          duration: 0.2,
        });
    },
  );

  return (
    <div className="container work" id="workpage" ref={workRef}>
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase main-heading">
        Work Experience
      </h2>
      <hr />
      <div className="heading">
        <h1 className="dot">.</h1>
        <h2>Fresher</h2>
      </div>
    </div>
  );
};

export default WorkExp;
