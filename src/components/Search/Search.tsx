import { IoClose } from 'react-icons/io5';
import { ChangeEvent } from 'react';
import { useAppSelector } from '@/redux/hooks/actionsHook';
import { RootState } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '@/redux/slices/catalogSlice';
import styles from './Search.module.scss';

export default function Search() {
  const dispatch = useDispatch();
  const { searchValue } = useAppSelector((state: RootState) => state.catalogSlice);

  const onChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(event.target.value));
  };

  const onClickClearSearch = () => {
    dispatch(setSearchValue(''));
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchFlex}>
        <input
          value={searchValue}
          onChange={onChangeSearchValue}
          className={styles.searchFlex_inputSearch}
          type="text"
          placeholder="search by name..."
        />
        <button
          onClick={onClickClearSearch}
          className={searchValue.length === 0
            ? styles.searchFlex_hiddenClearSearch
            : styles.searchFlex_clearSearch}
          type="button"
          aria-label="clearSearch"
        >
          <IoClose className={styles.searchFlex_clearSearch_icon} />
        </button>
      </div>
    </div>
  );
}
