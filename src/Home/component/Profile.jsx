import { useEffect, useState } from "react";

import styles from "../styles/home.module.css";

import profile_img from "../../utils/image/profile_ian.jpg";

function Profile() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
    setIsMobileScreen(window.innerWidth <= 530);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobileScreen) {
    return (
      <div className={styles.profile}>
        <div className={`${styles.information} ${styles.small_information}`}>
          <div className={styles.name}>
            <p>{process.env.REACT_APP_NAME}</p>
          </div>
          <div className={styles.job}>
            <p>Frontend Developer</p>
          </div>

          <div className={styles.short_hr} />

          <div className={`${styles.info} ${styles.small_info}`}>
            <p className={styles.email}>{process.env.REACT_APP_EMAIL}</p>
            {!isSmallScreen && <p>·</p>}
            <p className={styles.phone}>{process.env.REACT_APP_PHONE}</p>
          </div>

          <div className={styles.urls}>
            <div className={styles.url}>
              <p>블로그: </p>
              <a href="https://blog.minjae-dev.com">blog.minjae-dev.comm</a>
            </div>

            <div className={styles.url}>
              <p>GitHub: </p>
              <a href="https://github.com/minijae011030">
                github.com/minijae011030
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.profile}>
      <div className={`${styles.information} ${styles.big_information}`}>
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

        <div className={styles.urls}>
          <div className={styles.url}>
            <p>블로그: </p>
            <a href="https://blog.minjae-dev.com">blog.minjae-dev.com</a>
          </div>

          <div className={styles.url}>
            <p>GitHub: </p>
            <a href="https://github.com/minijae011030">
              github.com/minijae011030
            </a>
          </div>
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
