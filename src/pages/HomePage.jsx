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

const HomePage = () => {
  return (
    <div className="bg-black w-full h-[100svh]">
      <Swiper modules={[EffectFade, Autoplay]} effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}>
            <SwiperSlide><div className="h-[100svh] min-w-fit bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${home01})`}}/></SwiperSlide>
            <SwiperSlide><div className="h-[100svh] min-w-fit bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${gal55})`}}/></SwiperSlide>
            <SwiperSlide><div className="h-[100svh] min-w-fit bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${gal57})`}}/></SwiperSlide>
            <SwiperSlide><div className="h-[100svh] min-w-fit bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${gal108})`}}/></SwiperSlide>
            <SwiperSlide><div className="h-[100svh] min-w-fit bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${gal63})`}}/></SwiperSlide>
          </Swiper>
        
      <div className="bg-black z-40 absolute top-0 bottom-0 bg-opacity-65 w-full h-[100svh] flex flex-col justify-center items-center text-white">
          <div className="absolute top-0 right-0 left-0">
            <Navbar />
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
          <div>
            <h1 className="glow text-white cursor-default text-7xl lg:text-8xl text-center font-league font-semibold">Sharmila Sharma</h1>
          </div>
          <div className="font-playwrite italic opacity-80 -mt-3 sm:text-xl lg:text-3xl">
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
              <img src={facebook} alt="facebook" className="w-8 h-8 lg:w-10 lg:h-10 cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-white rounded-full border-2 border-white"/>
            </Link>
            <Link to="https://x.com/sharmilaart">
              <img src={twitter} alt="twitter" className="w-8 h-8 lg:w-10 lg:h-10 cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-white rounded-full border-2 border-white"/>
            </Link>
            <Link to="https://www.instagram.com/sharmila.sharma31/">
              <img src={instagram} alt="instagram" className="w-8 h-8 lg:w-10 lg:h-10 cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-white rounded-full border-2 border-white"/>
            </Link>
            <Link to="mailto:sharmila.sharma31@gmail.com">
              <img src={gmail} alt="gmail" className="w-8 h-8 lg:w-10 lg:h-10 cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-white rounded-full border-2 border-white"/>
            </Link>
          </div>
          </div>
      </div>
    </div>
  )
}

export default HomePage