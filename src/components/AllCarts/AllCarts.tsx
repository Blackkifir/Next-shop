import { BsFillCartCheckFill } from 'react-icons/bs';
import styles from './AllCarts.module.scss';

export default function AllCarts() {
  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.title}>
        Cart
        <BsFillCartCheckFill className={styles.cartIcon} />
      </h1>
      <div className={styles.cartFlex}>
        <div className={styles.cartFlex_block}>
          <div className={styles.cartFlex_items}>
            <h1>not foudn your products...</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
