import { useRouter } from 'next/router';
import Card from '../ui/Card';
import styles from './NewsItem.module.scss';

function NewsItem(props) {
  // Programmatic Navigation
  const router = useRouter();
  
  function handleNavigate() {
    router.push('/' + props.id);
  }

  return (
    <Card>
      <div className={styles.image}>
        { 
          props.image ? <img src={props.image} alt={props.title} /> 
          : <img src={props.urlToImage} alt={props.title} /> 
        }
      </div>
      <div className={styles.content}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className={styles.actions}>
        {
          props.image ? <button onClick={handleNavigate}>Show Details</button> 
          : <button><a href={props.url} target="_blank" rel="noreferrer">Link to Article</a></button>
        }
      </div>
    </Card>
  );
}

export default NewsItem;