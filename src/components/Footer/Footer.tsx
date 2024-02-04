import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.footer_copyrigth}>Все права защищены &copy</span>
    </footer>
  );
}
