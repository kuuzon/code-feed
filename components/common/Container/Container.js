import styles from './Container.module.scss';

function Container(props) {
  return (
    <div className={props.codle ? styles.codle : styles.container}>
      {props.children}
    </div>
  );
}

export default Container;