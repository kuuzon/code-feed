import Card from "../ui/Card";
import Link from "next/link";
import styles from './NewsDetail.module.scss';

function NewsDetail(props) {
  return (
    <div className={styles.border}>
      <Card>
        <div className={styles.detail}>
          <img 
            src={props.image} 
            alt={props.title}
          />
          <div className={styles.main}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </div>
        </div>
        <div className={styles.actions}>
          <Link href="/">
            <a className={styles.button}>Back to Home</a>
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default NewsDetail;