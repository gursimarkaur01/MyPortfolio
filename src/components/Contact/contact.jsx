import React from 'react';
import styles from './contact.module.css';

export const Contact = () => (
  <section className={styles.container} id="contact">
    <h2 className={styles.title}>Contact Me</h2>
    <p className={styles.intro}>
      I’d love to hear from you! Feel free to reach out via email or connect with me on the platforms below.
    </p>
    <div className={styles.contactMethods}>
      <a href="mailto:your.email@example.com" className={styles.contactLink} target="_blank" rel="noopener noreferrer">
        📧 Email
      </a>
      <a href="https://www.linkedin.com/in/gursimarkaursodhi/" className={styles.contactLink} target="_blank" rel="noopener noreferrer">
        💼 LinkedIn
      </a>
      <a href="https://github.com/gursimarkaur01/" className={styles.contactLink} target="_blank" rel="noopener noreferrer">
        🐙 GitHub
      </a>
    </div>
  </section>
); 