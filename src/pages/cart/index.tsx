import { IPropsAll, IPropsItems } from '@/redux/slices/interfaces/IPropsItems';
import axios from 'axios';
import Head from 'next/head';
import AllCarts from '@/components/AllCarts/AllCarts';
import NavigationCart from '@/components/NavigationCart/NavigationCart';

export default function Cart({ items }: IPropsAll) {
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <NavigationCart />
      <main>
        <AllCarts items={items} isLoading={false} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=20');
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
