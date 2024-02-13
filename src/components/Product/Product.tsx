'use client';

import { IPropsAll } from '@/redux/slices/interfaces/IPropsItems';
import Loader from '../Loader/Loader';
import Catalog from '../Catalog/Catalog';
import styles from './Product.module.scss';

export default function Product({ items, isLoading }: IPropsAll) {
  return (
    <div className={isLoading ? styles.productLoader : styles.productContainer}>
      {isLoading ? <Loader /> : items.map((obj) => (
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
