import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import gmail from "../assets/gmail.png";
import Typewriter from 'typewriter-effect';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import gal1 from "../assets/Paintings/gal48.jpg";
import gal2 from "../assets/Paintings/gal57.jpg";
import gal3 from "../assets/Paintings/gal61.jpg";
import gal4 from "../assets/Paintings/gal25.jpg";
import gal5 from "../assets/Paintings/gal63.jpg";

const HomePage = () => {
  return (
    <div className="bg-[#f5fafc] w-full min-w-[344px] min-h-[100svh] overflow-hidden flex-col justify-center items-center text-[#0f1b61]">  

          <Swiper modules={[EffectFade, Autoplay]} effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}>
            <SwiperSlide><div className="h-[100svh] min-w-fit bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${gal1})`}}/></SwiperSlide>
            <SwiperSlide><div className="h-[100svh] min-w-fit bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${gal2})`}}/></SwiperSlide>
            <SwiperSlide><div className="h-[100svh] min-w-fit bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${gal3})`}}/></SwiperSlide>
            <SwiperSlide><div className="h-[100svh] min-w-fit bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${gal4})`}}/></SwiperSlide>
            <SwiperSlide><div className="h-[100svh] min-w-fit bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${gal5})`}}/></SwiperSlide>
          </Swiper>

          <div className="absolute top-0 right-0 left-0 z-40 transition-all duration-200">
            <Navbar />
          </div>

          <div className="flex flex-col bg-[#f5fafc] bg-opacity-50 absolute top-0 bottom-0  gap-1 z-30 w-full min-w-[344px]">
            
            <div className="z-30 w-full mt-32">
              <h1 className="disable-text cursor-default text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl pl-4 font-domine z-30 w-full">
              {"Sharmila Sharma".split("").map((letter, index) =>
                            (
                                <span className = "hoverText z-50" key={index}>
                                    {letter}
                                </span>
                            )
                        )}
              </h1>
            </div>
            <div className="-mt-1 flex w-full pl-5">
              <div className="font-raleway font-bold text-[#7f00e0] text-lg sm:text-xl lg:text-2xl 2xl:text-3xl">
                <Typewriter 
                options={{
                  strings: ["Professional Artist", "Love creating beautiful art."],
                  autoStart: true,
                  loop: true,
                }}
                />
              </div>
            </div>

            <div className="flex absolute bottom-2 right-2 gap-3 z-30">
              <Link to="https://www.facebook.com/sharmila.sharma.7739">
                <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Facebook" src={facebook} alt="facebook" className="w-9 h-9 lg:w-10 lg:h-10 cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-[#6fb3f2] rounded-full border-2 border-[#0f1b61]"/>
              </Link>
              <Link to="https://x.com/sharmilaart">
                <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Twitter" src={twitter} alt="twitter" className="w-9 h-9 lg:w-10 lg:h-10  cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-[#6fb3f2] rounded-full border-2 border-[#0f1b61]"/>
              </Link>
              <Link to="https://www.instagram.com/sharmila.sharma31/">
                <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Instagram" src={instagram} alt="instagram" className="w-9 h-9 lg:w-10 lg:h-10  cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-[#6fb3f2] rounded-full border-2 border-[#0f1b61]"/>
              </Link>
              <Link to="mailto:sharmila.sharma31@gmail.com">
                <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Email" src={gmail} alt="gmail" className="w-9 h-9 lg:w-10 lg:h-10  cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-[#6fb3f2] rounded-full border-2 border-[#0f1b61]"/>
              </Link>
              <Tooltip id="my-tooltip" />
            </div>

          </div>
      </div>
  )
}

export default HomePage