import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-title">
        <Logo />
        <span className="company-name">Square &amp; Cube</span>
      </div>
      <nav className="header-nav">
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Logo() {
  return (
    // Abstract construction/interior SVG logo
    <svg width="48" height="48" viewBox="0 0 48 48">
      <rect x="6" y="6" width="18" height="18" rx="3" fill="#f4b400" stroke="#222" strokeWidth="2" />
      <rect x="24" y="24" width="18" height="18" rx="6" fill="#4285f4" stroke="#222" strokeWidth="2" />
      <rect x="14" y="14" width="20" height="20" fill="none" stroke="#34a853" strokeWidth="2" opacity="0.7" />
    </svg>
  );
}

export default Header;