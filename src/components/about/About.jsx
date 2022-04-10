import React from 'react'
import './about.css'
import PHOTO1 from '../../assets/Photo1.jpg'
import {RiAwardFill} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
     <h5>Get to Know</h5>
     <h2>Me</h2>

     <div className="container about__container">
       <div className="about__me">
        <div className="about__me-image">
          <img src={PHOTO1} alt="About Me Image" />
        </div>
       </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              {/* <RiAwardFill className='about__icon'/> */}
              <h5>Wife, Mom, and Grandma</h5>
              <small>Also Working Hard to Become a Full Stack Developer</small>
            </article>
          </div>
          <p>
            I am a hard-core fan of all things autosports. I have been autocrossing with local clubs for over 12 years, winning multiple championships along the way. I also love the outdoors where I enjoy hiking, biking, and camping. My one true love is my family who keeps me on my toes.
          </p>
          <a href='#contact' className='btn btn-primary'>Contact Me</a>
        </div>

     </div>
     </section>
  )
}

export default About