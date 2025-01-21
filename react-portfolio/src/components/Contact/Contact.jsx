import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:nadeenshbayeh@gmail.com">
            <img src={getImageUrl("contact/gmail.png")} 
            alt="Email icon" 
            />
          </a>
      
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/nadeen-shbayeh-124183222/" target="_blank" rel="noopener noreferrer">
            <img
              src={getImageUrl("contact/linkedin.png")}
              alt="LinkedIn icon"
            />
          </a>
        
        </li>
        <li className={styles.link}>
          <a href="https://github.com/Nadeen-Shbayeh" target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("contact/github.png")} 
            alt="Github icon" 
            />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.facebook.com/naden.shbayeh/" target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("contact/fb.png")} 
            alt="facebook icon" 
            />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://x.com/Nadeen_Shbayeh" target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("contact/x.png")} 
            alt="twiter icon" 
            />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.instagram.com/nadeen_shbayeh/" target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("contact/Instagram.png")} 
            alt="instagram icon" 
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};
