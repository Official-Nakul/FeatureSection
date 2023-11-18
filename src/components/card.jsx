import React from "react";
import calc from "/images/icon-calculator.svg";
import karma from "/images/icon-karma.svg";
import supervisor from "/images/icon-supervisor.svg";
import team from "/images/icon-team-builder.svg";
import styles from "./card.module.css";
const card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.firstLine}>Reliable, efficient delivery</div>
        <p className={styles.bold}>Powered by Technology</p>
        <p className={styles.txt}>
          Our Artuficial intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <div className={styles.cardContainer}>
        <div
          style={{ borderTop: "4px solid hsl(180, 62%, 55%)" }}
          className={styles.card}
        >
          <div className={styles.dataHolder}>
            <p className={styles.title}>Supervisor</p>
            <p className={styles.details}>
              Monitors activity to identify project roadblocks
            </p>
          </div>
          <img src={supervisor} alt="" />
        </div>
        <div className={styles.cardGroup}>
          <div
            style={{ borderTop: "4px solid hsl(0, 78%, 62%)" }}
            className={styles.card}
          >
            <div className={styles.dataHolder}>
              <p className={styles.title}>Team Builder</p>
              <p className={styles.details}>
                Scans our talent network to create the optimal team for your
                project
              </p>
            </div>
            <img src={team} alt="" />
          </div>
          <div
            style={{ borderTop: "4px solid hsl(34, 97%, 64%)" }}
            className={styles.card}
          >
            <div className={styles.dataHolder}>
              <p className={styles.title}>Karma</p>
              <p className={styles.details}>
                Regularly evaluates our talent to ensure quality
              </p>
            </div>
            <img src={karma} alt="" />
          </div>
        </div>
        <div
          style={{ borderTop: "4px solid hsl(212, 86%, 64%)" }}
          className={styles.card}
        >
          <div className={styles.dataHolder}>
            <p className={styles.title}>Calculator</p>
            <p className={styles.details}>
              Uses data from past projects to provide better delivery estimate
            </p>
          </div>
          <img src={calc} alt="" />
        </div>
      </div>
    </div>
  );
};

export default card;
