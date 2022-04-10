import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsBehance} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/darci-bailey-0a64a396/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/darcibailey321" target="_blank"><BsGithub/></a>
        <a href="https://behance.net/darcibailey" target="_blank"><BsBehance/></a>
    </div>
  )
}

export default HeaderSocials