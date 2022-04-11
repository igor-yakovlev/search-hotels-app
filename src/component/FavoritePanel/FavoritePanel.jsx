import React from 'react';
import Card from '../Card/Card';
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
                  <Card/>
                  <Card/>
                  <Card/>
                </div>
              </div>
            </div>
        </div>
    );
};

export default FavoritePanel;
