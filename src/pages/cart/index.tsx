import HeaderBag from '@/components/HeaderCart/HeaderCart';
import ProductCart from '@/components/ProductCart/ProductCart';
import Head from 'next/head';

export default function Cart() {
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <HeaderBag />
      <main>
        <ProductCart />
      </main>
    </>
  );
}
