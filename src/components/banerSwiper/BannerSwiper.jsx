import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, {
    Navigation
} from 'swiper';
import './styles/baner-swiper.css';
import { v4 as uuidv4 } from 'uuid';
const BannerSwiper = ({images}) => {
    SwiperCore.use([Navigation]);
    return (
        <div className='banner-swiper-container'>
            <img src='https://www.monta.ir/monta-cademy/assets/images/banner-desktop-1.png' alt='test'/>
            <Swiper
                spaceBetween={1} slidesPerView={1} loop={true} pagination>
                {
                    images.map((item)=>{
                        return(
                            <SwiperSlide key={uuidv4()}>
                                <img alt='banners' className='desktop-view' src={item.desktop} />
                                {/*<img alt='banners' className='mobile-view' src={item.mobile} />*/}
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
};
export default BannerSwiper;
