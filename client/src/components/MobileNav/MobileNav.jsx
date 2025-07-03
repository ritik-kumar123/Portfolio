import React,{useState} from 'react'
import './MobileNav.css'
import {
  FcHome,
  FcAbout,
  FcReadingEbook,
  FcBiotech,
  FcVideoProjector,
  FcPortraitMode,
  FcBusinessContact,
} from "react-icons/fc";
import { Link } from "react-scroll";
import { GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineMenuFold} from 'react-icons/ai'
const MobileNav = () => {
  const [open , setOpen] = useState(false)

  //handle open
  const handleOpen =()=>{
    setOpen(!open);
  }
  // handle menu click
  const handleMenuClick = () => {
    setOpen(false);
  }
  return (
    <>
    <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? <AiOutlineMenuFold size={30} className='mobile-nav-icon' onClick={handleOpen} /> :<GiHamburgerMenu size={30} className='mobile-nav-icon' onClick={handleOpen} />}
            
            <span className='mobile-nav-title'>My Portfolio App</span>
        </div>
        {open &&(
        <div className="mobile-nav-menu">
            <div className="nav-items">
                        <div className="nav-item">
                          <Link
                            to="homepage"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onClick={handleMenuClick}
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
                            onClick={handleMenuClick}
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
                            onClick={handleMenuClick}
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
                            onClick={handleMenuClick}
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
                            onClick={handleMenuClick}
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
                            onClick={handleMenuClick}
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
                            onClick={handleMenuClick}
                          >
                            <div className="nav-my-link">
                              <FcBusinessContact />
                              Contact
                            </div>
                          </Link>
                        </div>
                      </div>
        </div>)}
    </div>
    </>
  )
}

export default MobileNav