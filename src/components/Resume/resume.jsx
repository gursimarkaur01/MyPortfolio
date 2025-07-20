import React from 'react';
import styles from './resume.module.css';

export const Resume = () => {
  return (
    <section className={styles.container} id="resume">
      <h2 className={styles.title}>Resume</h2>
      <div className={styles.content} style={{ width: '100%', textAlign: 'center', position: 'relative' }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: '12px' }}>
          <a
            href="/GursimarKaur_Resume.pdf"
            download
            className={styles.downloadBtn}
            style={{
              display: 'inline-block',
              padding: '10px 24px',
              background: '#0b2447',
              color: '#fff',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              marginTop: '0',
              marginBottom: '0'
            }}
          >
            Download Resume
          </a>
        </div>
        <iframe
          src="/GursimarKaur_Resume.pdf"
          width="100%"
          height="800px"
          title="Resume"
          style={{ border: 'none', borderRadius: '8px', marginBottom: '16px' }}
        />
      </div>
    </section>
  );
}; 