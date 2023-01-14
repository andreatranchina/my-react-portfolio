import React from 'react';
import "./header.css";
import CTA from "./CTA.jsx";
import HeaderSocials from "./HeaderSocials.jsx";
// import Me from 
import {BsSunFill, BsMoonFill} from "react-icons/bs";
// src="https://media2.giphy.com/media/26u3Z5ChEO3lFSb3q/giphy.gif?cid=ecf05e47nmasi4guaidac5zza8y94lrjbpjho82uqof19bhn&rid=giphy.gif&ct=g" 

const Header = (props) => {
  const booleanLightMode = props.booleanLightMode;

  return (

    <header id="header">

      <div className="topnav-container">
        <h3 className="name-topnav">Andrea</h3>
        {/* <BsSunFill className="change-theme"/> */}
        <div className="changemode-container" onClick={props.lightMode}>
        <p className="mode-topnav" booleanLightMode={props.booleanLightMode}>
        {booleanLightMode? "Dark Mode": "Light Mode"}
        </p>
        {booleanLightMode? <BsMoonFill className="mode-topnav-icon"/>: <BsSunFill className="mode-topnav-icon"/>}
        </div>
    
      </div>

      <div className="container header-container">
        <h5>Hi there, I'm</h5>
        <h1>Andrea Tranchina</h1>
        <h5 className="text-light">Undergraduate Student and Aspiring Software Developer</h5>
        <CTA />
        <HeaderSocials className="header-socials"/>
        <div className="my-image">
        <img className="image-photo" 
        src="https://media3.giphy.com/media/XB962LhGuxsnJInW9I/200w.webp?cid=ecf05e473ed4wzb8ixz747f2obrj7gdvptaa9te5m7g1yprv&rid=200w.webp&ct=s" alt="me" />
        </div>
        <a href="#contact" className="scroll-down">Scroll Down</a>

      </div>
    </header>
  )
}

export default Header