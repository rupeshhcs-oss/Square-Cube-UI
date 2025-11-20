import React from 'react';
import './ServicesSection.css';

const services = [
  {
    title: "Residential Construction",
    desc: "Modern homes with durability and aesthetics in mind.",
  },
  {
    title: "Commercial Projects",
    desc: "Office and workspace development, tailored for your business.",
  },
  {
    title: "Interior Design",
    desc: "Elegant spaces created by award-winning designers.",
  },
  {
    title: "Renovation & Remodeling",
    desc: "Transform existing spaces into something extraordinary.",
  },
];

function ServicesSection() {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((s, idx) => (
          <div className="service-card" key={idx}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;