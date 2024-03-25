import Image from 'next/image';
import { useState } from 'react';
import styles from './CartCard.module.scss';
import { ICartCard } from './ICartCard';

export default function CartCard({
  title,
  price,
  card,
  cartName,
  cartImage,
  onClickDeleteCartCards,
}: ICartCard) {
  const [isQuantity, setQuantity] = useState<number>(1);

  const onClickCartMinus = () => {
    if (isQuantity > 1) {
      setQuantity(isQuantity - 1);
    }
  };

  const onClickCartPlus = () => {
    if (isQuantity < 10) {
      setQuantity(isQuantity + 1);
    }
  };

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
              onClick={onClickCartMinus}
              type="button"
              className={styles.cartCard_quantity_details_minus}
            >
              -
            </button>
            <span className={styles.cartCard_quantity_details_counter}>
              {isQuantity}
            </span>
            <button
              onClick={onClickCartPlus}
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
