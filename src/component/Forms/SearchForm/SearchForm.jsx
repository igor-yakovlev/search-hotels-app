import React from 'react';
import Button from '../../Buttons/Button';
import Input from '../../Input/Input';
import styles from './SearchForm.module.css'

const SearchForm = () => {
    return (
      <div className={styles.wrapper}>
            <form className={styles.form}>
              <div className={styles.form__body}>
                <label className={styles.input__label}>
                    Локация
                    <Input
                    required
                    name={"login"}
                    type="text"
                    />
                </label>
                <label className={styles.input__label}>
                    Дата заселения
                    <Input
                    required
                    name={"password"}
                    type="date"
                    />
                </label>
                <label className={styles.input__label}>
                    Количество дней
                    <Input
                    required
                    name={"password"}
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
