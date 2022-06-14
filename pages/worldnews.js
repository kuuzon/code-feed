import { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import axios from "axios";
import Hero from '../components/layout/Hero';
import NewsList from '../components/feature/news/NewsList';
import AlertBar from '../components/common/AlertBar';

function WorldNews() {
  const [loadedNews, setLoadedNews] = useState([]);
  const [error, setError] = useState("");

  // Fetch News Function
  async function fetchNews() {
    try {
      // External API Request: NewsAPI (BBC News)
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`);
      const data = await response.data.articles
      setLoadedNews(data);

    } catch(error) {
      setError("Internal Server Error: Cannot Retrieve BBC News Data - please try again later"); 
    }
  }

  // SideEffect on Load
  useEffect(() => {
    fetchNews();
  }, [])

  if (error) {
    return (
      <div>
        <AlertBar text={error}/>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>Code-Feed | GlobeFeed</title>
        <meta 
          name='description'
          description='Browse all the global news of today via BBC News UK'
        />
      </Head>
      <Hero title={'Global News Feed'} description={'Catch up on all the global news via BBC News'}/>
      <NewsList loadedNews={loadedNews} />
    </Fragment>
  );
}

export default WorldNews;