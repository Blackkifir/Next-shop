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
    <div className={styles.cart}>
      <Image
        src={cartImage}
        width={250}
        height={250}
        alt="not-found-image"
      />
      <div className={styles.cart_blockInfo}>
        <h4 className={styles.cart_title}>{title}</h4>
        <p className={styles.cart_name}>{cartName}</p>
        <b className={styles.cart_price}>{`${price}.00$`}</b>
      </div>
    </div>
  );
}
