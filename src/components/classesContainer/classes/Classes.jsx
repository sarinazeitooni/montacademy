import React from 'react';
import './styles/classes.scss';
const Classes = ({title , extraTitle , mobileTitle , cards})=>{
    return(
        <div className='class-container'>
            <div className='text-container'>
                <h2 className='class-title'> {title} </h2>
                <h3>{mobileTitle}</h3>
                <span className='class-extraTitle'> {extraTitle} </span>
            </div>
            <hr className='line'/>
        </div>
    )
}
export default Classes;