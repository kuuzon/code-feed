import Card from "../ui/Card";
import Link from "next/link";
import styles from './NewsDetail.module.scss';
import Image from 'next/image'

function NewsDetail(props) {
  return (
    <div className={styles.border}>
      <Card>
        <div className={styles.detail}>
          <Image 
            src={props.image} 
            alt={props.title}
            width={650}
            height={500}
            layout="intrinsic"
            priority={true}
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