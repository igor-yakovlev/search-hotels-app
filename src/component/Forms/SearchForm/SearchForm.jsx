import React, { useCallback, useState } from 'react';
import Button from '../../Buttons/Button';
import Input from '../../Input/Input';
import styles from './SearchForm.module.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


// location=Moscow&currency=rub&checkIn=2022-12-10&checkOut=2022-12-12&limit=10

const initialSearch = {
  location: 'Москва',
  currency: 'rub',
  checkIn: new Date().toISOString().slice('0', '10'),
  checkOut: '',
}

const API__HOTELS = 'api/v2/cache.json';

const SearchForm = () => {
  const [search, setSearch] = useState(initialSearch);
  const [datePicker, setDatePicker] = useState(new Date());
  const [numberOfDays, setnumberOfDays] = useState(1);

  const handleChange = useCallback(({target}) => {
    const {name, value} = target;
    setSearch(state => ({...state, [name]: value}))
  }, [setSearch]);

  const handledatePickerChange = useCallback((e) => {
    const date = e;
    console.log(e.toISOString())
    const checkInDate = date.toISOString().slice('0', '10');
    setDatePicker(date);
    setSearch(state => ({...state, checkIn: checkInDate}))
  } , [setSearch, setDatePicker]);


  const handlenumberOfDays = useCallback(({target}) => {
    const {value} = target;
    const checkInDate = datePicker;
    const checkOutDate = checkInDate.setDate(checkInDate.getDate() + +value);
    console.log(new Date(checkOutDate));
    setSearch(state => ({...state, checkOut: new Date(checkOutDate).toISOString().slice('0', '10')}))
    setnumberOfDays(value);
  } , [datePicker, setnumberOfDays]);


  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const url = new URL(`${window.location.origin}/${API__HOTELS}`);
    // Object.entries(search).forEach(param => url.searchParams.append(...param))
    // console.log(new Date(search.checkIn).getTime());
    console.log(search);
    console.log(Object.entries(search).forEach(item => url.searchParams.append(...item)));

  }, [search]);

    return (
      <div className={styles.wrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.form__body}>
                <label className={styles.input__label}>
                    Локация
                    <Input
                    onChange={handleChange}
                    value={search.location}
                    required
                    name={"location"}
                    type="text"
                    />
                </label>
                <label className={styles.input__label}>
                    Дата заселения
                    <DatePicker
                      dateFormat="dd.MM.yyyy"
                      className={styles.date}
                      selected={datePicker}
                      onChange={handledatePickerChange}
                    />
                </label>
                <label className={styles.input__label}>
                    Количество дней
                    <Input
                    value={numberOfDays}
                    onChange={handlenumberOfDays}
                    required
                    name={"numOfDays"}
                    type="text"
                    />
                </label>
              </div>
              <div className={styles.form__control}>
                <Button type={'submit'}>Найти</Button>
              </div>
            </form>
        </div>
    );
};

export default SearchForm;
