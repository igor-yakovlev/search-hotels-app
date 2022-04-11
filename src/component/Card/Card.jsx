import React from 'react';
import styles from './Card.module.css';
import ReactStars from "react-rating-stars-component";
import LikeButton from '../Buttons/LikeButton/LikeButton';

const Card = () => {
    return (
        <div className={styles.card}>
          <div className={styles.card__header}>
            <div className={styles.card__wrapper}>
            <h2 className={styles.card__title}>Moscow Marriott Grand Hotel</h2>
            <p className={styles.card__description}>28 June, 2020 - <span>1 день</span></p>
            </div>
            <LikeButton/>
          </div>
          <div className={styles.card__body}>
            <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            />
            <div className={styles.card__price}>
            <h3 className={styles.price__title}>Price:</h3>
            <p className={styles.price__value}>23924</p>
            </div>
          </div>
        </div>
    );
};

export default Card;