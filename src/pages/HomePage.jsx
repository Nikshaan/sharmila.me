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
import ParticlesComponent from "../components/particles";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-black to-[#14014f] w-full min-w-[390px] h-[100svh] overflow-hidden absolute top-0 bottom-0 flex flex-col justify-center items-center text-white">  
          <ParticlesComponent id="particles" />
          <div className="absolute top-0 right-0 left-0 z-40 transition-all duration-200">
            <Navbar />
          </div>
          <div className="flex flex-col mb-[80px] justify-center items-center gap-1 z-30 w-full">
            
            <div className="z-30 w-full">
              <h1 className="disable-text cursor-default text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] text-center font-domine z-30 w-full">
              {"Sharmila Sharma".split("").map((letter, index) =>
                            (
                                <span className = "hoverText z-50" key={index}>
                                    {letter}
                                </span>
                            )
                        )}
              </h1>
            </div>
            <div className="-mt-1 flex justify-center items-center w-full">
              <div className="font-domine text-[#6fb3f2] -mt-0 text-base sm:text-xl lg:text-3xl">
                <Typewriter 
                options={{
                  strings: ["Professional Artist", "Love creating beautiful art."],
                  autoStart: true,
                  loop: true,
                }}
                />
              </div>
            </div>

            <div className="flex gap-4 mt-4 z-30">
              <Link to="https://www.facebook.com/sharmila.sharma.7739">
                <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Facebook" src={facebook} alt="facebook" className="w-9 h-9 lg:w-12 lg:h-12 cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-[#6fb3f2] rounded-full border-2"/>
              </Link>
              <Link to="https://x.com/sharmilaart">
                <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Twitter" src={twitter} alt="twitter" className="w-9 h-9 lg:w-12 lg:h-12 cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-[#6fb3f2] rounded-full border-2"/>
              </Link>
              <Link to="https://www.instagram.com/sharmila.sharma31/">
                <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Instagram" src={instagram} alt="instagram" className="w-9 h-9 lg:w-12 lg:h-12 cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-[#6fb3f2] rounded-full border-2"/>
              </Link>
              <Link to="mailto:sharmila.sharma31@gmail.com">
                <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Email" src={gmail} alt="gmail" className="w-9 h-9 lg:w-12 lg:h-12 cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-[#6fb3f2] rounded-full border-2"/>
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
  )
}

export default HomePage