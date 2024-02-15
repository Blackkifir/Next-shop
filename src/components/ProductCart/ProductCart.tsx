import styles from './ProductCart.module.scss';

export default function ProductCart() {
  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.title}>Cart</h1>
      <div className={styles.cartFlex}>
        <div className={styles.cartFlex_block}>
          <div className={styles.cartFlex_items}>
            Product
          </div>
        </div>
      </div>
    </div>
  );
}
