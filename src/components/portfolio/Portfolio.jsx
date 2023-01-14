import React from 'react';
import "./portfolio.css";

import items from "./portfolioItems.js";


const Portfolio = () => {

// export default items;


  return (
    <section id="portfolio">
      <h5>My recent projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">

      {items.map(({id, image, title, github, demo}) => 
      {
        return(

        <article key={id} className="portfolio-item">
        
          <div className="portfolio-item-image">
          <img src={image} alt="portfolio-item" className="image"></img>
          </div>
            <h3>{title}</h3>
            <div className="portfolio-item-cta">
              <a href={github} className="link" target="_blank" rel="noreferrer">Github → </a>
              <a href={demo} className="link" target="_blank" rel="noreferrer">Website → </a>     
            </div>     
        </article>)
      })
      }

      </div>
    </section>
  )
}

export default Portfolio;