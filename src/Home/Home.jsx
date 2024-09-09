import styles from "./styles/home.module.css";

import Profile from "./component/Profile";
import Introduce from "./component/Introduce";
import Education from "./component/Education";
import Skill from "./component/Skill";

import HorizonLine from "../utils/component/HorizonLine";
import Footer from "../utils/component/Footer";
import Project from "./component/Project";

function Home() {
  return (
    <div className={styles.home}>
      <Profile />
      <Introduce />
      <HorizonLine />
      <Skill />
      <HorizonLine />
      <Project />
      <HorizonLine />
      <Education />

      <Footer />
    </div>
  );
}

export default Home;
