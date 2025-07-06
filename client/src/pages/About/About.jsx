import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="aboutpage">
      <div className="about-container">
        {/* Image */}
        <div className="about-image">
          <img src="/myimg2.png" alt="Ritik Kumar" />
        </div>

        {/* Content */}
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hello! I'm <strong>Ritik Kumar</strong>, a passionate and creative
            web developer focused on building responsive and user-friendly web
            apps.
            <br />
            <br />I specialize in the <strong>MERN stack</strong> — MongoDB,
            Express.js, React, and Node.js. With solid frontend skills in HTML,
            CSS, and JavaScript, I turn ideas into beautiful web interfaces.
            <br />
            <br />I love clean code, engaging UI/UX, and learning new
            technologies. When I'm not coding, I'm exploring design trends,
            solving DSA problems, or watching tech content.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
