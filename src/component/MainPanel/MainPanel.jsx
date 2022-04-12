import React from 'react';
import SwipeToSlide from '../SimpleSlider/SimpleSlider';
import styles from './MainPanel.module.css';
import MainCard from '../Card/MainCard/MainCard';


const MainPanel = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.hotels}>
          <h2 className={styles.title}>Отели</h2>
          <div className={styles.arrow}></div>
          <h2 className={styles.title}>Москва</h2>
        </div>
        <p className={styles.date}>07 июля 2020</p>
      </header>
      <div className={styles.body}>
      <SwipeToSlide/>
      <p className={styles.favorite}>Добавлено в Избранное: <span className={styles.count_of_hotels}>3</span> отеля</p>
      <div className={styles.card__container}>
        <MainCard/>
        <MainCard/>
        <MainCard/>
        <MainCard/>
        <MainCard/>
        <MainCard/>
        <MainCard/>
        <MainCard/>
      </div>
      </div>

    </div>

  );
};

export default MainPanel;
