import './styles/schedule.scss';
import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, {
    Navigation
} from 'swiper';
import {v4 as uuidv4} from 'uuid';

SwiperCore.use([Navigation]);
const Schedule = ({title, items}) => {
    return (
        <div className='schedule-container'>
            <div className='schedule-title'>
                {title}
            </div>
            {items && <div className='schedule-swiper'>
                <Swiper
                    spaceBetween={1} slidesPerView={1} navigation>
                    {
                        items.map((item) => {
                            return (
                                <SwiperSlide key={uuidv4()}>
                                    <img alt='schedule' className='schedule-img' src={item}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>}
        </div>
    )
}
export default Schedule;