import NavigationBar from './NavigationBar';
import Footer from './Footer';
import styles from './Layout.module.scss';

function Layout(props) {
  return (
    <div className={styles.app}>
      <NavigationBar />
      <main className={styles.main}>
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
