import React from 'react';
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header-socials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin /> </a> {/*blank target -> open in new tab*/}
        <a href="https://github.com/andreatranchina" target="_blank" rel="noreferrer"><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials