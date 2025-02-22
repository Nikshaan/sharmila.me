import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import gmail from "../assets/gmail.png";
import Typewriter from 'typewriter-effect';
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import gal1 from "../assets/Paintings/gal48.jpg";
import gal2 from "../assets/Paintings/gal57.jpg";
import gal3 from "../assets/Paintings/gal61.jpg";
import gal4 from "../assets/Paintings/gal25.jpg";
import gal5 from "../assets/Paintings/gal63.jpg";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import 'react-awesome-slider/dist/styles.css';

const HomePage = () => {

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div className="bg-white w-full min-w-[344px] min-h-[100svh] overflow-hidden flex-col justify-center items-center text-black">  

          <div className="absolute top-0 right-0 left-0 transition-all duration-200">
            <Navbar />
          </div>

          <div className="flex w-[85%] h-[100svh] justify-center items-center m-auto bg-white">
            <div className="flex flex-col bg-white pb-16 gap-1 min-w-[344px]">
              <div className="w-full mt-10 mr-10">
                <h1 className="disable-text text-nowrap cursor-default text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-domine w-full">
                {"Sharmila Sharma".split("").map((letter, index) =>
                              (
                                  <span className = "hoverText" key={index}>
                                      {letter}
                                  </span>
                              )
                          )}
                </h1>
              </div>
              <div className="-mt-1 flex w-full">
                <div className="font-raleway font-medium text-[#f23a11] text-lg sm:text-xl lg:text-2xl 2xl:text-3xl">
                  <Typewriter 
                  options={{
                    strings: ["Professional Artist", "Love creating beautiful art."],
                    autoStart: true,
                    loop: true,
                  }}
                  />
                </div>
              </div>
              <div className="flex gap-2 absolute bottom-2 right-2">
                <Link to="https://www.facebook.com/sharmila.sharma.7739">
                  <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Facebook" src={facebook} alt="facebook" className="w-8 h-8 cursor-pointer hover:scale-110 duration-200 hover:shadow-sm hover:shadow-black rounded-full"/>
                </Link>
                <Link to="https://x.com/sharmilaart">
                  <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Twitter" src={twitter} alt="twitter" className="w-8 h-8 cursor-pointer hover:scale-110 duration-200 hover:shadow-sm hover:shadow-black rounded-full"/>
                </Link>
                <Link to="https://www.instagram.com/sharmila.sharma31/">
                  <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Instagram" src={instagram} alt="instagram" className="w-8 h-8  cursor-pointer hover:scale-110 duration-200 hover:shadow-sm hover:shadow-black rounded-full"/>
                </Link>
                <Link to="mailto:sharmila.sharma31@gmail.com">
                  <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Email" src={gmail} alt="gmail" className="w-8 h-8 cursor-pointer hover:scale-110 duration-200 hover:shadow-sm hover:shadow-black rounded-full"/>
                </Link>
                <Tooltip id="my-tooltip" />
            </div>
            </div>
            <div className="bg-white w-1/2">
                  <AutoplaySlider
                  animation="fallAnimation"
                  mobiletouch={true}
                  infinite={true}
                  buttons={false}
                  bullets={false}
                  play={true}
                  cancelOnInteraction={false} // should stop playing on user interaction
                  interval={5000}>
                    <div><img src={gal1}/></div>
                    <div><img src={gal2}/></div>
                    <div><img src={gal3}/></div>
                    <div><img src={gal4}/></div>
                    <div><img src={gal5}/></div>
                  </AutoplaySlider>
            </div>
          </div>
      </div>
  )
}

export default HomePage