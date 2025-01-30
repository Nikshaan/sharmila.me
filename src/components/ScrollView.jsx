import PropTypes from "prop-types";
import Modal from "./Modal";
import { useState } from "react";
import arrow from "../assets/up-arrow.jpg";

const ScrollView = ({slides}) => {
  const [openModal, setOpenModal] = useState(false);
  const [slideImg, setSlideImg] = useState('');
  const [showArrow, setShowArrow] = useState(false);

  ScrollView.propTypes = {
      slides: PropTypes.any,
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

        <div className="px-4 py-8 mx-4 min-w-[320px] columns-1 md:columns-2 xl:columns-3 2xl:columns-4 gap-4 bg-black">
          {slides.map((slide, index) => (
            <div className="w-full mb-4 break-inside-avoid" key={index}>
                <img
                  className=""
                  src={slides[index]}
                  alt="Image"
                  onClick={() => {setOpenModal(true), setSlideImg(index)}}
                />
            </div>
          ))}
        </div>

        { 
          openModal && <Modal closeModal={setOpenModal} image = {slideImg} slideList = {slides}/>
        }

      <div className={`fixed z-20 bg-black border-2 p-2 rounded-full  bottom-0.5 right-0.5 lg:bottom-3 lg:right-3 xl:bottom-5 xl:right-5 ${showArrow?'block':'hidden'}`}>
        <img className="cursor-pointer h-10" alt="arrow" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'});}} src={arrow} />
      </div>

    </div>
  )
}

export default ScrollView