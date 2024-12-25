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
import creeper from "../assets/creeper3.png";
import creeper2 from "../assets/creeper.png";

const HomePage = () => {
  return (
    <div className="bg-[#fff5de] w-full min-w-[390px] h-[100svh] overflow-hidden absolute top-0 bottom-0 flex flex-col justify-center items-center text-[#8a733e]">    
          <div className="absolute top-0 right-0 left-0 z-40 transition-all duration-200">
            <Navbar />
          </div>

          <img src={creeper} className="absolute top-[4.5rem] -right-4 sm:-right-7 lg:-right-8 sm:w-[70%] md:w-[60%] lg:w-[40%]"/>

          <div className="flex flex-col mb-[80px]  justify-center items-center gap-1 z-30 w-full">
            <div className="z-30 bg-[#fff5de] bg-opacity-50 w-full py-8">
              <h1 className="disable-text text-[#8a733e] cursor-default text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[11rem] text-center font-almendra z-30 w-full">
              {"Sharmila Sharma".split("").map((letter, index) =>
                            (
                                <span className = "hoverText z-50" key={index}>
                                    {letter}
                                </span>
                            )
                        )}
              </h1>
            </div>
            <div className="bg-[#fff5de] z-40 -mt-8 w-[100vh] flex justify-center items-center">
              <div className="font-almendra font-light -mt-2 text-lg sm:text-xl lg:text-3xl z-40">
                <Typewriter 
                options={{
                  strings: ["Professional-Artist", "Love creating beautiful art."],
                  autoStart: true,
                  loop: true,
                }}
                />
              </div>
            </div>

            <div className="flex gap-4 mt-4 z-30">
              <Link to="https://www.facebook.com/sharmila.sharma.7739">
                <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Facebook" src={facebook} alt="facebook" className="w-9 h-9 lg:w-12 lg:h-12 cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-[#8a733e] rounded-full border-2 border-[#8a733e]"/>
              </Link>
              <Link to="https://x.com/sharmilaart">
                <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Twitter" src={twitter} alt="twitter" className="w-9 h-9 lg:w-12 lg:h-12 cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-[#8a733e] rounded-full border-2 border-[#8a733e]"/>
              </Link>
              <Link to="https://www.instagram.com/sharmila.sharma31/">
                <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Instagram" src={instagram} alt="instagram" className="w-9 h-9 lg:w-12 lg:h-12 cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-[#8a733e] rounded-full border-2 border-[#8a733e]"/>
              </Link>
              <Link to="mailto:sharmila.sharma31@gmail.com">
                <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Email" src={gmail} alt="gmail" className="w-9 h-9 lg:w-12 lg:h-12 cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-[#8a733e] rounded-full border-2 border-[#8a733e]"/>
              </Link>
              <Tooltip id="my-tooltip" />
            </div>

            <img src={creeper2} className="w-1/2 left-0 absolute bottom-44 sm:w-[48%] md:w-[45%] lg:w-[30%]"/>

            <div className="absolute bottom-0 left-0 right-0">
              <div className="wave wave1"></div>
              <div className="wave wave2"></div>
              <div className="wave wave3"></div>
              <div className="wave wave4"></div>
            </div>

          </div>
      </div>
  )
}

export default HomePage