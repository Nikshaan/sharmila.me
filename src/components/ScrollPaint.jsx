import PropTypes from "prop-types";
import { useState } from "react";
import arrow from "../assets/up-arrow.png";
import { Link } from "react-router-dom";

const ScrollPaint = ({slides, desc}) => {
  const [showArrow, setShowArrow] = useState(false);
  
  ScrollPaint.propTypes = {
      slides: PropTypes.any,
      desc: PropTypes.any,
    };
    
  const scrollFunc = () => {
    let y = window.scrollY;
    if(y>=1000){
        setShowArrow(true)
    }
    else{
        setShowArrow(false)
    }
  }

  window.addEventListener("scroll", scrollFunc);
    
  return (
    <div className="relative">

        <div className="px-4 py-8 mx-4 min-w-[320px] columns-1 md:columns-2 xl:columns-3 gap-4 bg-transparent">
          {slides.map((slide, index) => (
            <div className="w-full mb-4 break-inside-avoid border-2 p-1 cursor-pointer" key={index}>
                <Link to={`/sharmila.me/gallery/paintings/${index}`}>
                <img
                  className=""
                  src={slides[index]}
                  alt="Image"
                />
                <div className="px-2 font-raleway">
                  <p className="text-white pt-2.5 font-medium">{desc[index].name}</p>
                  <p className="text-white pb-2.5 font-thin">{desc[index].shortDesc}</p>
                </div>
                </Link>
            </div>
          ))}
        </div>
      <div className={`fixed z-20 bg-white border-2 border-black p-2 rounded-full  bottom-0.5 right-0.5 lg:bottom-3 lg:right-3 xl:bottom-5 xl:right-5 ${showArrow?'block':'hidden'}`}>
        <img className="cursor-pointer h-8" alt="arrow" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'});}} src={arrow} />
      </div>

    </div>
  )
}

export default ScrollPaint