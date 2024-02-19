import HeaderBag from '@/components/HeaderCart/HeaderCart';
import ProductCart from '@/components/ProductCart/ProductCart';
import { IPropsAll, IPropsItems } from '@/redux/slices/interfaces/IPropsItems';
import axios from 'axios';
import Head from 'next/head';

export default function Cart({ items }: IPropsAll) {
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <HeaderBag />
      <main>
        <ProductCart items={items} isLoading={false} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL as string);
    return {
      props: {
        items: response.data as IPropsItems[],
      },
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}
