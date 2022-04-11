import React from 'react';
import Button from '../../Buttons/Button';
import Input from '../../Input/Input';
import styles from './VerificationForm.module.css'

const VerificationForm = () => {
    return (
      <div className={styles.wrapper}>
            <form className={styles.form}>
              <header className={styles.form__header}>
                <h1 className={styles.form__title}>Simple Hotel Check</h1>
              </header>
              <div className={styles.form__body}>
                <label className={styles.input__label}>
                    Логин
                    <Input
                    required
                    name={"login"}
                    type="text"
                    />
                </label>
                <label className={styles.input__label}>
                    Пароль
                    <Input
                    required
                    name={"password"}
                    type="text"
                    />
                </label>
              </div>
              <div className={styles.form__control}>
                <Button type={'submit'}>Войти</Button>
              </div>
            </form>
        </div>
    );
};

export default VerificationForm;
