import React, {useState} from 'react';
import styles from './FavoriteCard.module.css';
import ReactStars from "react-rating-stars-component";
import LikeButton from '../../Buttons/LikeButton/LikeButton';
import {format} from "date-fns";
import { ru } from 'date-fns/locale';

const FavoriteCard = ({value, params, removeFavorite}) => {
    const { hotelName, stars, priceAvg, hotelId} = value;
    const {checkIn} = params;
    const [liked, setLiked] = useState(false);

    const handleLikeClick = (e) => {
      let localLiked = liked;
      setLiked(!localLiked);
      removeFavorite(hotelId);
    }

    return (
        <div className={styles.card}>
          <div className={styles.card__header}>
            <div className={styles.card__info}>
            <h2 className={styles.card__title}>{hotelName}</h2>
            <p className={styles.card__description}>{format(new Date(checkIn), 'dd MMMM y', {locale: ru})} - <span>1 день</span></p>
            </div>
            <LikeButton onClick={handleLikeClick}/>
          </div>
          <div className={styles.card__body}>
            <ReactStars
            value={stars}
            count={5}
            size={24}
            activeColor="#ffd700"
            edit={false}
            />
            <div className={styles.card__price}>
            <h3 className={styles.price__title}>Price:</h3>
            <p className={styles.price__value}>{Math.ceil(priceAvg)} ₽</p>
            </div>
          </div>
        </div>
    );
};

export default FavoriteCard;
