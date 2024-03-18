import AllCatalogs from '@/components/AllCatalogs/AllCatalogs';
import NavigationHome from '@/components/NavigationHome/NavigatonHome';
import axios from 'axios';
import { ICatalogCards, ICard } from '@/redux/slices/interfaces/ICatalogCards';

export default function Home({ items, isLoading }: ICatalogCards) {
  return (
    <>
      <NavigationHome />
      <main>
        <AllCatalogs
          items={items}
          isLoading={isLoading}
          isDisable={false}
        />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL as string);
    return {
      props: {
        items: response.data as ICard[],
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
