import React from "react";
import styles from './experience.module.css';
import skills from '../data/history.json';
export const Experience = () => {
    return <section id="experience" className={styles.experience}>
        <h2>Experience</h2>
        <div>
            <div> </div>
            <ul>
                <li>
                    <h3>Intern at KPMG</h3>
                    <p>Feb 2025 - June 2025</p>
                    <p>Assisted in developing internal tools and applications.</p>
                    <p>Skills: React.js, Node.js, JavaScript</p>
                </li>
                {/* Add more experience items here */}
            </ul>
        </div>
    </section>
};