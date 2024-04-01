import Link from 'next/link';
import styles from './NavigationCart.module.scss';

export default function NavigationCart() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link href="/" className={styles.logo}>Always Stylish</Link>
      </nav>
    </header>
  );
}
