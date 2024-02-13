import Product from '@/components/Product/Product';
import Navigation from '@/components/Navigation/Navigaton';
import axios from 'axios';
import { IPropsAll, IPropsItems } from '@/redux/slices/interfaces/IPropsItems';

export default function Home({ items, isLoading }: IPropsAll) {
  return (
    <>
      <Navigation />
      <main>
        <Product items={items} isLoading={isLoading} />
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
        isLoading: false,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        isLoading: true,
      },
    };
  }
}
