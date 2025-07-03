import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="about"  id="aboutpage">
        <div className="row">
          <div className="col-md-6 col-xl-6  col-lg-6 col-xs-12 about-img">
            <img src="/myimg2.png" alt="profile pic" />
          </div>
          <div className="col-md-6 col-xl-6  col-lg-6 col-xs-12 about-content">

            <h1>About Me</h1>
            <p>
              Hello! I'm <strong>Ritik kumar</strong>, a passionate and creative
              web developer with a focus on building modern, responsive, and
              dynamic web applications. I specialize in the MERN stack (MongoDB,
              Express.js, React, Node.js) and love turning ideas into real-world
              projects. With a strong foundation in frontend technologies like
              HTML, CSS, JavaScript, and frameworks like React.js, I aim to
              deliver clean and efficient code. I'm always excited to learn new
              technologies, contribute to open-source projects, and collaborate
              with teams to solve real-world problems. When I'm not coding, you
              can find me exploring UI/UX trends, watching tech videos, or
              solving algorithm challenges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
