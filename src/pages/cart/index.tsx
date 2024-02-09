import Head from 'next/head';
import HeaderCart from '@/components/HeaderBag/HeaderCart';
import styles from './Cart.module.scss';

export default function Cart() {
  return (
    <div className={styles.cart}>
      <Head>
        <title>Cart</title>
      </Head>
      <HeaderCart />
    </div>
  );
}
