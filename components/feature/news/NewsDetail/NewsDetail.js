import Link from "next/link";
import Image from 'next/image'
import Card from '../../../common/Card';
import Button from '../../../common/Button';
import styles from './NewsDetail.module.scss';

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
          <Button href="/">Back to Home</Button>
        </div>
      </Card>
    </div>
  );
}

export default NewsDetail;