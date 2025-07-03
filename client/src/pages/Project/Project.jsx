import React, { useEffect } from "react";
import "./Project.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Project data
const projects = [
  {
    title: "NETFLIX CLONE",
    image: "/project1.png",
    stack: ["HTML", "CSS", "JAVASCRIPT", "GSAP"],
    badge: "Frontend",
    link: "https://netfllixclone-by-ar-ritik-thakur.netlify.app/",
  },
  {
    title: "Shoply Shopping website",
    image: "/project2.png",
    stack: ["HTML", "CSS", "JAVASCRIPT"],
    badge: "Frontend",
    link: "https://ecommerce-website-ritik.netlify.app/",
  },
  {
    title: "Blog CMS App",
    image: "/project1.png",
    stack: ["Node", "Express", "React", "MongoDB"],
    badge: "Full Stack",
    link: "https://your-blog-link.netlify.app/",
  },
];

// Single Project Card
const ProjectCard = ({ project }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      className="col-md-4"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <div className="card rounded">
        <div className="card-image">
          <span className="card-notify-badge">{project.badge}</span>
          <img src={project.image} alt={project.title} />
        </div>

        <div className="card-image-overlay mt-3 text-center">
          {project.stack.map((tech, i) => (
            <span key={i} className="card-details-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="card-body text-center">
          <h5 className="text-uppercase">{project.title}</h5>
          <a
            className="ad-btn"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Main Project Section
const Project = () => {
  return (
    <div className="container project" id="projectpage">
      <h2 className="text-center text-uppercase mt-3 mb-1">
        Top Recent Projects
      </h2>
      <hr />
      <p className="text-center pb-3">
        👉 Including languages, frameworks, databases, and tools
      </p>

      <div className="row" id="ads">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
