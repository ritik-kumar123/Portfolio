import React, { useState, useEffect } from "react";
import Home from "../../pages/Home/Home";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./Layout.css";
import Menus from "../Menus/Menus";

const Layout = () => {
  const [toggle, setToggle] = useState(false);

  // Set toggle false on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setToggle(false);
      }
    };

    // Run on mount + on resize
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle handler
  const handleToggle = () => {
    // Prevent toggle if screen is small
    if (window.innerWidth > 768) {
      setToggle(!toggle);
    }
  };

  return (
    <div className="sidebar-section">
      <div className={toggle ? "sidebar sidebar-toggle" : "sidebar"}>
        <div className="sidebar-toggle-icons">
          <p onClick={handleToggle}>
            {toggle ? (
              <AiOutlineDoubleLeft size={30} />
            ) : (
              <AiOutlineDoubleRight size={30} />
            )}
          </p>
        </div>
        <Menus toggle={toggle} />
      </div>
      <div className="container">
        <Home toggle={toggle} />
      </div>
    </div>
  );
};

export default Layout;
