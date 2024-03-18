import { BsFillCartCheckFill } from 'react-icons/bs';
import { FaWindowClose } from 'react-icons/fa';
import { useAppSelector } from '@/redux/hooks/actionsHook';
import { RootState } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { setClearAllCart } from '@/redux/slices/cartSlice';
import styles from './AllCarts.module.scss';
import CartCard from '../CartCard/CartCard';

export default function AllCarts() {
  const dispatch = useDispatch();
  const { cartCards } = useAppSelector((state: RootState) => state.cartSlice);

  const onClickClearAllCart = () => {
    dispatch(setClearAllCart());
  };

  return (
    <div className={styles.allCartsContainer}>
      <h1 className={styles.allCartsTitle}>
        Cart
        <BsFillCartCheckFill className={styles.allCartsIcon} />
      </h1>
      <div className={styles.allCartsFlex}>
        <div className={styles.cartFlex_block}>
          <div>
            {cartCards.length === 0
              ? <h1> &#11088; The cart is empty...</h1>
              : cartCards.map((obj) => (
                <CartCard
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
        <button
          onClick={() => onClickClearAllCart()}
          className={styles.allCartsClearBtn}
          type="button"
          aria-label="Clear Cart"
        >
          <FaWindowClose className={styles.allCartsClearBtn_icon} />
        </button>
      </div>
    </div>
  );
}
