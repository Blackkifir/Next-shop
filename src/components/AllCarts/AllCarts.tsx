import { BsFillCartCheckFill } from 'react-icons/bs';
import { useAppSelector } from '@/redux/hooks/actionsHook';
import { RootState } from '@/redux/store';
import styles from './AllCarts.module.scss';
import CartItem from '../CartItem/CartItem';

export default function AllCarts() {
  const cartItems = useAppSelector((state: RootState) => state.cartSlice.cartItems);

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.title}>
        Cart
        <BsFillCartCheckFill className={styles.cartIcon} />
      </h1>
      <div className={styles.cartFlex}>
        <div className={styles.cartFlex_block}>
          <div className={styles.cartFlex_items}>
            {cartItems.length === 0
              ? <h1> &#11088; The cart is empty...</h1>
              : cartItems.map((obj) => (
                <CartItem
                  key={obj.id}
                  id={obj.id}
                  title={obj.title}
                  price={obj.price}
                  cartName={obj.category.name}
                  cartImage={obj.category.image}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
