import { useState } from 'react';
import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Hero } from './components/Hero/hero.jsx';
import { About } from './components/About/about.jsx';
import { Skills } from './components/Skills/skills.jsx';
import { Projects } from './components/Projects/projects.jsx';
import { Contact } from './components/Contact/contact.jsx';
import { Resume } from './components/Resume/resume.jsx';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Resume />
      
    </div>
  );
}

export default App;
