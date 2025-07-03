import React from "react";
import "./Menus.css";
import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
  FcVoicePresentation,
} from "react-icons/fc";

const Menus = ({ toggle }) => {
  useGSAP(() => {
    const tl = gsap.timeline();

    if (document.querySelector(".navbar-profile-pic")) {
      tl.from(".navbar-profile-pic", {
        duration: 0.6,
        scale: 0.5,
        opacity: 0,
        ease: "back.out(1.7)",
      });
    }

    if (document.querySelectorAll(".nav-link").length > 0) {
      tl.from(
        ".nav-link",
        {
          duration: 0.5,
          stagger: 0.1,
          x: -30,
          opacity: 0,
          ease: "power3.inOut",
        },
        0
      );
    }

    if (document.querySelector(".profile-pic")) {
      gsap.to(".profile-pic", {
        y: -30,
        boxShadow: "0 8px 20px rgba(242, 159, 103, 0.5)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, [toggle]);

  return (
    <>
      {toggle ? (
        <div className="menu-bar">
          <div className="navbar-profile-pic">
            <img className="profile-pic" src="/myimg.jpg" alt="profile pic" />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <Link
                to="homepage"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <div className="nav-my-link">
                  <FcHome />
                  Home
                </div>
              </Link>

              <Link
                to="aboutpage"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <div className="nav-my-link">
                  <FcAbout />
                  About
                </div>
              </Link>

              <Link
                to="educationpage"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <div className="nav-my-link">
                  <FcReadingEbook />
                  Education
                </div>
              </Link>

              <Link
                to="techstackpage"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <div className="nav-my-link">
                  <FcBiotech />
                  Skills
                </div>
              </Link>

              <Link
                to="projectpage"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <div className="nav-my-link">
                  <FcVideoProjector />
                  Project
                </div>
              </Link>

              <Link
                to="workpage"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <div className="nav-my-link">
                  <FcPortraitMode />
                  Work Experience
                </div>
              </Link>

              <Link
                to="contactpage"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <div className="nav-my-link">
                  <FcBusinessContact />
                  Contact
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <Link
                to="homepage"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <div className="nav-my-link">
                  <FcHome title="Home" />
                </div>
              </Link>

              <Link
                to="aboutpage"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <div className="nav-my-link">
                  <FcAbout title="About" />
                </div>
              </Link>

              <Link
                to="educationpage"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <div className="nav-my-link">
                  <FcReadingEbook title="Education" />
                </div>
              </Link>

              <Link
                to="techstackpage"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <div className="nav-my-link">
                  <FcBiotech title="Skills" />
                </div>
              </Link>

              <Link
                to="projectpage"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <div className="nav-my-link">
                  <FcVideoProjector title="Project" />
                </div>
              </Link>

              <Link
                to="workpage"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <div className="nav-my-link">
                  <FcPortraitMode title="Work Experience" />
                </div>
              </Link>

              <Link
                to="contactpage"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <div className="nav-my-link">
                  <FcBusinessContact title="Contact" />
                </div>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
