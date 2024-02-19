import Image from 'next/image';
import styles from './ProductCartItems.module.scss';
import { IPropsCatalog } from '../Catalog/IPropsCatalogItem';

export default function ProductCartItems({
  categoryImage,
  title,
  price,
  categoryName,
}: IPropsCatalog) {
  return (
    <div className={styles.cartItems}>
      <Image
        src={categoryImage}
        width={300}
        height={300}
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
