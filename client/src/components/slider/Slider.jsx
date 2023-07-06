import "./slider.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// import Button from "../button/Button";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      // autoplay={true}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="slider-swiper"
    >
      <SwiperSlide className="swiper-slide home-slide-1">
        <div className="slide-1-swapper">
          {/* <div className="overlay"></div> */}
          <h3
            className="slide-1-h3"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            Welcome to <span className="heading3"> SSGM Logistics</span>
          </h3>
          <h1 data-aos="fade-right" data-aos-duration="1500">
            a truly global <br />
            service provider
          </h1>
          <span data-aos="fade-left" data-aos-duration="1500">
            We make your Cargo transport simple
          </span>
          <br />
          {/* <Button data-aos="fade-up" data-aos-duration="1500" title={"Learn More"} /> */}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
