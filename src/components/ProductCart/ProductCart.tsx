import { BsFillCartCheckFill } from 'react-icons/bs';
import { IPropsAll } from '@/redux/slices/interfaces/IPropsItems';
import styles from './ProductCart.module.scss';
import ProductCartItems from '../ProductCartItems/ProductCartItems';

export default function ProductCart({ items }: IPropsAll) {
  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.title}>
        Cart
        <BsFillCartCheckFill className={styles.cartIcon} />
      </h1>
      <div className={styles.cartFlex}>
        <div className={styles.cartFlex_block}>
          <div className={styles.cartFlex_items}>
            {items.map((obj) => (
              <ProductCartItems
                key={obj.id}
                id={obj.id}
                title={obj.title}
                price={obj.price}
                categoryName={obj.category.name}
                categoryImage={obj.category.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
