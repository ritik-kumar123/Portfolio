import React from 'react'
import Layout from './components/Layout/Layout'
import About from './pages/About/About'
import Techstack from './pages/Techstack/Techstack'
import Project from './pages/Project/Project'
import Education from './pages/Educations/Education'
import WorkExp from './pages/WorkExp/WorkExp'
import Contact from './pages/Contact/Contact'
import ScrollToTop from 'react-scroll-to-top'
import MobileNav from './components/MobileNav/MobileNav'
const App = () => {
  return (
    <>
    <MobileNav/>
      <Layout />
      <div className="container">
        <About />
        <Education />
        <Techstack />
        <Project />
        <WorkExp />
        <Contact />
      </div>
      <div className="footer mb-3 ms-3">
        <h4 className="text-center">
          Made with 😍 RiTik  &copy; 2025
        </h4>
      </div>
      <ScrollToTop smooth color='#f29f67' style={{backgroundColor: '#1e1e2c', borderRadius:"80px"}} />
    </>
  );
}

export default App