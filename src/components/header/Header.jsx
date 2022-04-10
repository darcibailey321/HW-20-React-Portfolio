import React from 'react'
import './header.css'
import CTA from './CTA'
import PHOTO1 from '../../assets/Photo1.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="continer header__container">
        <h1>Hello! My name is Darci Bailey</h1>
        <h5 className="text-light">I am a Fullstack Developer</h5>
        <CTA />
        <HeaderSocials/>

        <div className="me">
          <img src={PHOTO1} alt="Darci Photo" />
        </div>

        {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}

      </div>
    </header>
  )
}

export default Header