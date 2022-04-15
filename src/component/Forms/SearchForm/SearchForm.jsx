import React, {useState} from 'react';
import Button from '../../Buttons/Button';
import Input from '../../Input/Input';
import styles from './SearchForm.module.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SearchForm = ({defaultValue = {}, onSubmit}) => {
  const [form, setForm] = useState(defaultValue);

  const handleChange = ({target}) => {
    const {name, value} = target;
    setForm(state => ({...state, [name]: value}))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form__body}>
          <label className={styles.input__label}>
            Локация
            <Input
              onChange={handleChange}
              value={form.location}
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
              selected={form.checkIn}
              name={'checkIn'}
              onChange={value => handleChange({target: {name: 'checkIn', value}})}
            />
          </label>
          <label className={styles.input__label}>
            Количество дней
            <Input
              value={form.daysCount}
              onChange={handleChange}
              required
              name={"daysCount"}
              type="number"
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
