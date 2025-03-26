import React, {useState} from 'react'
import styles from './Navbar.module.css'
import { getImageUrl } from '../../utils'

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            {/* Navbar-left */}
            <a href="/" className={styles.title}>
                <img className={styles.logo} src={getImageUrl("ptumLogo.png")} alt="Logo" />
                <span>Peter Tumali</span>
            </a>

            {/* Navbar-right */}
            <div className={styles.menu}>
                {/* Navbar Logo */}
                <img 
                    className={styles.menuBtn} 
                    src={menuOpen ? getImageUrl("closeIcon.svg") : getImageUrl("menuIcon.svg")} 
                    alt="Menu-Button" 
                    onClick = {() => setMenuOpen(!menuOpen)}
                />

                {/* Buttons */}
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick = {() => setMenuOpen(false)}
                >
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1inkloZr5CJamZr65FIh80mlZSInQmFCh/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
