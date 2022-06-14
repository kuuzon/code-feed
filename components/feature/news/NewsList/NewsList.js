import NewsItem from '../NewsItem';
import Container from '../../../common/Container'

function NewsList(props) {
  return (
    <Container>
      {props.loadedNews.map((news) => (
        <NewsItem
          key={news.id ? news.id : news.title}
          id={news.id ? news.id : news.title}
          image={news.image}
          urlToImage={news.urlToImage}
          url={news.url}
          title={news.title}
          description={news.description}
          category={news.category}
        />
      ))}
    </Container>
  );
}

export default NewsList;
