import React from 'react';
import SwipeToSlide from '../SimpleSlider/SimpleSlider';
import styles from './MainPanel.module.css';
import MainCard from '../Card/MainCard/MainCard';
import {format} from "date-fns";
import { ru } from 'date-fns/locale';


const MainPanel = ({hotels, params, favorite, addFavorite}) => {
  const {location, checkIn} = params;

  let hotelWord;
    switch (favorite.length) {
        case 1:
          hotelWord = 'отель';
        break;
        case 2:
          hotelWord = 'отеля';
              break;
        case 3:
          hotelWord = 'отеля';
              break;
        case 4:
          hotelWord = 'отеля';
              break;
        default:
          hotelWord = 'отелей';
    }
  

  if (!hotels)
        return <div className={styles.loading}>Loading</div>

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.hotels}>
          <h2 className={styles.title}>Отели</h2>
          <div className={styles.arrow}></div>
          <h2 className={styles.title}>{location}</h2>
        </div>
        <p className={styles.date}>{format(new Date(checkIn), 'dd MMMM y', {locale: ru})}</p>
      </header>
      <div className={styles.body}>
        <SwipeToSlide/>
        <p className={styles.favorite}>Добавлено в Избранное: <span className={styles.count_of_hotels}>{favorite.length}</span> {hotelWord}</p>
        <div className={styles.card__container}>
          {hotels.map(it => <MainCard addFavorite={addFavorite} key={it.hotelId} value={it} params={params}/>)}
        </div>
      </div>

    </div>

  );
};

export default MainPanel;
