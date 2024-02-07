import Catalog from '@/components/Catalog/Catalog';
import { IPropsItems } from '@/redux/slices/interfaces/IPropsItems';
import axios from 'axios';
import styles from './styles/pagesStyles/Home.module.scss';

export default function Home({ items }: { items: IPropsItems[] }) {
  return (
    <div className={styles.homeContainer}>
      {items.length !== 0
          && items.map((obj) => (
            <Catalog
              key={obj.id}
              id={obj.id}
              title={obj.title}
              price={obj.price}
              categoryName={obj.category.name}
              categoryImage={obj.category.image}
            />
          ))}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=15');
    const data = response.data as IPropsItems[];

    return {
      props: {
        items: data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      props: {
        items: [],
      },
    };
  }
}
