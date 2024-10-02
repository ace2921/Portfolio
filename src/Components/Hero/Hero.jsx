import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Hero.css'

const Hero = () => {
  return (
    <><div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide><img src='/transformers-one.jpeg' alt="transformers" className='hero' /></SwiperSlide>
        <SwiperSlide><img src='/hellboy.jpeg' alt="transformers" className='hero' /></SwiperSlide>
        <SwiperSlide><img src='/Joker.jpeg' alt="transformers" className='hero' /></SwiperSlide>
        <SwiperSlide><img src='/panda-bear.jpeg' alt="transformers" className='hero' /></SwiperSlide>
        <SwiperSlide><img src='/bagman.jpeg' alt="transformers" className='hero' /></SwiperSlide>
        <SwiperSlide><img src='/the-wild-bot.jpeg' alt="transformers" className='hero' /></SwiperSlide>
        <SwiperSlide><img src='/absolute-cinema.jpeg' alt="transformers" className='hero' /></SwiperSlide>
      </Swiper>
    </div></>
  );
};

export default Hero;
