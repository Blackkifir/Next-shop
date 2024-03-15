import Image from 'next/image';
import styles from './CartItem.module.scss';
import { IPropsCart } from './IPropsCart';

export default function CartItem({
  title,
  price,
  cartName,
  cartImage,
}: IPropsCart) {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItem_leftBlock}>
        <Image
          src={cartImage}
          width={250}
          height={250}
          alt="not-found-image"
        />
        <div className={styles.cartItem_blockInfo}>
          <h4 className={styles.cartItem_blockInfo_title}>{title}</h4>
          <p className={styles.cartItem_blockInfo_name}>{cartName}</p>
          <b className={styles.cartItem_blockInfo_price}>{`${price}.00$`}</b>
        </div>
      </div>
      <div className={styles.cartItem_rightBlock}>
        <div className={styles.cartItem_quantity}>
          <p className={styles.cartItem_quantity_text}>Количество</p>
          <div className={styles.cartItem_quantity_details}>
            <button
              type="button"
              className={styles.cartItem_quantity_details_minus}
            >
              -
            </button>
            <span className={styles.cartItem_quantity_details_counter}>1</span>
            <button
              type="button"
              className={styles.cartItem_quantity_details_plus}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
