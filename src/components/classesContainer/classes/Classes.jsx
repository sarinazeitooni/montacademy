import React from 'react';
import './styles/classes.scss';
const Classes = ({title , extraTitle , mobileTitle , cards})=>{
    return(
        <div className='class-container'>
            <h2 className='class-title'>{title}</h2>
            <span className='class-extraTitle'>{extraTitle}</span>
        </div>
    )
}
export default Classes;