import React from "react";
import './style/login.scss';
import {login} from '../../data/data';

const Login = () => {
    const [remember, setRemember] = React.useState(true);
    return (
        <div className='login-container'>
            <img alt='login' src='https://www.monta.ir/client_resources/images/img/monta-color.png'/>
            <div className='input-container'>
                <div className='input-title'>{login.user}</div>
                <input type='text' placeholder={login.userPlaceHolder}/>
            </div>
            <div className='input-container'>
                <div className='input-title'>{login.password}</div>
                <div className='forgot-password'>{login.forgotPass}</div>
                <input type='text' placeholder={login.passPlaceHolder}/>
            </div>
            <button className='login-btn'>
                {login.login}
            </button>
            <div className='remember-container'>
                <input checked={remember} onChange={() => {
                    setRemember(!remember)
                }} className='remember-check' id='remember-check' name='remember-check' type='checkbox'/>
                <label htmlFor='remember-check'>{login.remember}</label>
            </div>
            <div className='new-member-container'>
                <span>{login.newUser}</span>
                <span className='sign-up'>{login.signUp}</span>
            </div>
        </div>
    )
}
export default Login;