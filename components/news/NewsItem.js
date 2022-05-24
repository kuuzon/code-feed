import { useRouter } from 'next/router';
import Card from '../ui/Card';
import styles from './NewsItem.module.scss';
import Image from 'next/image';

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
          props.image ? 
            <Image 
              src={props.image} 
              alt={props.title} 
              width={650}
              height={300}
              layout="intrinsic"
            /> 
          : 
            <Image 
              src={props.urlToImage} 
              alt={props.title} 
              width={650}
              height={300}
              layout="intrinsic"
            /> 
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