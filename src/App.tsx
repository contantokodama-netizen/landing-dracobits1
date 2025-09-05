import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

// Lazy load AOS only when needed
const loadAOS = async () => {
  const AOS = await import('aos');
  await import('aos/dist/aos.css');
  return AOS.default;
};

function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    // Initialize AOS with better performance
    const initAOS = async () => {
      try {
        const AOS = await loadAOS();
        AOS.init({ 
          once: true, 
          duration: 400, 
          easing: 'ease-out',
          disable: 'mobile',
          offset: 50,
          delay: 0
        });
      } catch (error) {
        console.warn('AOS failed to load:', error);
      }
    };

    initAOS();

    // Optimized Intersection Observer
    const sections = document.querySelectorAll('main[id], section[id]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          if (window.location.hash !== '#' + entry.target.id) {
            window.history.replaceState(null, '', '#' + entry.target.id);
          }
        }
      });
    }, { 
      threshold: 0.3,
      rootMargin: '-20% 0px -20% 0px'
    });

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(section);
      if (window.location.hash !== '#' + section) {
        window.history.replaceState(null, '', '#' + section);
      }
    }
  };

  return (
    <div>
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;