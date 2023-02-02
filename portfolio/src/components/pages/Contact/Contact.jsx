import './contact.css';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jwc2gme', 'template_uqzl9vx', form.current, 'u25kKLm7sP1SwG7II')
    
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <div className='contact-container'>
      <div className='contact-options'>
        <article className='contact-option'>
          <i class="fa-regular fa-envelope fa-xl "></i>
          <h6>Email</h6>
          <h7>abeer.tannous23@gmail.com</h7>
          <a href="mailto:abeer.tannous23@gmial.com">Send a Message</a>
        </article>
        <article className='contact-option'>
        <i class="fa-brands fa-whatsapp fa-xl"></i>
          <h6>WhatsApp</h6>
          <h7>+12038322389</h7>
          <a href="https://api.whatsapp.com/send?phone=+12038322389">Send a Message</a>
        </article>
      </div>
    

    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder='Your Full Name' required></input>
      <input type="email" name="email" placeholder='Your Email' required></input>
      <textarea name="message" rows="10" placeholder='Your Message'></textarea>
      <button type="submit" className='form-btn'>Send Message</button>

    </form>
    </div>
  )
}

export default Contact