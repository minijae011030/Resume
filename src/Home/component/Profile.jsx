import { useEffect, useState } from "react";

import styles from "../styles/home.module.css";

import profile_img from "../../asset/profile_ian.jpg";

function Profile() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.profile}>
      <div className={styles.information}>
        <div className={styles.name}>
          <p>{process.env.REACT_APP_NAME}</p>
        </div>
        <div className={styles.job}>
          <p>Frontend Developer</p>
        </div>
        <div className={styles.short_hr} />
        <div
          className={
            isSmallScreen
              ? `${styles.info} ${styles.small_info}`
              : `${styles.info} ${styles.big_info}`
          }
        >
          <p className={styles.email}>{process.env.REACT_APP_EMAIL}</p>
          {!isSmallScreen && <p>·</p>}
          <p className={styles.phone}>{process.env.REACT_APP_PHONE}</p>
        </div>
      </div>
      <div
        className={
          isSmallScreen
            ? `${styles.profile_img} ${styles.small_img}`
            : `${styles.profile_img} ${styles.big_img}`
        }
      >
        <img src={profile_img} alt="profile_img" />
      </div>
    </div>
  );
}

export default Profile;
