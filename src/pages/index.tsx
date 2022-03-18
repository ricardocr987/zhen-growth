import Faq from "./Faq"
import Features from './Features';
import Roadmap from './Roadmap';
import Mission from './Mission';
import Team from './Team';
import Landing from './Landing';
require('./index.css');

const Home = () => {
  return (
    <div className="Home">
      <div className='container-landing'>
        <Landing/>
      </div>
      <div className='container-mission'>
        <Mission/>
      </div>
      <div className='container-features'>
        <Features/>
      </div>
      <div className='container-roadmap'>
        <Roadmap/>
      </div>
      <div className='container-team'>
        <Team/>
      </div>
      <div className='container-faq'>
        {<Faq/>}
      </div>
    </div>
  );
};

export default Home;