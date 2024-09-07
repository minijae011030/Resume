import Profile from "./component/Profile";
import Introduce from "./component/Introduce";
import Education from "./component/Education";
import Skill from "./component/Skill";

import HorizonLine from "../utils/component/HorizonLIne";
import Footer from "../utils/component/Footer";

function Home() {
  return (
    <div>
      <Profile />
      <Introduce />
      <HorizonLine />
      <Education />
      <HorizonLine />
      <Skill />
      <HorizonLine />
      <Footer />
    </div>
  );
}

export default Home;
