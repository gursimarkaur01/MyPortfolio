import React from 'react'
import styles from './about.module.css';
import aboutImage from '../About/about.png';


export const About = () => {
  return (
  <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img src={aboutImage} alt='about' 
        className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}><img src=" " />
                <div className={styles.aboutText}>
                    <h3><i>Education</i></h3>
                    <h4>B.Tech in Computer Science & Engineering</h4>
                    <p>GGSIPU, New Delhi (2021-2025) | CGPA: 8.5</p>
                    <p>I pursued my B.Tech from GGSIPU with a CGPA of 8.5, majoring in CSE and a minor in Full Stack Development. Throughout four years, I built strong fundamentals in various concepts of computer science, including programming, object oriented programming , web development, and software engineering—applying them in hands-on projects that reflect both academic depth and real-world relevance.</p>
                </div>
            </li>
            <li className={styles.aboutItem} ><img src=" " />
                <div className={styles.aboutText}>
                    <h3><i>Tech-Stack </i></h3>
                    <p><b>Languages:</b> C, C++, Java, Python, JavaScript<br/>
                    <b>Frontend:</b> HTML, CSS, React.js<br/>
                        <b>Backend:</b> Node.js, Express.js<br/>
                        <b>Database:</b> MySQL<br/>
                        <b>Tools: </b>Git, GitHub, Figma, Canva, VS Code<br/>
                        <b>Libraries & Platforms: </b>NumPy, Pandas, Matplotlib, Scikit-learn, Azure Fundamentals<br/>
                        </p>
                </div>
            </li>
            <li className={styles.aboutItem} ><img src=" " />
                <div className={styles.aboutText}>
                    <h3><i>Interests</i></h3>
                    <p>
                        <ul>
                            <li>Building clean, user-friendly interfaces</li>
                            <li>Solving real-world problems through code</li>
                            <li>Exploring cloud & machine learning basics</li>
                            <li>Designing layouts and wireframes</li>
                            <li>Working in fast-paced, collaborative teams</li>
                        </ul>
                    </p>
                </div>
            </li>
        </ul>
    </div>
  </section>
  );
};

