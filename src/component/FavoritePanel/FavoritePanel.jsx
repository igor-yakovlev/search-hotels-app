import React from 'react';
import FavoriteCard from '../Card/FavoriteCard/FavoriteCard';
import styles from './FavoritePanel.module.css'

const FavoritePanel = () => {
    return (
      <div className={styles.wrapper}>
            <div className={styles.favorite}>
              <header className={styles.favorite__header}>
                <h1 className={styles.favorite__title}>Избранное</h1>
              </header>
              <div className={styles.favorite__body}>
                <div className={styles.favorite__filters}>
                  <button className={styles.favorite__button}>Рейтинг</button>
                  <button className={styles.favorite__button}>Цена</button>
                </div>
                <div className={styles.card__container}>
                  <FavoriteCard/>
                  <FavoriteCard/>
                  <FavoriteCard/>
                </div>
              </div>
            </div>
        </div>
    );
};

export default FavoritePanel;
