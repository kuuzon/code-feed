import axios from 'axios';
import { server } from '../../config'
import NewsDetail from "../../components/news/NewsDetail";

function NewsDetails({ newsItem }) {
  return (
    <NewsDetail 
      image={newsItem.image}
      title={newsItem.title}
      description={newsItem.description}
      category={newsItem.category}
    />
  );
}

// STATIC SITE DYNAMIC PATHS (snippet: "ngspa")
export const getStaticPaths = async () => {
  const response = await axios.get(`${server}/api/news`);
  const loadedNews = await response.data;

  const paths = loadedNews.map((news) => ({
    params: { newsId: news.id.toString() }
  }))

  return {
      paths,
      fallback: false
  }
}

// STATIC SITE GENERATION (snippet: "ngsp")
export const getStaticProps = async ( context ) => {
  // Fetch Data for Single News Item 
  const response = await axios.get(`${server}/api/news`);
  const loadedNews = await response.data;
  
  const newsList = loadedNews.filter((news) => news.id.toString() === context.params.newsId )

  return {
    props: {
      newsItem: newsList[0]
    },
  };
};

export default NewsDetails;