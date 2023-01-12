import React, {useState} from 'react';
import "./nav.css";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import { BiBriefcaseAlt } from 'react-icons/bi';
import {BiMessageSquareDetail} from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#header");


  return (
    <nav>
      <a href="#header" 
      className={activeNav === "#header"? "active" : null}
      onClick = {() => setActiveNav("#header")}
      >
      <AiOutlineHome /></a>
      
      <a href="#about" 
      onClick={() => setActiveNav("#about")}
      className={activeNav === "#about"? "active" : null}>      
      <AiOutlineUser /></a>      
      
      <a href="#experience"
      onClick={() => setActiveNav("#experience")}
      className={activeNav === "#experience"? "active" : null}
      ><BiBook /></a>
      
      <a href="#portfolio"
      onClick={() => setActiveNav("#portfolio")}
      className={activeNav === "#portfolio"? "active" : null}
      ><BiBriefcaseAlt /></a>

      <a href="#contact"
      onClick={() => setActiveNav("#contact")}
      className={activeNav === "#contact"? "active": null}
      ><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav