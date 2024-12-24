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
    <>
    <div id="navbar" className="fixed top-0 right-0 left-0 transition-all duration-200 z-50">
        <Navbar />
    </div>
    <div className="bg-[#fff5de] text-[#8a733e] mt-20 mb-14 h-full flex flex-col justify-center items-center sm:pb-16">
        <h1 className="font-almendra text-8xl lg:text-[10rem] border-b-2 border-[#8a733e]">Gallery</h1>
        <div className="overflow-hidden mt-2 flex flex-col font-semibold sm:flex-row gap-10 sm:items-start">
          <motion.div
          initial = {{ opacity: 0}}
          animate = {{opacity: 1}}
          transition={{duration: 2}}
          className="relative sm:w-[170%] mx-10 mt-14 mb-7 flex flex-col justify-center items-center">
            <Link to="/sharmila.me/gallery/paintings">
              <img src={gal1} alt="album-1" className="rounded-md border-2 shadow-lg shadow-[#8a733e]"/>
            </Link>
            <div className="h-0.5 w-[90%] bg-[#8a733e] mt-8 mb-4" />
            <div className="flex w-full justify-center items-end rounded-lg">
              <p className="w-full text-center text-4xl font-crimson">PAINTINGS</p>
            </div>
          </motion.div>
          <motion.div
          initial = {{ opacity: 0}}
          animate = {{opacity: 1}}
          transition={{duration: 2}}
          className="relative sm:w-[170%] m-10 mt-0 flex flex-col justify-center items-center">
            <Link to="/sharmila.me/gallery/craft">
              <img src={gal2} alt="album-2" className="rounded-md border-2 shadow-lg shadow-[#8a733e]"/>
            </Link>
            <div className="h-0.5 w-[90%] bg-[#8a733e] mt-8 mb-4" />
            <div className="flex w-full justify-center items-end rounded-lg">
              <p className="w-full text-center text-4xl font-crimson">CRAFT</p>
            </div>
          </motion.div>
          <motion.div
          initial = {{ opacity: 0}}
          animate = {{opacity: 1}}
          transition={{duration: 2}}
          className="relative sm:w-[170%] m-10 mt-0 flex flex-col justify-center items-center">
            <Link to="/sharmila.me/gallery/flora">
              <img src={gal3} alt="album-3" className="rounded-md border-2 shadow-lg shadow-[#8a733e]"/>
            </Link>
            <div className="h-0.5 w-[90%] bg-[#8a733e] mt-8 mb-4" />
            <div className="flex w-full justify-center items-end rounded-lg">
              <p className="w-full text-center text-4xl font-crimson">FLORA</p>
            </div>
          </motion.div>
        </div>
      </div>

    <div className="z-50 absolute w-full -mt-5">
      <Footer />
    </div>
    </>
  )
}

export default Gallery