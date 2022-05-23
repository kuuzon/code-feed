import Link from 'next/link';
import styles from './NavigationBar.module.scss';
import { MdOutlineCodeOff } from 'react-icons/md';

function NavigationBar() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link href='/'>
          <a>
            <div className={styles.logo}>
              <MdOutlineCodeOff />
            </div>
            <span>code-feed</span>
          </a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/'>
              <a>CodeFeed</a>
            </Link>
          </li>
          <li>
            <Link href='/ausnews'>
              <a>AusFeed</a>
            </Link>
          </li>
          <li>
            <Link href='/worldnews'>
              <a>GlobeFeed</a>
            </Link>
          </li>
          <li>
            <Link href='/codle'>
              <a>Codle</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;