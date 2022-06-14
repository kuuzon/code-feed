import styles from './Button.module.scss';
import Link from 'next/link';

function Button(props) {
  return (
    <Link href={props.href}>    
      <a 
        className={props.wordle ? styles.gamebutton : styles.button} 
        target={props.target ? props.target : null }
        rel={props.rel ? props.rel : null }
      >
        {props.children}
      </a>
    </Link>
  );
}

export default Button;