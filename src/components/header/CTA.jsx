import React from 'react'
import Resume from "../../myResume.pdf"
import "./cta.css";

const CTA = () => {
  return (
    <div className="cta">
        <a href={Resume} download className="btn">Download CV</a>
        <a href="#contact" className="btn btn-primary">Contact Me</a>
    </div>
  )
}

export default CTA