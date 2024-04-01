import Link from 'next/link';
import { FaShoppingBag } from 'react-icons/fa';
import styles from './NavigationHome.module.scss';

export default function NavigationHome() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <span className={styles.logo}>
          Always Stylish
        </span>
        <ul className={styles.navigation_list}>
          <Link href="/cart">
            <FaShoppingBag
              className={styles.navigation_list_cart}
            />
          </Link>
          <li className={styles.navigation_list_item}><Link href="/">Про нас</Link></li>
          <li className={styles.navigation_list_item}><Link href="/">Контакты</Link></li>
          <li className={styles.navigation_list_item}><Link href="/">Кабинет</Link></li>
        </ul>
      </nav>
      <div className={styles.presentation} />
    </header>
  );
}
