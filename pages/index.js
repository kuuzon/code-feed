import axios from "axios";
import { server } from '../config'
import HeroSection from '../components/layout/Hero';
import NewsList from '../components/news/NewsList';

function Home(props) {
  return (
    <div>
      <HeroSection title={'Code Feed'} description={'Catch up on all the coding news from around the globe, at the touch of a button ...'}/>
    </div>
  );
}

export default Home;