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
import creeper from "../assets/creeper3.png"
import creeper2 from "../assets/creeper.png"

const HomePage = () => {
  return (
    <div className="bg-[#fff5de] w-full h-[100svh] overflow-hidden absolute top-0 bottom-0 flex flex-col justify-center items-center text-[#8a733e]">    
          <div className="absolute top-0 right-0 left-0 z-40">
            <Navbar />
          </div>
          <img src={creeper} className="absolute top-[4.5rem] -left-2"/>
          <div className="flex flex-col mb-[80px] sm:mb-0 justify-center items-center gap-1 z-30">
            <div className="z-30 bg-[#fff5de]">
              <h1 className="disable-text text-[#8a733e] cursor-default text-8xl lg:text-[10rem] text-center font-almendra z-30">
              {"Sharmila Sharma".split("").map((letter, index) =>
                            (
                                <span className = "hoverText z-50" key={index}>
                                    {letter}
                                </span>
                            )
                        )}
              </h1>
            </div>
            <div className="font-almendra font-light -mt-2 text-lg sm:text-xl z-50 bg-[#fff5de]">
              <Typewriter 
              options={{
                strings: ["Professional-Artist", "Love creating beautiful art."],
                autoStart: true,
                loop: true,
              }}
              />
            </div>
            <div className="flex gap-4 mt-4 z-30">
              <Link to="https://www.facebook.com/sharmila.sharma.7739">
                <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Facebook" src={facebook} alt="facebook" className="w-9 h-9 lg:w-10 lg:h-10 cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-[#8a733e] rounded-full border-2 border-[#8a733e]"/>
              </Link>
              <Link to="https://x.com/sharmilaart">
                <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Twitter" src={twitter} alt="twitter" className="w-9 h-9 lg:w-10 lg:h-10 cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-[#8a733e] rounded-full border-2 border-[#8a733e]"/>
              </Link>
              <Link to="https://www.instagram.com/sharmila.sharma31/">
                <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Instagram" src={instagram} alt="instagram" className="w-9 h-9 lg:w-10 lg:h-10 cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-[#8a733e] rounded-full border-2 border-[#8a733e]"/>
              </Link>
              <Link to="mailto:sharmila.sharma31@gmail.com">
                <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Email" src={gmail} alt="gmail" className="w-9 h-9 lg:w-10 lg:h-10 cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-[#8a733e] rounded-full border-2 border-[#8a733e]"/>
              </Link>
              <Tooltip id="my-tooltip" />
            </div>
            <img src={creeper2} className="w-1/2 left-0 absolute bottom-44"/>
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