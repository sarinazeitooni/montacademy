import React from 'react';
import './styles/classes.scss';
import ClassCard from "../classCard/ClassCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, {
    Navigation
} from 'swiper';
import {v4 as uuidv4} from "uuid";
SwiperCore.use([Navigation]);
const Classes = ({title , extraTitle , mobileTitle , cards})=>{
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
                        spaceBetween={1} slidesPerView={4} navigation>
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
                    :
                    cards.map((index)=>{
                            return(
                                <React.Fragment key={uuidv4()}>
                                    <ClassCard data={index}/>
                                </React.Fragment>
                            )
                        })
                }
            </div>
            <div className='cards-container-768'>
                    <Swiper
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
                    </Swiper>
            </div>
            <div className='cards-container-425'>
                <Swiper
                    spaceBetween={1} slidesPerView={2} navigation>
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