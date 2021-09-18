import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, {
    Navigation , Autoplay
} from 'swiper';
import './styles/baner-swiper.scss';
import { v4 as uuidv4 } from 'uuid';
SwiperCore.use([Navigation,Autoplay]);
const BannerSwiper = ({images}) => {
    return (
        <div className='banner-swiper-container'>
            <Swiper
                spaceBetween={1} slidesPerView={1} navigation={true} autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
            }}>
                {
                    images.map((item)=>{
                        return(
                            <SwiperSlide key={uuidv4()}>
                                <img alt='banners' className='desktop-view' src={item.desktop} />
                                <img alt='banners' className='mobile-view' src={item.mobile} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
};
export default BannerSwiper;
