import React from "react";
import "./footer.css";
import {FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <h2 href="#" className="footer-logo">Andrea</h2>

        <ul className="permalinks">
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

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