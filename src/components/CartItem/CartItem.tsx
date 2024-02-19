import Image from 'next/image';
import styles from './CartItem.module.scss';
import { IPropsCatalog } from '../CatalogItem/IPropsCatalog';

export default function CartItem({
  categoryImage,
  title,
  price,
  categoryName,
}: IPropsCatalog) {
  return (
    <div className={styles.cart}>
      <Image
        src={categoryImage}
        width={250}
        height={250}
        alt="not-found-image"
      />
      <div className={styles.cart_blockInfo}>
        <h4 className={styles.cart_title}>{title}</h4>
        <p className={styles.cart_name}>{categoryName}</p>
        <b className={styles.cart_price}>{`${price}.00$`}</b>
      </div>
    </div>
  );
}
