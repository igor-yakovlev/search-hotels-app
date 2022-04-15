import React, {useCallback, useState} from 'react';
import Button from '../../Buttons/Button';
import Input from '../../Input/Input';
import styles from './VerificationForm.module.css'


const initialData = {
  login: '',
  password: '',
}

const VerificationForm = ({onSubmit}) => {

  const [data, setData] = useState(null);

  const handleChange = useCallback(({target}) => {
    const {name, value} = target;
    setData((state) => ({...state, [name]: value}))
}, [setData]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('WorkHandleSubmit')
    onSubmit(data);
}, [onSubmit, data])


    return (
      <div className={styles.wrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <header className={styles.form__header}>
                <h1 className={styles.form__title}>Simple Hotel Check</h1>
              </header>
              <div className={styles.form__body}>
                <label className={styles.input__label}>
                    Логин
                    <Input
                    required
                    onChange={handleChange}
                    name={"login"}
                    type="text"
                    />
                </label>
                <label className={styles.input__label}>
                    Пароль
                    <Input
                    required
                    onChange={handleChange}
                    name={"password"}
                    type="password"
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
