import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Building Excellence, Designing Dreams.</h1>
        <p>
          Square &amp; Cube delivers top-notch construction and stunning interiors. 
          Your vision, our craftsmanship.
        </p>
        <a href="#contact" className="hero-btn">Get in Touch</a>
      </div>
    </section>
  );
}

export default HeroSection;