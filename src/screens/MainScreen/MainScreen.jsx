import React, {useState} from 'react';
import FavoritePanel from '../../component/FavoritePanel/FavoritePanel';
import SearchForm from '../../component/Forms/SearchForm/SearchForm';
import MainPanel from '../../component/MainPanel/MainPanel';
import styles from './MainScreen.module.css';
import {useNavigate} from "react-router-dom";
import {format} from "date-fns";
import {useFetchHotels} from "../../component/Forms/SearchForm/useFetchHotels";


const DEFAULT_DAYS_COUNT = 1;
// location=Moscow&currency=rub&checkIn=2022-12-10&checkOut=2022-12-12&limit=10
const initialParams = {
  location: 'Москва',
  currency: 'rub',
  checkIn: format(new Date(), 'yyyy-MM-dd'),
  checkOut: format(new Date().setDate(new Date().getDate() + DEFAULT_DAYS_COUNT), 'yyyy-MM-dd'),
  limit: 10
};


const MainScreen = () => {
  const navigate = useNavigate();
  const [params, setParams] = useState(initialParams);
  const data = useFetchHotels(params)

  console.log({data});

  const handleClick = () => {
    navigate('/')
  }

  const handleSubmit = (e) => {
    const {location, checkIn, daysCount} = e;
    const checkOut = new Date(checkIn);
    checkOut.setDate(checkIn.getDate() + Number(daysCount));

    setParams(state => ({
      ...state,
      location,
      checkIn: format(checkIn, 'yyyy-MM-dd'),
      checkOut: format(checkOut, 'yyyy-MM-dd')
    }))
  }

  return (
    <div className={styles.main__wrapper}>
      <div className={styles.main__container}>
        <header className={styles.main__header}>
          <h2 className={styles.main__title}>Simple Hotel Check</h2>
          <button onClick={handleClick} className={styles.main__exit_button}>Выйти</button>
        </header>
        <section className={styles.main__content}>
          <SearchForm className={styles.searchForm} defaultValue={{
            location: initialParams.location,
            checkIn: new Date(initialParams.checkIn),
            daysCount: DEFAULT_DAYS_COUNT
          }} onSubmit={handleSubmit}/>
          <FavoritePanel className={styles.favoritePanel}/>
          <MainPanel className={styles.mainPanel}/>
        </section>
      </div>
    </div>
  );
};

export default MainScreen;
