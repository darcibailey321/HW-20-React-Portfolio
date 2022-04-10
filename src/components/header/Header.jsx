import React from 'react'
import './header.css'
import CTA from './CTA'
import PHOTO2 from '../../assets/Photo2.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="continer header__container">
        <h1>Darci Bailey</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials/>

        <div className="me">
          <img src={PHOTO2} alt="Darci Photo" />
        </div>

        {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}

      </div>
    </header>
  )
}

export default Header