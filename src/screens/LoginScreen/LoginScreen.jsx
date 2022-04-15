import React from 'react';
import VerificationForm from '../../component/Forms/VerificationForm/VerificationForm';
import styles  from './LoginScreen.module.css'
import {useNavigate} from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();

  const handleSubmit = ({data}) => {
    console.log(data);
    navigate('/main-screen');
  }

    return (
        <div className={styles.wrapper}>
            <VerificationForm onSubmit={handleSubmit}/>
        </div>
    );
};

export default LoginScreen;
