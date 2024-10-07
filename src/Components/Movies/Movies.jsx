
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Movies.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Movies = () => {
  
  return (
    <>
      <Swiper
        // onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="5289-1-4-3-1721308188.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="6097-1-2-3-1717594468.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="6098-1-3-3-1722967951.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="6106-1-2-3-1723018318.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="6381-1-3-3-1727425309.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="6485-1-5-3-1723803980.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="6537-1-2-3-1716371101.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="6542-1-2-3-1715763299.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="6600-1-1-3-1719589140.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="6605-1-2-3-1722605713.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="6610-1-2-3-1721041041.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="6612-1-1-3-1724321033.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="6614-1-1-3-1724837095.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="6615-1-2-3-1726236464.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="6616-1-2-3-1726483631.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="6618-1-2-3-1725893580.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="6621-1-1-3-1727708358.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="6642-1-1-3-1725221375.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="6643-1-1-3-1725220008.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="6644-1-1-3-1724681504.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="6662-1-1-3-1726234131.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="6665-1-1-3-1726483529.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
};

export default Movies;
