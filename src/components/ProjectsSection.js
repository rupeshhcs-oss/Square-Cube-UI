import React from 'react';
import './ProjectsSection.css';

const projects = [
  { name: "Green Villa", type: "Residential", img: "https://images.unsplash.com/photo-1560184897-6b1ab7887bad?auto=format&fit=crop&w=400&q=80" },
  { name: "Cube Workspace", type: "Commercial", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" },
  { name: "Urban Apartment", type: "Interior", img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80" },
];

function ProjectsSection() {
  return (
    <section className="projects" id="projects">
      <h2>Recent Projects</h2>
      <div className="projects-list">
        {projects.map((p, idx) => (
          <div className="project-card" key={idx}>
            <img src={p.img} alt={p.name} />
            <div className="project-info">
              <h3>{p.name}</h3>
              <span>{p.type}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;