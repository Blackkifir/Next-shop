import AllCatalogs from '@/components/AllCatalogs/AllCatalogs';
import Navigation from '@/components/NavigationHome/NavigatonHome';
import axios from 'axios';
import { IPropsAll, IPropsItems } from '@/redux/slices/interfaces/IPropsItems';

export default function Home({ items, isLoading }: IPropsAll) {
  return (
    <>
      <Navigation />
      <main>
        <AllCatalogs items={items} isLoading={isLoading} />
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
