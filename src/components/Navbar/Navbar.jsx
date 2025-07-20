import React, { useState} from "react";
import styles from "./Navbar.module.css";
import menuIconWht from "../../assets/nav/menuIconWht.png";
import CloseIcon from "../../assets/nav/Close.png";

export const Navbar = () => {
    const[menuOpen, setMenuOpen] = useState(false);
    return( 
    <nav className= {styles.navbar} >
        <a className={styles.title} href="/">Portfolio</a>
        <div className= {styles.menu}>
            <img className={styles.menuBtn}
            src={menuOpen ? CloseIcon : menuIconWht}
                alt="Menu Icon"
                onClick={() => setMenuOpen(!menuOpen)}/>
    
            <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}>
                <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
                <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                <li><a href="#resume" onClick={() => setMenuOpen(false)}>Resume</a></li>
            </ul>
        </div>
    </nav>
    );
};