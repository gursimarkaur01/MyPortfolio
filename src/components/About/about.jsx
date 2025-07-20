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
                    <h3>Frontend Development</h3>
                    <p>I am a Frontend Devloper who is passionate about creating visually appealing and user-friendly interfaces.</p>
                </div>
            </li>
            <li className={styles.aboutItem} ><img src=" " />
                <div className={styles.aboutText}>
                    <h3>Frontend Development</h3>
                    <p>I am a Frontend Devloper who is passionate about creating visually appealing and user-friendly interfaces.</p>
                </div>
            </li>
            <li className={styles.aboutItem} ><img src=" " />
                <div className={styles.aboutText}>
                    <h3>Frontend Development</h3>
                    <p>I am a Frontend Devloper who is passionate about creating visually appealing and user-friendly interfaces.</p>
                </div>
            </li>
        </ul>
    </div>
  </section>
  );
};

