import React from 'react'
import "./experience.css";
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">
    <h5>What I have learned</h5>
    <h2>My Skills</h2>

    <div className="container experience-container">
      
      <div className="experience-frontend">
        <div className="head">
        <h3>Frontend Development</h3>
        </div>
        <div className="experience-content">
          
          <article className="experience-details">
            <BsPatchCheckFill className="experience-details-icon"/>
            <div>
              <h4>HTML</h4>
              <small className="text-light"></small>
            </div>
          </article>

          <article className="experience-details">
            <BsPatchCheckFill className="experience-details-icon"/>
            <div>
              <h4>CSS</h4>
              <small className="text-light"></small>
            </div>
          </article>

          <article className="experience-details">
            <BsPatchCheckFill className="experience-details-icon"/>
            <div>
              <h4>JavaScript</h4>
              <small className="text-light"></small>
            </div>
          </article>

          <article className="experience-details">
            <BsPatchCheckFill className="experience-details-icon"/>
            <div>
              <h4>Bootstrap</h4>
              <small className="text-light"></small>
            </div>
          </article>

          <article className="experience-details">
            <BsPatchCheckFill className="experience-details-icon"/>
            <div>
              <h4>jQuery</h4>
              <small className="text-light"></small>
            </div>
          </article>

          <article className="experience-details">
            <BsPatchCheckFill className="experience-details-icon"/>
            <div>
              <h4>React</h4>
              <small className="text-light"></small>
            </div>
          </article>


        </div>

      </div> 
      {/* end of frontend */}

      <div className="experience-backend">
        <h3>Backend Development</h3>
        
        <div className="experience-content">
          
          <article className="experience-details">
            <BsPatchCheckFill className="experience-details-icon"/>
            <div>
              <h4>Java</h4>
              <small className="text-light"></small>
            </div>
          </article>

          <article className="experience-details">
            <BsPatchCheckFill className="experience-details-icon"/>
            <div>
              <h4>Node.js</h4>
              <small className="text-light"></small>
            </div>
          </article>

          <article className="experience-details">
            <BsPatchCheckFill className="experience-details-icon"/>
            <div>
              <h4>Express.js</h4>
              <small className="text-light"></small>
            </div>
          </article>

        </div>

      </div>

    </div>
    </section>

  )
}

export default Experience