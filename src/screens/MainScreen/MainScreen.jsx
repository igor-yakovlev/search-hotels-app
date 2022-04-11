import React from 'react';
import FavoritePanel from '../../component/FavoritePanel/FavoritePanel';
import SearchForm from '../../component/Forms/SearchForm/SearchForm';
import MainPanel from '../../component/MainPanel/MainPanel';
import styles  from './MainScreen.module.css';

const MainScreen = () => {
  return (
    <div className={styles.main__wrapper}>
      <div className={styles.main__container}>
        <header className={styles.main__header}>
          <h2 className={styles.main__title}>Simple Hotel Check</h2>
          <button className={styles.main__exit_button}>Выйти</button>
        </header>
        <section className={styles.main__content}>
          <SearchForm className={styles.searchForm}/>
          <FavoritePanel className={styles.favoritePanel}/>
          <MainPanel className={styles.mainPanel}/>
        </section>
      </div>
    </div>
  );
};

export default MainScreen;
