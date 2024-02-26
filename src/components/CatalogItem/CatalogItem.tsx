import Image from 'next/image';
import { IPropsCatalog } from './IPropsCatalog';
import styles from './CatalogItem.module.scss';

export default function CatalogItem({
  title,
  price,
  categoryName,
  categoryImage,
  item,
  onClickAddCart,
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
        <h4 className={styles.catalog_title}>{title}</h4>
        <p className={styles.catalog_name}>{categoryName}</p>
        <b className={styles.catalog_price}>{`${price}.00$`}</b>
        <button
          type="button"
          className={styles.catalog_addToCart}
          onClick={() => onClickAddCart(item)}
        >
          +
        </button>
      </div>
    </div>
  );
}
