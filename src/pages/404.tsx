import Link from 'next/link';
import Head from 'next/head';
import styles from './styles/pagesStyles/404.module.scss';

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>404 Not-Found</title>
      </Head>
      <div className={styles.notFound}>
        <h1 className={styles.notFound_oops}>
          Oops &#128549;
        </h1>
        <h2 className={styles.notFound_hereNot}>No such page exists!</h2>
        <p className={styles.notFound_redirectToHome}>
          Go to the
          <Link
            href="/"
            className={styles.notFound_redirectToHome}
          >
            Home-Page
          </Link>
        </p>
      </div>
    </>
  );
}
