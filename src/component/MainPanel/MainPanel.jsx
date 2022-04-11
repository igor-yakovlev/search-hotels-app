import React from 'react';
import styles from './MainPanel.module.css';

const MainPanel = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.hotels}>
          <h2 className={styles.title}>Отели</h2>
          <div className={styles.arrow}></div>
          <h2 className={styles.title}>Москва</h2>
        </div>
        <div className={styles.date}>07 июля 2020</div>
      </header>
    </div>
  );
};

export default MainPanel;
