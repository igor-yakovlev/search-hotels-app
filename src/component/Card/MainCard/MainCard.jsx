import React, {useState} from 'react';
import styles from './MainCard.module.css';
import ReactStars from "react-rating-stars-component";
import LikeButton from '../../Buttons/LikeButton/LikeButton';
import {format} from "date-fns";
import { ru } from 'date-fns/locale';
import img from '../../../image/icons/image__mainCard.svg';

const MainCard = ({value, params, addFavorite} ) => {
    const liked = false;
    const { hotelName, stars, priceAvg, hotelId} = value;
    const {checkIn, checkOut} = params;

    const countOfDays = new Date(checkOut).getDate() - new Date(checkIn).getDate()

    let dayWord;
    switch (countOfDays) {
        case 1:
            dayWord = 'день';
        break;
        case 2:
          dayWord = 'дня';
              break;
        case 3:
          dayWord = 'дня';
              break;
        case 4:
          dayWord = 'дня';
              break;
        default:
          dayWord = 'дней';
    }


    const handleLikeClick = (e) => {
      addFavorite(hotelId);
    }


    if (!value)
    return <>Loading</>

    return (
        <div className={styles.card}>
          <div className={styles.card__image}>
            <img src={img} alt="" />
          </div>
          <div className={styles.card__content}>
            <div className={styles.card__header}>
              <div className={styles.card__info}>
              <h2 className={styles.card__title}>{hotelName}</h2>
              <p className={styles.card__description}>{format(new Date(checkIn), 'dd MMMM y', {locale: ru})} - <span>{countOfDays} {dayWord}</span></p>
              </div>
              <LikeButton liked={liked} onClick={handleLikeClick}/>
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
        </div>
    );
};

export default MainCard;
