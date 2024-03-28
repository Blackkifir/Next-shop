import { IoClose } from 'react-icons/io5';
import styles from './Search.module.scss';

export default function Search() {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchFlex}>
        <input
          className={styles.searchFlex_inputSearch}
          type="text"
          placeholder="search by name..."
        />
        <button
          className={styles.searchFlex_clearSearch}
          type="button"
          aria-label="clearSearch"
        >
          <IoClose className={styles.searchFlex_clearSearch_icon} />
        </button>
      </div>
    </div>
  );
}
