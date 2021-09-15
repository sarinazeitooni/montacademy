import React from "react";
import './styles/class-card.scss';
import {classCardIcons} from "../../../data/data";

const ClassCard = ({data}) => {
    return (
        <div className='card'>
            <img className='teacher-img' alt='teacher' src={data.teacherImageURL}/>
            <div className='details-container'>
                <div className='course-name'>
                    {data.subject}
                </div>
                <div className='container'>
                    <div className='name-session-container'>
                        <div className='name'><img alt='profile' src={classCardIcons.profile}/><span> {data.teacherName} </span></div>
                        <div className='session'><img alt='session' src={classCardIcons.sessions}/><span> {data.sessionNumber} جلسه </span></div>

                    </div>
                    <div className='price-container'>
                        <div className='price'>{data.priceWithOutOff}تومان</div>
                        <div className='second-price'>
                            <span className='second-price-num'> {data.priceWithOff} </span>
                            <span>تومان</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default ClassCard;