import styles from "../styles/home.module.css";

function Education() {
  return (
    <div className={styles.section}>
      <div className={styles.title}>
        <p>학력</p>
      </div>
      <div className={styles.vr} />
      <div className={styles.contents}>
        <div className={styles.education}>
          <div className={styles.university}>
            <p className={styles.name}>세종대학교</p>
            <p className={styles.duration}>2020.03 - 2025.02</p>
          </div>
          <p className={styles.major}>
            호텔관광대학 외식경영학과 {"("}주{")"}
          </p>
          <p className={styles.major}>
            컴퓨터공학과 {"("}복수{")"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
