import { RootState } from '@/redux/store';
import { useCallback, useEffect } from 'react';
import { fetchGetCatalogItems } from '@/redux/slices/catalogSlice';
import { useAppSelector, useThunkDispatch } from '@/redux/hooks/actionsHook';
import { debounce } from 'ts-debounce';
import Loader from '../Loader/Loader';
import CatalogCard from '../CatalogCard/CatalogCard';
import styles from './AllCatalogs.module.scss';
import Search from '../Search/Search';

export default function AllCatalogs() {
  const dispatch = useThunkDispatch();
  const { items, searchValue, isLoading } = useAppSelector((state: RootState) => state.catalogSlice);

  const debouncedSearch = useCallback(debounce((str: string) => {
    dispatch(fetchGetCatalogItems(str)).then(() => {}).catch(() => {});
  }, 2000), [dispatch]);

  useEffect(() => {
    debouncedSearch(searchValue).then(() => {}).catch(() => {});
  }, [searchValue, debouncedSearch]);

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
