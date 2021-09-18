import React from 'react';
import './styles/classes.scss';
import ClassCard from "../classCard/ClassCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, {
    Navigation
} from 'swiper';
import {v4 as uuidv4} from "uuid";
import { useMediaQuery } from 'react-responsive';
SwiperCore.use([Navigation]);
const Classes = ({title , extraTitle , mobileTitle , cards})=>{
    const is768 = useMediaQuery({
        query: '(min-width: 434px) and (max-width:1024px)'
    })
    const isMiddle = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 1024px)'
    })
    return(
        <div className='class-container'>
            <div className='text-container'>
                <h2 className='class-title'> {title} </h2>
                <h3>{mobileTitle}</h3>
                <span className='class-extraTitle'> {extraTitle} </span>
            </div>
            <hr className='line'/>
            <div className='cards-container'>
                {cards.length > 4 ?
                    <Swiper
                        spaceBetween={1} slidesPerView={isMiddle ? 3 : 4} navigation>
                        {
                            cards.map((index)=>{
                                return(
                                    <SwiperSlide key={uuidv4()}>
                                        <ClassCard data={index}/>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    : isMiddle ? <Swiper
                            spaceBetween={1} slidesPerView={3} navigation>
                            {
                                cards.map((index)=>{
                                    return(
                                        <SwiperSlide key={uuidv4()}>
                                            <ClassCard data={index}/>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper> :
                    cards.map((index)=>{
                            return(
                                <React.Fragment key={uuidv4()}>
                                    <ClassCard data={index}/>
                                </React.Fragment>
                            )
                        })
                }
            </div>
            <div className={is768 ? 'cards-container-768' : 'cards-container-425'}>
                    <Swiper
                        spaceBetween={1} slidesPerView={is768 ? 3 : 2} navigation>
                        {
                            cards.map((index)=>{
                                return(
                                    <SwiperSlide key={uuidv4()}>
                                        <ClassCard data={index}/>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
            </div>
        </div>
    )
}
export default Classes;