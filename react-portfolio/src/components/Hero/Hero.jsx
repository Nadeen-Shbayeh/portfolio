import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {

  const cvUrl = "https://drive.google.com/file/d/1u3apWolZf-FCw3iTjDmD7MQ2cBSskkXS/view?usp=sharing";
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div data-text="Hi, I'm Nadeen Shbayeh" className={styles.title}>
          Hi, I'm Nadeen Shbayeh 👋
        </div>
        <p className={styles.description}>
          A Software Engineer with a strong passion for technology and problem-solving. I have experience in developing software solutions, managing databases, and collaborating on projects that make a difference. I enjoy learning new skills, tackling challenges, and delivering high-quality results.
          <br />
          <br />
          When I’m not coding, you’ll find me exploring new technologies, mentoring others, or pursuing my interests in photography 📸, fitness 🏋️‍♀️, and traveling ✈️.
        </p>
        <a href={cvUrl} className={styles.contactBtn} target="_blank" rel="noopener noreferrer">
          View my CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/img.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

