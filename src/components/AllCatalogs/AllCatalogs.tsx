import { IPropsAll } from '@/redux/slices/interfaces/IPropsItems';
import Loader from '../Loader/Loader';
import CatalogItem from '../CatalogItem/CatalogItem';
import styles from './AllCatalogs.module.scss';

export default function AllCatalogs({ items, isLoading }: IPropsAll) {
  return (
    <div className={isLoading ? styles.productLoader : styles.productContainer}>
      {isLoading ? <Loader /> : items.map((obj) => (
        <CatalogItem
          key={obj.id}
          id={obj.id}
          item={obj}
          title={obj.title}
          price={obj.price}
          categoryName={obj.category.name}
          categoryImage={obj.category.image}
        />
      ))}
    </div>
  );
}
