import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaTelegramPlane} from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
            <div className="contact__options">
                <article className="contact__option">
                    <MdOutlineEmail className='contact__option-icon' />
                    <h4>Email</h4>
                    <h5>seah11chloe@gmail.com</h5>
                    <a href="mailto:seah11chloe@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
                </article>
                <article className="contact__option">
                    <FaTelegramPlane className='contact__option-icon' />
                    <h4>Telegram</h4>
                    <h5>@chloe_syy</h5>
                    <a href="https://t.me/chloe_syy" target="_blank" rel="noreferrer">Send a message</a>
                </article>
            </div>
            {/* <form action="">
                <input type="text"  name='name' placeholder='Your Full Name' required />
                <input type="email" name='email' placeholder='Your Email' required />
                <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form> */}
        </div>
    </section>
  )
}

export default Contact