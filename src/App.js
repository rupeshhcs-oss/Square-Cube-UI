import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-root">
      <Header />
      <main className="site-main">
        <HeroSection />
        <div className="container">
          <ServicesSection />
          <ProjectsSection />
          <AboutSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;