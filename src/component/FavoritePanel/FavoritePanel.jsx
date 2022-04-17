import React from 'react';
import FavoriteCard from '../Card/FavoriteCard/FavoriteCard';
import styles from './FavoritePanel.module.css'
import SortButton from '../Buttons/SortButton/SortButton';

const FavoritePanel = ({favorite, params, removeFavorite}) => {
  
    return (
      <div className={styles.wrapper}>
            <div className={styles.favorite}>
              <header className={styles.favorite__header}>
                <h1 className={styles.favorite__title}>Избранное</h1>
              </header>
              <div className={styles.favorite__body}>
                <div className={styles.favorite__filters}>
                  <SortButton>Рейтинг</SortButton>
                  <SortButton>Цена</SortButton>
                </div>
                <div className={styles.card__container}>
                  {!favorite.length ? <div className={styles.without_favorite}>Нет избранных отелей</div> : favorite.map(it => <FavoriteCard removeFavorite={removeFavorite} key={it.hotelId} params={params} value={it}/> )}
                </div>
              </div>
            </div>
        </div>
    );
};

export default FavoritePanel;
