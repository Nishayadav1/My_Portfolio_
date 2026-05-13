import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => (
  <>
    <Navbar />
    <Hero />
    <Skills />
    <Experience />
    <Projects />
    <Certifications />
    <Education />
    <Contact />
    <Footer />
  </>
);

export default Home;
