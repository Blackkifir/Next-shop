import Link from 'next/link';
import styles from './HeaderBag.module.scss';

export default function HeaderBag() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <span className={styles.logo}>Always Stylish</span>
        <ul className={styles.navigation_list}>
          <li className={styles.navigation_list_item}><Link href="/">Про нас</Link></li>
          <li className={styles.navigation_list_item}><Link href="/">Контакты</Link></li>
          <li className={styles.navigation_list_item}><Link href="/">Кабинет</Link></li>
        </ul>
      </nav>
    </header>
  );
}
