import Image from 'next/image';
import { IPropsCatalog } from './interfaces/IPropsCatalogItem';
import styles from './Catalog.module.scss';

export default function Catalog({
  title,
  price,
  categoryName,
  categoryImage,
}: IPropsCatalog) {
  return (
    <div className={styles.catalog}>
      <Image
        src={categoryImage}
        width={300}
        height={300}
        alt="not-found-image"
      />
      <div className={styles.catalog_blockInfo}>
        <h2 className={styles.catalog_title}>{title}</h2>
        <p className={styles.catalog_name}>{categoryName}</p>
        <b className={styles.catalog_price}>{`${price}.00$`}</b>
        <button type="button" className={styles.catalog_addToCart}>+</button>
      </div>
    </div>
  );
}
