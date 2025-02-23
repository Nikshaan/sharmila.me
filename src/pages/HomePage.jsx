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
import gal6 from "../assets/gal6.jpg";
import gal7 from "../assets/gal7.jpg";
import gal8 from "../assets/gal8.jpg";
import gal9 from "../assets/gal9.jpg";
import gal10 from "../assets/gal10.jpg";
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image';
import { useEffect, useState } from "react";

const HomePage = () => {
  const [imgArr, setImgArr] = useState([]);
  const imgArr1 = [gal1, gal2, gal3, gal4, gal5]
  const imgArr2 = [gal6, gal7, gal8, gal9, gal10]
  
  function resize() {
    if (screen.width < 640) {     
    setImgArr(imgArr2)
    }
    else {
    setImgArr(imgArr1);
    }
  }
  useEffect(() => resize(), []);

  return (
    <div className="bg-white w-full min-w-[344px] min-h-[100svh] h-full overflow-hidden flex-col justify-center items-center text-black">  

          <div className="absolute top-0 right-0 left-0 transition-all duration-200 z-40">
            <Navbar />
          </div>

          <div className="flex flex-col xl:flex-row w-[85%] min-h-[100svh] xl:items-center xl:justify-center xl:gap-10 xl:pt-32 pt-16 m-auto bg-white pb-12 xl:pb-40">
            <div className="flex flex-col bg-white pb-16 4xl:pb-32 gap-1">
              <div className="w-full mt-10">
                <h1 className="disable-text text-nowrap cursor-default text-4xl sm:text-5xl xl:text-6xl 4xl:text-7xl font-domine w-full">
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
                <div className="font-raleway font-medium text-[#f23a11] text-xl sm:text-xl lg:text-2xl 2xl:text-3xl">
                  <Typewriter 
                  options={{
                    strings: ["Professional Artist", "Love creating beautiful art."],
                    autoStart: true,
                    loop: true,
                  }}
                  />
                </div>
              </div>
              <div className="flex gap-2 absolute bottom-0 right-0 p-2 z-40 bg-white">
                <Link to="https://www.facebook.com/sharmila.sharma.7739">
                  <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Facebook" src={facebook} alt="facebook" className="w-9 h-9 cursor-pointer hover:scale-110 duration-200 hover:shadow-sm hover:shadow-black rounded-full"/>
                </Link>
                <Link to="https://x.com/sharmilaart">
                  <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Twitter" src={twitter} alt="twitter" className="w-9 h-9 cursor-pointer hover:scale-110 duration-200 hover:shadow-sm hover:shadow-black rounded-full"/>
                </Link>
                <Link to="https://www.instagram.com/sharmila.sharma31/">
                  <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Instagram" src={instagram} alt="instagram" className="w-9 h-9  cursor-pointer hover:scale-110 duration-200 hover:shadow-sm hover:shadow-black rounded-full"/>
                </Link>
                <Link to="mailto:sharmila.sharma31@gmail.com">
                  <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Email" src={gmail} alt="gmail" className="w-9 h-9 cursor-pointer hover:scale-110 duration-200 hover:shadow-sm hover:shadow-black rounded-full"/>
                </Link>
                <Tooltip id="my-tooltip" />
            </div>
            </div>
            <div className="bg-white w-full xl:w-1/2 2xl:w-[40%] 3xl:w-[35%]">     
            <Zoom scale={0.4} arrows={false}>
              {imgArr.map((slideImage, index)=> (
              <div className="each-slide" key={index}>
                <img src={slideImage}/>
              </div>
              ))} 
            </Zoom>    
            </div>
          </div>
      </div>
  )
}

export default HomePage