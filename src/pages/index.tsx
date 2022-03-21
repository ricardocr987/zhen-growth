import Faq from "./Faq"
import Features from './Features';
import Roadmap from './Roadmap';
import Mission from './Mission';
import Team from './Team';
import Landing from './Landing';


const Home = () => {
  return (
    <>
      <Landing/>
      <Mission/>
      <Features/>
      <Roadmap/>
      <Team/>
      <Faq/>
    </>
  );
};

export default Home;