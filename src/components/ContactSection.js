import React from 'react';
import './ContactSection.css';

function ContactSection() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" name="name" required />
        <input type="email" placeholder="Your Email" name="email" required />
        <textarea placeholder="Your Message" name="message" required />
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-details">
        <p>Email: hello@squarecube.com</p>
        <p>Phone: +1 234 567 8901</p>
        <p>Location: 123 Modern Lane, Design City</p>
      </div>
    </section>
  );
}

export default ContactSection;