import React from 'react'
import styles from "./hero.module.css";
import ProfilePhoto from "./ProfilePhoto.jpg";


export const Hero = () => {
  return(
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className= {styles.title}> Hi, I am Gursimar Kaur Sodhi</h1>
        <p className= {styles.description}> 
          Welcome to my portfolio website! 
          I’m Gursimar, a Computer Science graduate who loves building things that work. Feel free to reach out on LinkedIn or drop me an email if you want to connect or collaborate. 
        </p>

        <a href = "mailto: gursimarkaur.sodhi@gmail.com " className={styles.contactme} id='contact'>
          <button className={styles.contactbtn}>Contact Me</button>
        </a>
      </div>
      <div className={styles.imageWrapper}>
        <img src = {ProfilePhoto} className={styles.profilePhoto} alt="Gursimar Kaur Sodhi"/>
      </div>
    </section>
  );
};
