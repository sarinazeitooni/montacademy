import React from "react";
import './styles/class-card.scss';
import {icons} from "./data/data";

const ClassCard = ({data}) => {
    return (
        <div className='card'>
            <img className='teacher-img' alt='teacher' src={data.teacherImageURL}/>
            <div className='details-container'>
                <div className='course-name'>
                    {data.subject}
                </div>
                <div className='price-container'>
                    <div className='name'><img alt='profile' src={icons.profile}/> {data.teacherName} </div>
                    <div className='price'>{data.priceWithOutOff}تومان</div>
                </div>
                <div className='session-container'>
                    <div className='session'><img alt='session' src={icons.sessions}/> {data.sessionNumber} جلسه </div>
                    <div className='second-price'>
                        <span className='second-price-num'> {data.priceWithOff} </span>
                        تومان
                    </div>
                </div>
            </div>
        </div>
    )
};
export default ClassCard;