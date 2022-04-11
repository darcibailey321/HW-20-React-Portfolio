import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai' 

const contact = () => {
  return (
    <section id='contact'>
    <h5>Contact Me</h5>

    <div className="container contact__container">
      <div className="contact__options">
        <article className='contact__option'>
          <AiOutlineMail />
          <h4>Email</h4>
          <h5>darcibailey@gmail.com</h5>
          <br></br>
          <a href='mailto:darcibailey@gmail.com'>Send a Message</a>
        </article>
      </div>
    </div>
    </section>
  )
}

export default contact