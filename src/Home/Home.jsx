import Profile from "./component/Profile";
import Introduce from "./component/Introduce";
import Education from "./component/Education";
import HorizonLine from "./component/HorizonLIne";

function Home() {
  return (
    <div>
      <Profile />
      <Introduce />
      <HorizonLine />
      <Education />
      <HorizonLine />
    </div>
  );
}

export default Home;
