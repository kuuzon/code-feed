import { Fragment } from 'react';
import Head from 'next/head';
import axios from "axios";
// import { server } from '../config'
import HeroSection from '../components/layout/Hero';
import NewsList from '../components/news/NewsList';

function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>Code-Feed | Home</title>
        <meta 
          name='description'
          description='Browse all the coding news of today from around the globe'
        />
      </Head>
      <HeroSection title={'Code Feed'} description={'Catch up on all the coding news from around the globe, at the touch of a button ...'}/>
      <NewsList loadedNews={props.news} />
    </Fragment>
  );
}

// STATIC SITE GENERATION (snippet: "ngsp")
export const getStaticProps = async () => {
  // Fetch data from Internal API ("Code News")
  // const response = await axios.get(`${server}/api/news`);
  const response = await axios.get(`${process.env.SERVER_NAME}/api/news`);
  const data = await response.data

  // Returned data as props & ISR functionality
  return {
    props: {
      news: data
    },
    revalidate: 60
  };
};

export default Home;