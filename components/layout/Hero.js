import styles from './Hero.module.scss';

function HeroSection(props) {
  return (
    <div className={styles.showcase}>
      <div className={styles.overlay}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
      
    </div>
  );
}

export default HeroSection;