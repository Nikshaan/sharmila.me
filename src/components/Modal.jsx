import PropTypes from "prop-types";
import cancel from "../assets/cancel.png";
import { useState } from "react";

const Modal = ({closeModal, image, slideList}) => {
    const [imgInd, setImgInd] = useState(image);
    Modal.propTypes = {
          closeModal: PropTypes.any,
          image: PropTypes.any,
          slideList: PropTypes.any,
        };
        
  return (
    <div className="bg-black bg-opacity-90 flex  justify-center items-center max-h-screen w-full fixed top-0 bottom-0 left-0 right-0 z-40">
        <div className="w-[95%] h-[95%] overflow-x-clip relative overflow-y-auto flex  justify-center items-center">
            <div className="absolute top-2 left-2 rounded-full text-2xl lg:text-4xl bg-white">
                <img src={cancel} alt="cancel" className="w-8 lg:w-10 2xl:w-12 cursor-pointer bg-white rounded-full dark:bg-transparent" onClick={() => closeModal(false)} />
            </div>
            <div className="absolute lg:relative -left-6 px-2 text-white cursor-pointer">
                <div onClick={() => {if(imgInd != 0){setImgInd(imgInd-1)}}} className='embla__button'>
                    <svg className="embla__button__svg" viewBox="0 0 532 532">
                    <path
                    fill="currentColor"
                    d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
                    />
                    </svg>
                </div>
            </div>
            <div className="flex lg:p-10 xl:p-40 flex-col justify-center h-full w-full items-center">
                <img src={slideList[imgInd]} className="w-full"/>
            </div>
            <div className="absolute lg:relative -right-6 px-2 text-white cursor-pointer">
                <div onClick={() => {if(imgInd != slideList.length-1){ setImgInd(imgInd+1)}}} className='embla__button'>
                    <svg className="embla__button__svg" viewBox="0 0 532 532">
                    <path
                    fill="currentColor"
                    d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                    />
                    </svg>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal