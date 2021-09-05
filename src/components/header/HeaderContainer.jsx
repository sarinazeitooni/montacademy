import React from 'react';
import Menu from "./Menu";
import './styles/header-container.scss';
import LoginAndSignUp from "./LoginAndSignUp";

const HeaderContainer = () => {
    return (
        <div className='header-container'>
            <div className='header'>
                <Menu/>
                <LoginAndSignUp/>
            </div>
        </div>
    )
};
export default HeaderContainer;
