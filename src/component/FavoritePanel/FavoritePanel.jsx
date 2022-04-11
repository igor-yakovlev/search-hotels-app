import React from 'react';
import styles from './FavoritePanel.module.css'
import ReactStars from "react-rating-stars-component";
import LikeButton from '../Buttons/LikeButton/LikeButton';

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
                  <div className={styles.card}>
                    <h2 className={styles.card__title}>Moscow Marriott Grand Hotel</h2>
                    <p className={styles.card__description}>28 June, 2020 - <span>1 день</span></p>
                    <LikeButton/>
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default FavoritePanel;
