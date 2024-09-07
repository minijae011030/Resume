import styles from "../styles/home.module.css";

function Button({ text, background_color }) {
  return (
    <div className={styles.button}>
      <p>{text}</p>
    </div>
  );
}

function Skill() {
  return (
    <div className={styles.section}>
      <div className={styles.title}>
        <p>기술 스택</p>
      </div>
      <div className={styles.contents}>
        <div className={styles.skill}>
          <Button text="JavaScript" />
          <Button text="HTML" />
          <Button text="CSS" />
          <Button text="React" />
          <Button text="ReactNative" />
          <Button text="Recoil" />
          <Button text="Figma" />

          <Button text="Git" />
          <Button text="GitHub" />
        </div>
      </div>
    </div>
  );
}

export default Skill;
