import { RootState } from '@/redux/store';
import { useCallback, useEffect } from 'react';
import { fetchGetCatalogItems } from '@/redux/slices/catalogSlice';
import { useAppSelector, useThunkDispatch } from '@/redux/hooks/actionsHook';
import { debounce } from 'ts-debounce';

import { useDispatch } from 'react-redux';
import { setCartCards } from '@/redux/slices/cartSlice';
import { ICard } from '@/redux/slices/interfaces/ICatalogCards';
import Loader from '../Loader/Loader';
import CatalogCard from '../CatalogCard/CatalogCard';
import styles from './AllCatalogs.module.scss';
import Search from '../Search/Search';

export default function AllCatalogs() {
  const dispatchThunk = useThunkDispatch();
  const dispatch = useDispatch();
  const { items, searchValue, isLoading } = useAppSelector((state: RootState) => state.catalogSlice);

  const debouncedSearch = useCallback(debounce((str: string) => {
    if (items.length === 0 || searchValue) {
      dispatchThunk(fetchGetCatalogItems(str)).then(() => {}).catch(() => {});
    }
  }, 1250), [dispatch]);

  useEffect(() => {
    debouncedSearch(searchValue).then(() => {}).catch(() => {});
  }, [searchValue, debouncedSearch]);

  const onClickAddCart = (cart: ICard): void => {
    dispatch(setCartCards(cart));
  };

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
            onClickAddCart={onClickAddCart}
          />
        ))}
      </div>
    </div>
  );
}
