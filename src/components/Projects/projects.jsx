import React from 'react';
import styles from './projects.module.css';
import project1 from './images/project1.png';
import project2 from './images/project2.png';

const projects = [
  {
    title: 'Job-Portal',
    image: project1,
    description: 'A weather forecasting app that shows real-time weather data for any city using a public API.',
    github: 'https://github.com/gursimarkaur01/job-portal', 
  },
  {
    title: 'IndiaDetours',
    image: project2,
    description: 'A simple task manager to add, edit, and delete your daily tasks. Built with React.',
    github: 'https://github.com/gursimarkaur01/IndiaDetours', 
  },
  {
    title: 'Portfolio Website',
    image: project2,
    description: 'A personal portfolio website to showcase projects, skills, and experience. Responsive and modern design.',
    github: 'https://github.com/gursimarkaur01/MyPortfolio', 
  },
  {
    title: 'Project4',
    image: project1,
    description: '',
    github: '', // Add GitHub link here later
  },
];

function handleProjectClick(github) {
  if (github) {
    window.open(github, '_blank');
  }
}

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectsList}>
        {projects.map((project, idx) => (
          <div
            className={styles.projectCard}
            key={project.title}
            onClick={() => handleProjectClick(project.github)}
            tabIndex={0}
            role="button"
            aria-label={`Open ${project.title} GitHub`}
          >
            <img src={project.image} alt={project.title} className={styles.projectImg} />
            <div className={styles.projectDesc}>
              <div className={styles.projectTitle}>{project.title}</div>
              <div>{project.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}; 