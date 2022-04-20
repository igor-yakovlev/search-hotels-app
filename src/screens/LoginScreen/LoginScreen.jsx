import React from 'react';
import VerificationForm from '../../component/Forms/VerificationForm/VerificationForm';
import styles  from './LoginScreen.module.css'


const LoginScreen = () => {


    return (
        <div className={styles.wrapper}>
            <VerificationForm/>
        </div>
    );
};

export default LoginScreen;
