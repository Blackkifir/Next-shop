import Image from 'next/image';
import { useAppSelector } from '@/redux/hooks/actionsHook';
import { RootState } from '@/redux/store';
import { useDispatch } from 'react-redux';

import { ICard } from '@/redux/slices/interfaces/ICatalogCards';
import { setCartCards } from '@/redux/slices/cartSlice';
import { setDisable } from '@/redux/slices/catalogSlice';
import { useState } from 'react';
import styles from './CatalogCard.module.scss';
import { ICatalogCard } from './ICatalogCard';

export default function CatalogItem({
  title,
  price,
  categoryName,
  categoryImage,
  item,
}: ICatalogCard) {
  const [isCount, setCount] = useState<number>(0);
  const dispatch = useDispatch();
  const isDisable = useAppSelector((state: RootState) => state.catalogSlice.isDisable);

  const onClickAddCart = (cart: ICard): void => {
    if (isCount < 1) {
      console.log(cart);
      setCount(+1);
      dispatch(setCartCards(cart));
    }

    if (isCount > 1) {
      dispatch(setDisable(true));
    }
  };

  return (
    <div className={styles.catalog}>
      <Image
        src={categoryImage}
        width={300}
        height={300}
        alt="not-found-image"
      />
      <div className={styles.catalog_blockInfo}>
        <h4 className={styles.catalog_title}>{title}</h4>
        <p className={styles.catalog_name}>{categoryName}</p>
        <b className={styles.catalog_price}>{`${price}.00$`}</b>
        <button
          disabled={isDisable}
          type="button"
          className={styles.catalog_addToCart}
          onClick={() => onClickAddCart(item)}
        >
          +
        </button>
      </div>
    </div>
  );
}
