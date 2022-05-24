import { Fragment } from 'react';
import Head from 'next/head';
import axios from 'axios';
import NewsDetail from "../../components/news/NewsDetail";

function NewsDetails({ newsItem }) {
  return (
    <Fragment>
      <Head>
        <title>Code-Feed | {newsItem.category}</title>
        <meta 
          name='description'
          description={newsItem.title + ': ' + newsItem.description}
        />
      </Head>
      <NewsDetail 
        image={newsItem.image}
        title={newsItem.title}
        description={newsItem.description}
        category={newsItem.category}
      />
    </Fragment>
  );
}

// STATIC SITE GENERATION (snippet: "ngsp")
export const getStaticProps = async ( context ) => {
  // Fetch Data for Single News Item 
  const response = await axios.get(`${process.env.SERVER_NAME}/api/news`);
  const loadedNews = await response.data;
  
  const newsList = loadedNews.filter((news) => news.id.toString() === context.params.newsId )

  return {
    props: {
      newsItem: newsList[0]
    },
  };
};

// STATIC SITE DYNAMIC PATHS (snippet: "ngspa")
export const getStaticPaths = async () => {
  const response = await axios.get(`${process.env.SERVER_NAME}/api/news`);
  const loadedNews = await response.data;

  const ids = loadedNews.map((news) => news.id);
  const paths = ids.map((id) => ({ params: { newsId: id.toString() }}))

  return {
      paths,
      fallback: false
  }
}

export default NewsDetails;