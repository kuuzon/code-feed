import { useEffect, useState } from 'react';
import axios from "axios";
import HeroSection from "../components/layout/Hero";
import NewsList from '../components/news/NewsList';
import AlertBar from '../components/ui/AlertBar';

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
    <div>
      <HeroSection title={'Global News Feed'} description={'Catch up on all the global news via BBC News'}/>
      <NewsList loadedNews={loadedNews} />
    </div>
  );
}

export default WorldNews;