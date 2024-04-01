import { BsFillCartCheckFill } from 'react-icons/bs';
import { FaWindowClose } from 'react-icons/fa';
import { useAppSelector } from '@/redux/hooks/actionsHook';
import { RootState } from '@/redux/store';
import { useDispatch } from 'react-redux';
import {
  loadCartState,
  setClearAllCart,
  setDeleteCard,
  setQuantityMinus,
  setQuantityPlus,
} from '@/redux/slices/cartSlice';
import { ICard } from '@/redux/slices/interfaces/ICatalogCards';
import { useEffect } from 'react';
import styles from './AllCarts.module.scss';
import CartCard from '../CartCard/CartCard';

export default function AllCarts() {
  const dispatch = useDispatch();
  const { cartCards } = useAppSelector((state: RootState) => state.cartSlice);

  useEffect(() => {
    dispatch(loadCartState());
  }, [dispatch]);

  const onClickClearAllCart = () => {
    dispatch(setClearAllCart());
  };

  const onClickDeleteCartCards = (basket: ICard) => {
    dispatch(setDeleteCard(basket.id));
  };

  const onClickCartMinus = (id: number) => {
    dispatch(setQuantityMinus(id));
  };

  const onClickCartPlus = (id: number) => {
    dispatch(setQuantityPlus(id));
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
                  id={obj.id}
                  key={obj.id}
                  title={obj.title}
                  price={obj.price}
                  card={obj}
                  cartName={obj.category.name}
                  cartImage={obj.category.image}
                  onClickDeleteCartCards={onClickDeleteCartCards}
                  onClickCartMinus={onClickCartMinus}
                  onClickCartPlus={onClickCartPlus}
                  quantity={obj.quantity}
                />
              ))}
          </div>
        </div>
        <button
          onClick={() => onClickClearAllCart()}
          className={cartCards.length === 0
            ? styles.allCartsClearBtnHidden
            : styles.allCartsClearBtn}
          type="button"
          aria-label="Clear Cart"
        >
          <FaWindowClose className={styles.allCartsClearBtn_icon} />
        </button>
      </div>
    </div>
  );
}
