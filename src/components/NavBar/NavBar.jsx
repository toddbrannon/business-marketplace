import React from 'react';
import styles from './Navbar.module.css';
import { RxCaretDown } from 'react-icons/rx';


const Navbar = ({ handleContentChange }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        Brand
      </div>
      <ul className={styles.navLinks}>
        <li className={styles.navLink}>
          <a href="#" onMouseEnter={() => handleContentChange('How It Works')} onMouseLeave={() => handleContentChange('TopRow')}>How it works</a>
          <RxCaretDown className={styles.reactIconSpin}/>
        </li>
        <li className={styles.navLink}>
          <a href="#" onMouseEnter={() => handleContentChange('Sellers')} onMouseLeave={() => handleContentChange('TopRow')}>Sellers</a>
          <RxCaretDown className={styles.reactIconSpin}/>
        </li>
        <li className={styles.navLink}>
          <a href="#" onMouseEnter={() => handleContentChange('Buyers')} onMouseLeave={() => handleContentChange('TopRow')}>Buyers</a>
          <RxCaretDown className={styles.reactIconSpin}/>
        </li>
      </ul>
      <div className={styles.auth}>
        <ul className={styles.navLinks}>
          <li className={styles.navLink}>
          <a href="#" className={styles.loginLink}>Log In</a>
          </li>
          <li className={styles.navLink}>
          <a href="#" className={styles.joinLink}>Join Now</a>
          </li>
        </ul>



        
        
      </div>
    </nav>
  );
};

export default Navbar;
