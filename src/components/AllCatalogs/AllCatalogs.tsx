import { IPropsAll, IPropsItems } from '@/redux/slices/interfaces/IPropsItems';
import { setCartItems } from '@/redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import Loader from '../Loader/Loader';
import CatalogItem from '../CatalogItem/CatalogItem';
import styles from './AllCatalogs.module.scss';

export default function AllCatalogs({ items, isLoading }: IPropsAll) {
  const dispatch = useDispatch();

  const onClickAddCart = (cart: IPropsItems): void => {
    dispatch(setCartItems(cart));
  };

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
          onClickAddCart={onClickAddCart}
        />
      ))}
    </div>
  );
}
