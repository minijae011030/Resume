import styles from "../styles/home.module.css";

function Project() {
  return (
    <div className={styles.section}>
      <div className={styles.title}>
        <p>프로젝트</p>
      </div>
      <div className={styles.contents}>
        <div className={styles.project}></div>
      </div>
    </div>
  );
}

export default Project;
