import PropTypes from "prop-types";
import Modal from "./Modal";
import { useState } from "react";
import arrow from "../assets/up-arrow.png";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const ScrollView = ({slides, desc}) => {
  const [openModal, setOpenModal] = useState(false);
  const [slideImg, setSlideImg] = useState('');
  const [showArrow, setShowArrow] = useState(false);
  const navigate = useNavigate();
  
  ScrollView.propTypes = {
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

  const clickSet = (index) => {
    if (desc[index].type == "Painting") {
      navigate(`/sharmila.me/gallery/paintings/${index}`);
    } else {
      setOpenModal(true);
      setSlideImg(index); 
    }
  }

  window.addEventListener("scroll", scrollFunc);
    
  return (
    <div className="relative">

        <div className="px-4 py-8 mx-4 min-w-[320px] columns-1 md:columns-2 xl:columns-3 gap-4 bg-transparent">
          {slides.map((slide, index) => (
            <div className="w-full mb-4 break-inside-avoid border-2 border-black p-1 cursor-pointer transition-all shadow-[#0f1b61] duration-300 shadow-sm hover:shadow-md hover:shadow-[#0f1b61]" key={index}>
                <LazyLoadImage
                  className="group-hover:scale-95 duration-500 transition-all"
                  src={slides[index]}
                  placeholderSrc={slides[index]}
                  alt="Image"
                  onClick={() => clickSet(index)}
                  effect="blur"
                />
                <div className="px-2 font-raleway">
                  <p className="pt-2.5 font-medium">{desc[index].name}</p>
                  <p className="pb-2.5 font-thin">{desc[index].shortDesc}</p>
                </div>
            </div>
          ))}
        </div>

        { 
          openModal && <Modal closeModal={setOpenModal} image = {slideImg} slideList = {slides}/>
        }

      <div className={`fixed z-20 p-2 rounded-full  bottom-0.5 right-0.5 lg:bottom-3 lg:right-3 xl:bottom-5 xl:right-5 ${showArrow?'block':'hidden'}`}>
        <img className="cursor-pointer h-8" fetchPriority="high" alt="arrow" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'});}} src={arrow} />
      </div>

    </div>
  )
}

export default ScrollView