import styles from "../styles/home.module.css";

function Introduce() {
  return (
    <div className={styles.introduce}>
      <div className={styles.main_comment}>
        <p>프론트엔드 개발자 지망생</p>
        <p>되고싶은 것</p>
      </div>
      <div className={styles.sub_comment}>
        <p>자기소개자기소개자기소개</p>
        <p>자기소개자기소개자기소개자기소개</p>
        <p>자기소개자기소개</p>
      </div>
    </div>
  );
}

export default Introduce;
