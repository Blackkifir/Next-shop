import ProductCatalog from '@/components/ProductCatalog/ProductCatalog';
import Navigation from '@/components/Navigation/Navigaton';
import axios from 'axios';
import { IPropsAll, IPropsItems } from '@/redux/slices/interfaces/IPropsItems';

export default function Home({ items, isLoading }: IPropsAll) {
  return (
    <>
      <Navigation />
      <main>
        <ProductCatalog items={items} isLoading={isLoading} />
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
