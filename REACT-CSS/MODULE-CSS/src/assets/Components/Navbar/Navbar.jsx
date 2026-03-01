import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <h2>DevSite</h2>
      </div>

      {/* Links */}
      <ul className="navbar-links">
        <li className={styles.btn}><a href="/">Home</a></li>
        <li className={styles.btn}><a href="/about">About</a></li>
        <li className={styles.btn}><a href="/services">Services</a></li>
        <li className={styles.btn}><a href="/projects">Projects</a></li>
        <li className={styles.btn}><a href="/contact">Contact</a></li>
      </ul>

      {/* Button */}
      <div className="navbar-btn">
        <button className={styles.btn}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
