import React, {useState} from "react";
import Topnav from "./components/topnav/Topnav.jsx";
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";
import Experience from "./components/experience/Experience.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./app.css";

function App() {
  const [lightMode, setLightMode] = useState(false);

  function changeMode(){    
    // setTimeout(setLightMode, 150, !lightMode);
    setLightMode(!lightMode);
  }

  return(
  <body className={lightMode===true? "light-mode" : null}>
    {/* <Topnav /> */}
    <Header lightMode={changeMode} booleanLightMode={lightMode}/>
    <Nav />
    <About />
    <Experience />
    <Portfolio />
    <Contact />
    <Footer />
  </body>
    )
}

export default App;
