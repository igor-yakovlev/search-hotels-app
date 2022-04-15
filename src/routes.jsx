import React from "react";
import MainScreen from './screens/MainScreen/MainScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import {Route, Routes} from "react-router-dom";


const AppRotes = () => {
  return (
    <Routes>
      <Route path={'/main-screen'} element={<MainScreen/>}/>
      <Route path={'/'} element={<LoginScreen/>}/>
  </Routes>
  );
};

export default AppRotes;

