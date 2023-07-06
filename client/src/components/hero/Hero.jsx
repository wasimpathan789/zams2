import "./hero.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, HashNavigation, Autoplay } from "swiper";
import bg2 from "../../assets/bg5.jpg";
import bg3 from "../../assets/bg6.jpg";
import bg1 from "../../assets/bg7.jpg";

const Hero = () => {
  return (
    <div className="hero-container">
      <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation, HashNavigation]}
        className="mySwiper sample-slider"
      >
        <SwiperSlide
          data-hash="slide1"
          className="view-slide"
          style={{
            backgroundImage: `url(${bg2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
          }}
        >
          <div className="slide-content">
            <div className="hero-overlay"></div>

            <h1>We provide the Best….</h1>
            <p>
              We aim to work together as a team, putting our clients first
              through open and honest communication. Our ethos is to deliver
              professional services with integrity and efficiency promoting them
              in all ZAMS actions.
            </p>
            <div className="explore-btn">
              <button>
                <a href="#about">Explore</a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          data-hash="slide2"
          style={{
            backgroundImage: `url(${bg3})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
          }}
        >
          <div className="slide-content">
            <div className="hero-overlay"></div>

            <h1>We have a passion for . .</h1>
            <p>
              We are team of HVAC engineers that have gained considerable
              experience in HVAC system design and execution in multiple
              sectors. We have a passion for design and engineering within the
              built environment and relish the challenging of turning project
              into reality.
            </p>
            <div className="explore-btn">
              <button>
                <a href="#about">Explore</a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          data-hash="slide3"
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
          }}
        >
          <div className="slide-content">
            <div className="hero-overlay"></div>

            <h1>We are a passionate . . .</h1>
            <p>
              Our team combine experience, expertise and knowledge to provide
              clients with what they want for all temperature controlled
              environments. Using our specialist knowledge, we involve to reduce
              the carbon footprint of the world via clean and green design
              solutions.
            </p>
            <div className="explore-btn">
              <button>
                <a href="#about">Explore</a>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
