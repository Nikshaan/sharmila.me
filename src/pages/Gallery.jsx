import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import gal1 from "../assets/gal1.jpg";
import gal2 from "../assets/gal2.jpeg";
import gal3 from "../assets/gal3.jpeg";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useEffect } from "react";

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
    <div className="bg-gradient-to-b from-black to-[#14014f] min-h-[100svh] relative pb-80 min-w-[390px] flex flex-col items-center">
      <div id="navbar" className="fixed top-0 right-0 left-0 transition-all duration-200 z-40">
          <Navbar />
      </div>

      <div className="pt-24 mb-14 lg:pt-40 h-full flex flex-col justify-center items-center sm:pb-16 text-white">
        <h1 className="font-domine text-7xl lg:text-8xl border-b-2 border-[#6fb3f2]">GALLERY</h1>

        <div className="overflow-hidden -mt-2 flex flex-col font-semibold sm:flex-row gap-2 sm:mx-10 items-start sm:mt-12">
          <motion.div
          initial = {{ opacity: 0}}
          animate = {{opacity: 1}}
          transition={{duration: 2}}
          className="relative sm:w-[170%] mx-10 sm:my-0 sm:mx-3 mt-16 mb-7 flex flex-col justify-center p-4 pt-8 items-center hover:scale-105 duration-200 transition-all">
            <Link to="/sharmila.me/gallery/paintings" className="flex justify-center items-center">
              <img src={gal1} alt="album-1" className="rounded-md border-2 shadow-lg shadow-[#6fb3f2] 2xl:w-2/3"/>
            </Link>
            <div className="h-0.5 w-[90%] xl:w-[70%] mt-8 mb-4 bg-[#6fb3f2]" />
            <div className="flex w-full justify-center items-end rounded-lg">
              <p className="w-full text-center text-3xl lg:text-4xl 2xl:text-6xl font-raleway font-thin">PAINTINGS</p>
            </div>
          </motion.div>

          <motion.div
          initial = {{ opacity: 0}}
          animate = {{opacity: 1}}
          transition={{duration: 2}}
          className="relative sm:w-[170%] m-10 sm:m-0 -mt-2  p-4 pt-8 flex flex-col justify-center items-center hover:scale-105 duration-200 transition-all">
            <Link to="/sharmila.me/gallery/craft" className="flex justify-center items-center">
              <img src={gal2} alt="album-2" className="rounded-md border-2 shadow-lg shadow-[#6fb3f2] 2xl:w-2/3"/>
            </Link>
            <div className="h-0.5 w-[90%] xl:w-[70%] mt-8 mb-4 bg-[#6fb3f2]" />
            <div className="flex w-full justify-center items-end rounded-lg">
              <p className="w-full text-center text-3xl lg:text-4xl 2xl:text-6xl font-raleway  font-thin">CRAFT</p>
            </div>
          </motion.div>

          <motion.div
          initial = {{ opacity: 0}}
          animate = {{opacity: 1}}
          transition={{duration: 2}}
          className="relative sm:w-[170%] m-10 sm:m-0 -mt-2 p-4 pt-8 flex flex-col justify-center items-center hover:scale-105 duration-200 transition-all">
            <Link to="/sharmila.me/gallery/flora" className="flex justify-center items-center">
              <img src={gal3} alt="album-3" className="rounded-md border-2 shadow-lg shadow-[#6fb3f2] 2xl:w-2/3"/>
            </Link>
            <div className="h-0.5 w-[90%] xl:w-[70%] mt-8 mb-4 bg-[#6fb3f2]" />
            <div className="flex w-full justify-center items-end rounded-lg">
              <p className="w-full text-center text-3xl lg:text-4xl 2xl:text-6xl font-raleway  font-thin">FLORA</p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="z-40 absolute bottom-0 -mt-5 lg:w-[80%] 2xl:w-[60%]">
        <Footer />
      </div>
   </div>
  )
}

export default Gallery