import React from 'react'; //rafce
import myImage from  "../../images/IMG_9353.jpg";
import {FaAward} from "react-icons/fa";
import {MdSchool} from "react-icons/md";
import {VscFolderLibrary} from "react-icons/vsc";
import "./about.css";

const About = () => {
  return (
    <section id="about">
    <h5>Get to know me</h5>
    <h2>About Me</h2>
    <div className="container about-container">
      <div className="about-me">
        <img src={myImage} alt="about me" className="about-me-image"></img>
      </div>

      <div className="about-content">
        <div className="about-cards">

          <article className="about-card">
          <FaAward className="about-icon" />
            <h5>Experience</h5>
            <small>Frontend and backend works</small>
          </article>

          <article className="about-card">
          <MdSchool className="about-icon" />
            <h5>Clients</h5>
            <small>B.S Computer Science Student</small>
          </article>

          <article className="about-card">
          <VscFolderLibrary className="about-icon" />
            <h5>Projects</h5>
            <small>10+ projects</small>
          </article>

        </div>

        <p>
          I'm a current undergraduate student at CUNY Brooklyn College pursuing a degree in
          computer science and a career in software development. The language I've worked
          with most is Java, but more recently I have learned HTML, CSS, JavaScript and
          others. I have used this knowledge to build some projects you can view below.
        </p>

        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </div>

    </section>
  )
}

export default About