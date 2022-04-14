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
          <AiOutlineMail className='contact_option-icon' />
          <h4>Email</h4>
          <h5>darcibailey@gmail.com</h5>
          <br></br>
          <a href='mailto:darcibailey@gmail.com'target="blank">Send an Email</a>
        </article>
      </div>
      <form actions="">
        <input type="text" name='name' placeholder='Full Name' required />
        <input type="email" name='email' placeholder='Email' required />
        <textarea name='message' placeholder='Your Message' required ></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default contact