import React, { useRef } from "react";
import "./Techstack.css";
import { TechstackList } from "../../utils/TechstackList";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Techstack = () => {
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from(cardsRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="container techstack" id="techstackpage" ref={sectionRef}>
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        Technologies Stack
      </h2>
      <hr />
      <p className="pb-3 text-center">
        👉 including programming languages, frameworks, databases, front-end and
        back-end tools, and APIs
      </p>

      <div className="row">
        {TechstackList.map((tech, index) => (
          <div
            key={tech.id}
            className="col-md-4 col-lg-3"
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="card m-2">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex justify-content-center align-items-center">
                    <div className="align-self-center">
                      <tech.icon className="tech-icon" />
                    </div>
                    <div className="media-body text-center">
                      <h5 className="media-heading">{tech.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techstack;
