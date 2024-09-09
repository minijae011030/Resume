import styles from "../styles/home.module.css";

function Introduce() {
  return (
    <div className={styles.introduce}>
      <div className={styles.main_comment}>
        <p>주니어 프론트엔드 개발자</p>
      </div>
      <div className={styles.sub_comment}>
        <p>
          사용자 경험과 인터페이스 디자인에 대한 깊은 관심으로 프론트엔드
          개발자가 되기를 희망하는 강민재입니다.
        </p>
        <p>
          저는 항상 사용자에게 최적의 경험을 제공하기 위해 UI/UX를 중시하며,
          코드의 가독성과 효율성을 위한 리팩토링을 중요하게 생각합니다. 팀을
          조직하고 이끌어가는 것에 즐거움을 느끼며, 협업과 소통을 통해 더 나은
          결과물을 만들어내는 것을 목표로 하고 있습니다.
        </p>
        <p>
          저는 이러한 가치를 바탕으로 사용자에게 최적의 경험을 제공하는 웹/앱
          애플리케이션을 개발하고, 끊임없이 발전하는 프론트엔드 기술을 탐구해
          나가고자 합니다.
        </p>
      </div>
    </div>
  );
}

export default Introduce;
