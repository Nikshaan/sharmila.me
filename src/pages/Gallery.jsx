import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import cypress from "../assets/cypress.jpg";
import gal1 from "../assets/gal1.jpg";
import gal2 from "../assets/gal2.jpeg";
import gal3 from "../assets/gal3.jpeg";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Gallery = () => {
  return (
    <>
    <div className="absolute top-0 right-0 left-0">
        <Navbar />
    </div>
    <div className="bg-[#5F823C] h-full flex flex-col justify-center sm:pb-16">
    <img src={cypress} alt="background-image-cypress" className="mt-16"/>
      <div className="bg-black relative border-2 border-white bg-opacity-65 p-4 rounded-xl mx-4 md:mx-10 lg:mx-16 -mt-40 sm:-mt-[27rem] md:-mt-[34rem] lg:-mt-[46rem] xl:-mt-[59rem] 2xl:-mt-[72rem] 3xl:-mt-[86rem] 4xl:-mt-[103rem] mb-14 h-3/4 flex justify-center items-center flex-col">
        <h1 className="text-white font-thin text-9xl font-madi -mt-20 gallery absolute -top-1">Gallery</h1>
        <div className="overflow-hidden font-semibold font-raleway mt-20 mb-5 flex flex-col sm:flex-row gap-10 sm:items-start">
          <motion.div
          initial = {{ opacity: 0}}
          animate = {{opacity: 1}}
          transition={{duration: 2}}
          className="relative sm:w-[170%]">
            <img src={gal1} alt="album-1" className="rounded-md border-2 shadow-md shadow-green-300"/>
            <Link to="/about">
            <div className="bg-black flex opacity-100 xl:opacity-0 bg-opacity-15 absolute top-0 bottom-1 w-full hover:opacity-100 transition-all duration-500 justify-center items-end rounded-lg">
              <p className="w-full text-center text-3xl mx-0.5 text-white bg-black py-1 rounded-sm bg-opacity-65 gallery">PAINTINGS</p>
            </div>
            </Link>
          </motion.div>
          <motion.div
          initial = {{ opacity: 0}}
          animate = {{opacity: 1}}
          transition={{duration: 2}} 
          className="relative sm:w-[160%]">
            <img src={gal2} alt="album-2" className="rounded-md border-2 shadow-md shadow-green-300"/>
            <Link to="/about">
            <div className="bg-black flex opacity-100 xl:opacity-0 bg-opacity-15 absolute top-0 bottom-1 w-full hover:opacity-100 transition-all duration-500 justify-center items-end rounded-lg">
              <p className="w-full text-center text-3xl mx-0.5 text-white bg-black py-1 rounded-sm bg-opacity-65 gallery">CRAFTS</p>
            </div>
            </Link>
          </motion.div>
          <motion.div
          initial = {{ opacity: 0}}
          animate = {{opacity: 1}}
          transition={{duration: 2}}
          className="relative sm:w-[160%]">
            <img src={gal3} alt="album-3" className="rounded-md border-2 shadow-md shadow-green-300"/>
            <Link to="/about">
            <div className="bg-black shadow-md shadow-green-300 flex opacity-100 xl:opacity-0 bg-opacity-15 absolute top-0 bottom-1 w-full hover:opacity-100 transition-all duration-500 justify-center items-end rounded-lg">
              <p className="w-full text-center text-3xl mx-0.5 text-white border-b-2 bg-black py-1 rounded-sm bg-opacity-65 gallery">FLORA</p>
            </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
    <div className="z-50 absolute w-full">
      <Footer />
    </div>
    </>
  )
}

export default Gallery