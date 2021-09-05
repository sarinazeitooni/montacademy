import React from 'react';
import menuData from "./data/menu";
import './styles/login-and-signUp.scss'
const LoginAndSignUp = ()=>{
    return(
        <button className='login-and-singUp-btn'>
            {menuData.loginAndSignUp}
        </button>
    )
};
export default LoginAndSignUp;
