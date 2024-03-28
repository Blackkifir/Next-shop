import { ICatalogCards } from '@/redux/slices/interfaces/ICatalogCards';
import Loader from '../Loader/Loader';
import CatalogCard from '../CatalogCard/CatalogCard';
import styles from './AllCatalogs.module.scss';
import Search from '../Search/Search';

export default function AllCatalogs({ items, isLoading }: ICatalogCards) {
  return (
    <div>
      <Search />
      <div className={isLoading ? styles.productLoader : styles.productContainer}>
        {isLoading ? <Loader /> : items.map((obj) => (
          <CatalogCard
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
    </div>
  );
}
