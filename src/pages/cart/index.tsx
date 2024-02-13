import HeaderBag from '@/components/HeaderCart/HeaderBag';
import Head from 'next/head';

export default function Cart() {
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <HeaderBag />
      <main>
        <h1>Hello Cart</h1>
      </main>
    </>
  );
}
