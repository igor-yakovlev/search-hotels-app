import React from 'react';
import Button from '../../Buttons/Button';
import Input from '../../Input/Input';
import styles from './VerificationForm.module.css'
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";

const VerificationForm = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit
  } = useForm(
    {
      mode: 'onBlur'
    }
  );

  const onSubmit = (data) => {
    console.log(data)
    console.log('WorkHandleSubmit')
    navigate('/main-screen');
}

    return (
      <div className={styles.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <header className={styles.form__header}>
                <h1 className={styles.form__title}>Simple Hotel Check</h1>
              </header>
              <div className={styles.form__body}>
                <label className={`${styles.input__label} ${errors?.login && styles.input_error}`}>
                    Логин
                    <input {...register('login', {
                      required: 'Поле обязательно к заполнению',
                      pattern: {
                        value: /.+@.+\..+/i,
                        message: "Необходимо ввести электронную почту"
                        },
                      })}
                      className={`${styles.input} ${errors?.login && styles.input_error}`}
                      type={'text'}
                      />
                    {errors?.login && <p className={styles.error}>{errors?.login?.message ||'Неправильно введен логин'}</p>}
                </label>

                <label className={ `${styles.input__label} ${errors?.password && styles.input_error}`}>
                    Пароль
                    <input {...register('password',{
                        required: 'Поле обязательно к заполнению',
                        minLength: {
                          value: 8,
                          message: 'Пароль должен быть не менее 8 символов'
                        }
                      })}
                    className={`${styles.input} ${errors?.password && styles.input_error}`}
                    type={'password'}
                    />
                    {errors?.password && <p className={styles.error}>{errors?.password?.message || 'Неправильно введен пароль'}</p>}
                </label>


              </div>
              <div className={styles.form__control}>
                <Button type='submit' disabled={!isValid}>Войти</Button>
              </div>
            </form>

        </div>
    );
};

export default VerificationForm;
