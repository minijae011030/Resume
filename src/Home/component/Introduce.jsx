import styles from "../styles/home.module.css";

function Introduce() {
  return (
    <div className={styles.introduce}>
      <div className={styles.main_comment}>
        <p>main comment: 어쩌구저쩌구 쏼라쏼라</p>
        <p>main comment: 어쩌구저쩌구 쏼라쏼라</p>
      </div>
      <div className={styles.sub_comment}>
        <p>sub comment: 어쩌구저쩌구 쏼라쏼라</p>
        <p>sub comment: 어쩌구저쩌구 쏼라쏼라</p>
        <p>sub comment: 어쩌구저쩌구 쏼라쏼라</p>
      </div>
    </div>
  );
}

export default Introduce;
