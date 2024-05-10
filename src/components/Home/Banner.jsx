import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slide from "./Slide";
// images for slide
import slide1 from "../../assets/images/slide1.jpg";
import slide2 from "../../assets/images/slide2.webp";
import slide3 from "../../assets/images/slide3.webp";
const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide image={slide1} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={slide2} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={slide3} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
