import React from 'react';
import styles from './skills.module.css';
import pythonImg from '../../assets/skills/Python.png';
import cppImg from '../../assets/skills/C++.png';
import htmlImg from '../../assets/skills/HTML.png';
import cssImg from '../../assets/skills/CSS.png';
import jsImg from '../../assets/skills/JS.png';
import reactImg from '../../assets/skills/React.png';
import nodeImg from '../../assets/skills/NODEJS.png';
import expressImg from '../../assets/skills/EXPRESS.png';
import githubImg from '../../assets/skills/GitHub.png';
import mysqlImg from '../../assets/skills/MYSQL.png';

const skills = [
  { title: 'Python', img: pythonImg },
  { title: 'C++', img: cppImg },
  { title: 'HTML', img: htmlImg },
  { title: 'CSS', img: cssImg },
  { title: 'JavaScript', img: jsImg },
  { title: 'React.js', img: reactImg },
  { title: 'Node.js', img: nodeImg },
  { title: 'Express.js', img: expressImg },
  { title: 'GitHub', img: githubImg },
  { title: 'SQL', img: mysqlImg },
];

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.blackBox}>
        {skills.map(skill => (
          <img
            key={skill.title}
            src={skill.img}
            alt={skill.title}
            className={styles.skillImg}
            title={skill.title}
          />
        ))}
      </div>
      <div className={styles.content}>
        {/* Add your skills content here */}
      </div>
    </section>
  );
}; 