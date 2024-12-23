import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import gmail from "../assets/gmail.png";
import Typewriter from 'typewriter-effect';
import { Swiper,SwiperSlide } from "swiper/react";
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay } from "swiper/modules";
import home01 from "../assets/homePage/home01.jpg";
import gal55 from "../assets/homePage/gal55.jpg";
import gal57 from "../assets/homePage/gal57.jpg";
import gal63 from "../assets/homePage/gal63.jpeg";
import gal108 from "../assets/homePage/gal108.jpeg";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { motion } from "motion/react";

const HomePage = () => {
  return (
    <div className="bg-black w-full h-[100svh]">
      <Swiper modules={[EffectFade, Autoplay]} effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}>
            <SwiperSlide><motion.div
            initial = {{ opacity: 0 }}
            animate = {{ opacity: 1}}
            transition={{ delay: 1.5, duration: 1.5}} 
            className="h-[100svh] min-w-fit bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${home01})`}}/></SwiperSlide>
            <SwiperSlide><div className="h-[100svh] min-w-fit bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${gal55})`}}/></SwiperSlide>
            <SwiperSlide><div className="h-[100svh] min-w-fit bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${gal57})`}}/></SwiperSlide>
            <SwiperSlide><div className="h-[100svh] min-w-fit bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${gal108})`}}/></SwiperSlide>
            <SwiperSlide><div className="h-[100svh] min-w-fit bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${gal63})`}}/></SwiperSlide>
          </Swiper>
        
      <div className="bg-black z-40 absolute top-0 bottom-0 bg-opacity-65 w-[100%] h-[100svh] flex flex-col justify-center items-center text-white">
          <div className="absolute top-0 right-0 left-0">
            <Navbar />
          </div>
          <div className="flex flex-col mb-[80px] sm:mb-0 justify-center items-center gap-1">
            <div>
              <h1 className="glow disable-text text-white cursor-default text-9xl lg:text-[10rem] text-center font-madi font-medium">
              {"Sharmila Sharma".split("").map((letter, index) =>
                            (
                                <span className = "hoverText" key={index}>
                                    {letter}
                                </span>
                            )
                        )}
              </h1>
            </div>
            <div className="font-raleway font-light -mt-2 sm:text-xl">
              <Typewriter 
              options={{
                strings: ["Professional Artist", "Love creating beautiful art."],
                autoStart: true,
                loop: true,
              }}
              />
            </div>
            <div className="flex gap-4 mt-4">
              <Link to="https://www.facebook.com/sharmila.sharma.7739">
                <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Facebook" src={facebook} alt="facebook" className="w-8 h-8 lg:w-10 lg:h-10 cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-white rounded-full border-2 border-white"/>
              </Link>
              <Link to="https://x.com/sharmilaart">
                <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Twitter" src={twitter} alt="twitter" className="w-8 h-8 lg:w-10 lg:h-10 cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-white rounded-full border-2 border-white"/>
              </Link>
              <Link to="https://www.instagram.com/sharmila.sharma31/">
                <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Instagram" src={instagram} alt="instagram" className="w-8 h-8 lg:w-10 lg:h-10 cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-white rounded-full border-2 border-white"/>
              </Link>
              <Link to="mailto:sharmila.sharma31@gmail.com">
                <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Email" src={gmail} alt="gmail" className="w-8 h-8 lg:w-10 lg:h-10 cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-white rounded-full border-2 border-white"/>
              </Link>
              <Tooltip id="my-tooltip" />
            </div>
            <div className="absolute bottom-0 left-0 right-0">
              <div className="wave wave1"></div>
              <div className="wave wave2"></div>
              <div className="wave wave3"></div>
              <div className="wave wave4"></div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default HomePage