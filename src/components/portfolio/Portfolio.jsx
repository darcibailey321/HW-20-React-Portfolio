import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio4.png'
import IMG3 from '../../assets/portfolio3.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>    
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="day planner"/>
          </div>
          <h3>Day Planner</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/dbailey321/day-planner" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="note-taker"/>
          </div>
          <h3>Note Taker</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/darcibailey321/Note-Taker" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="text-editor"/>
          </div>
          <h3>Text Editor</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/darcibailey321/19-PWA-Text-Editor" className='btn' target='_blank'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio