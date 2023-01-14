import React from "react";
import "./footer.css";
import {FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <h2 href="#" className="footer-logo">Andrea</h2>

        <div className="permalinks">
            <a className="id-link" href="#header">Home</a>
            <a className="id-link" href="#about">About</a>
            <a className="id-link" href="#experience">Experience</a>
            <a className="id-link" href="#portfolio">Portfolio</a>
            <a className="id-link" href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
            <a href="https://github.com/andreatranchina" target="_blank" rel="noreferrer"><FaGithub /></a>
        </div>

        <div className="footer-copyright">
            <small>&copy; AndreaTranchina</small>
        </div>
    </footer>
  )
}

export default Footer 