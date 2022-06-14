import { Fragment } from 'react';
import Head from 'next/head';
import axios from "axios";
import Hero from '../components/layout/Hero';
import NewsList from '../components/feature/news/NewsList';

function AusNews(props) {
  return (
    <Fragment>
      <Head>
        <title>Code-Feed | AusFeed</title>
        <meta 
          name='description'
          description='Browse all the Australian news of today via ABC News AU'
        />
      </Head>
      <Hero title={'AUS News Feed'} description={'Catch up on all Australian News via ABC News'}/>
      <NewsList loadedNews={props.worldNews} />
    </Fragment>
  );
}

// SERVER SIDE GENERATION (snippet: "ngss")
export const getServerSideProps = async () => {
  // External API Request: NewsAPI (ABC News AU)
  const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=abc-news-au&apiKey=${process.env.NEWS_API_KEY}`);
  const data = response.data.articles

  // Returned data as props
  return {
    props: {
      worldNews: data
    },
  };
};

export default AusNews;