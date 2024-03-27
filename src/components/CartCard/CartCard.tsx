import Image from 'next/image';
import styles from './CartCard.module.scss';
import { ICartCard } from './ICartCard';

export default function CartCard({
  id,
  title,
  price,
  card,
  cartName,
  cartImage,
  onClickDeleteCartCards,
  onClickCartMinus,
  onClickCartPlus,
  quantity,
}: ICartCard) {
  return (
    <div className={styles.cartCard}>
      <button
        onClick={() => onClickDeleteCartCards(card)}
        type="button"
        className={styles.cartCard_btnDelete}
      >
        Delete
      </button>
      <div className={styles.cartCard_leftBlock}>
        <Image
          src={cartImage}
          width={250}
          height={250}
          alt="not-found-image"
        />
        <div className={styles.cartCard_blockInfo}>
          <h4 className={styles.cartCard_blockInfo_title}>{title}</h4>
          <p className={styles.cartCard_blockInfo_name}>{cartName}</p>
          <b className={styles.cartCard_blockInfo_price}>{`${price}.00$`}</b>
        </div>
      </div>
      <div className={styles.cartCard_rightBlock}>
        <div className={styles.cartCard_quantity}>
          <p className={styles.cartCard_quantity_text}>Количество</p>
          <div className={styles.cartCard_quantity_details}>
            <button
              onClick={() => onClickCartMinus(id)}
              type="button"
              className={styles.cartCard_quantity_details_minus}
            >
              -
            </button>
            <span className={styles.cartCard_quantity_details_counter}>
              {quantity}
            </span>
            <button
              onClick={() => onClickCartPlus(id)}
              type="button"
              className={styles.cartCard_quantity_details_plus}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
