import Footer from "../components/Footer";
import gal1 from "../assets/gal1.jpg";
import gal2 from "../assets/gal2.jpg";
import gal3 from "../assets/gal3.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "motion/react";

const Gallery = () => {

  useEffect(()=> {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, [])

  var prevScrollpos = window.pageYOffset;

  window.onscroll = () => {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else if (currentScrollPos >= 64){
    document.getElementById("navbar").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
  }

  return (
    <div className="bg-white min-h-[100svh] relative pb-80 min-w-[390px] flex flex-col items-center">

      <div className="pt-20 mb-14 h-full flex flex-col justify-center items-center sm:pb-16 text-white">
        <motion.h1
        initial = {{ x: "-100vh"}}
        animate = {{x: 0}}
        transition={{ duration: 2, ease: "backInOut" }}
        exit={{ x: "100vh" }} 
        className="font-manrope text-5xl 2xl:text-6xl border-b-2 border-[#f23a11] text-black">GALLERY</motion.h1>
        <div className="w-[85%] xsm:w-2/3 md:w-[95%] lg:w-[85%] xl:w-[80%] 2xl:w-[70%] 4xl:w-[60%] font-semibold sm:mx-10 mt-4 xl:mt-0 p-5">
          <div className="grid grid-cols-2 w-full gap-4">
          <div className="flex flex-col">
          <motion.div
          initial = {{ scale: 0, rotate: "0deg" }}
          animate = {{ scale: 1, rotate: "360deg" }}
          transition={{ duration: 2, ease: "backInOut" }}
          exit={{ scale: 0, rotate: "0deg" }} 
          className="flex flex-col justify-center items-center mt-4">
          <Link to="/sharmila.me/gallery/paintings" className="flex relative justify-center items-center overflow-hidden border-2 border-black">
              <div className="group h-full w-full">
                <div className="bg-black flex justify-center items-center h-0 opacity-0 w-full  group-hover:opacity-75 text-opacity-100 group-hover:h-full absolute duration-500">
                <p className="text-white hover:text-[#f23a11] duration-200 font-domine">view</p>
                </div>
                <img src={gal1} alt="album-1" className="duration-200 shadow-sm shadow-[#f23a11] w-full"/>
              </div>
            </Link>
            <div className="h-0.5 w-[80%] mr-2 my-4 bg-[#f23a11]" />
            <div className="flex w-full justify-center items-end rounded-lg mr-6">
              <p className="w-full -mt-2 text-center text-3xl 2xl:text-4xl font-raleway font-light text-black">PAINTINGS</p>
            </div>
            </motion.div>
            <motion.div
            initial = {{ scale: 0, rotate: "0deg" }}
            animate = {{ scale: 1, rotate: "360deg" }}
            transition={{ duration: 2, ease: "backInOut" }}
            exit={{ scale: 0, rotate: "0deg" }} 
            className="flex flex-col justify-center items-center mt-4">
         <Link to="/sharmila.me/gallery/craft" className="flex relative justify-center items-center border-2 border-black overflow-hidden">
            <div className="group h-full w-full">
            <div className="bg-black flex justify-center items-center h-0 opacity-0 w-full  group-hover:opacity-75 text-opacity-100 group-hover:h-full absolute duration-500">
            <p className="text-white hover:text-[#f23a11] duration-200 font-domine">view</p>
            </div>
              <img src={gal2} alt="album-2" className="shadow-sm shadow-[#f23a11] w-full"/>
              </div>
            </Link>
            <div className="h-0.5 w-[80%] my-4 mr-2 bg-[#f23a11]" />
            <div className="flex w-full justify-center items-end rounded-lg mr-4">
              <p className="w-full -mt-2 text-center text-3xl 2xl:text-4xl font-raleway font-light text-black">CRAFT</p>
            </div>
      
            </motion.div>
            </div>
            <motion.div
            initial = {{ scale: 0, rotate: "360deg" }}
            animate = {{ scale: 1, rotate: "0deg" }}
            transition={{ duration: 2, ease: "backInOut" }}
            exit={{ scale: 0, rotate: "360deg" }} 
            className="flex flex-col justify-center items-center mt-4">
           <Link to="/sharmila.me/gallery/flora" className="flex relative justify-center items-center border-2 border-black overflow-hidden">
              <div className="group h-full w-full">
              <div className="bg-black flex justify-center items-center h-0 opacity-0 w-full  group-hover:opacity-75 text-opacity-100 group-hover:h-full absolute duration-500">
              <p className="text-white hover:text-[#f23a11] duration-200 font-domine">view</p>
              </div>
                <img src={gal3} alt="album-3" className="shadow-sm shadow-[#f23a11] w-full"/>
                </div>
              </Link>
              <div className="h-0.5 w-[80%] my-4 mr-2 bg-[#f23a11]" />
              <div className="flex w-full justify-center items-end rounded-lg mr-4">
                <p className="w-full -mt-2 text-center text-3xl 2xl:text-4xl font-raleway text-black font-light">FLORA</p>
              </div>
              </motion.div>
          </div>
        </div>
      </div>
      <motion.div
      initial = {{ x: "-100vh"}}
      animate = {{x: 0}}
      transition={{ duration: 2, ease: "backInOut" }}
      exit={{ x: "100vh" }} 
      className="z-40 absolute bottom-0 -mt-5 lg:w-[80%] 2xl:w-[60%] 4xl:w-[60%]">
        <Footer />
      </motion.div>
   </div>
  )
}

export default Gallery