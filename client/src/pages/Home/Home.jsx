import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = ({ toggle }) => {
  useGSAP(() => {
    // Animate text and buttons
    gsap.from(".home-content h1", {
      x: 200,
      opacity: 0,
      delay: 0.2,
      duration: 0.7,
    });

    gsap.from(".home-content h2", {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });

    gsap.from(".home-buttons", {
      opacity: 0,
      x: 100,
      duration: 1,
      delay: 0.5,
    });
  }, []);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // Animate profile image only on large screens
    mm.add("(min-width: 769px)", () => {
      gsap.to(".profile", {
        y: -40,
        boxShadow: "0 8px 20px rgba(242, 159, 103, 0.5)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    // Fade in effect for all screen sizes
    gsap.from(".profile", {
      opacity: 0,
      scale: 0,
      duration: 0.6,
      delay: 0.2,
    });
  }, []);

  return (
    <>
      <div className="home" id="homepage">
        <img
          className="profile"
          src="/myimg.jpg"
          alt="profile pic"
          style={{ visibility: toggle ? "hidden" : "visible" }}
        />
        <div className="container-fluid home-container">
          <div className="container home-content">
            <h2>Hi👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer!",
                    "Full Stack Developer!",
                    "Mern Stack Developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="home-buttons">
              <button className="btn btn-hire">Hire Me</button>
              <a
                className="btn btn-cv"
                href="/resume.pdf"
                download="Resume.pdf"
              >
                My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
