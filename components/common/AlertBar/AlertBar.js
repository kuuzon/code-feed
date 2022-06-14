import styles from './AlertBar.module.scss';

const AlertBar = ({ text }) => {
  return (
    <div className={styles.border}>
      <p>{text}</p>
    </div>
  )
}

export default AlertBar