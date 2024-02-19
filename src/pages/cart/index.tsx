import Head from 'next/head';
import AllCarts from '@/components/AllCarts/AllCarts';
import NavigationCart from '@/components/NavigationCart/NavigationCart';

export default function Cart() {
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <NavigationCart />
      <main>
        <AllCarts />
      </main>
    </>
  );
}
