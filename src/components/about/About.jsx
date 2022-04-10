import React from 'react'
import './about.css'
import PHOTO1 from '../../assets/Photo1.jpg'
import {BsPersonCircle} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
     <div className="container about__container">
       <div className="about__me">
        <div className="me2">
          <img src={PHOTO1} alt="About Me Image" />
        </div>
       </div>
        <div className="about__content">
            <article className='about__card'>
              <BsPersonCircle className='about__icon'/>
              <h5>Get to Know Me</h5>
            </article>
          <p>
            I am a fan of all things autosports. I have been autocrossing with local clubs for over 12 years, winning multiple championships along the way. I also love the outdoors where I enjoy hiking, biking, and camping. I am so grateful for my family for always keep me on my toes.</p>

            <p> I have been a graphic designer for over 25 years, staring in the computerized empbroidery industry, then moving to designing custom jewelry, and lastly joining a marketing firm doing production and RFP designing. I also learned to modify css and index.js files while working there.</p>

            <p>  I am looking forward to honing my skills with code and allowing my design experience to assist in the process.
          </p>
        </div>
     </div>
     </section>
  )
}

export default About