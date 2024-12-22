import Navbar from "../components/Navbar"
import home01 from "../assets/homePage/home01.jpg";
import gal55 from "../assets/homePage/gal55.jpg";
import gal57 from "../assets/homePage/gal57.jpg";
import gal63 from "../assets/homePage/gal63.jpeg";
import EmblaCarousel from "../components/EmblaCarousel";
import Footer from "../components/Footer";
import parallax from "../assets/parallax.png";
import scroller from "../assets/scroller.png";
import { useEffect, useState } from "react";
import ScrollView from "../components/ScrollView";

const Craft = () => {
  const OPTIONS = { dragFree: true, loop: true }
  const SLIDES = [home01, gal55, gal57, gal63]
  const [showSlide, setShowSlide] = useState("parallax");

  useEffect(()=> {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, [])
  

  var prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else if (currentScrollPos >= 24) {
    document.getElementById("navbar").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}
  return (
    <div className="bg-gradient-to-b from-green-950 to-[#5F823C] w-full h-full">
        <div id="navbar" className="fixed top-0 right-0 left-0 transition-all duration-200 z-20">
            <Navbar />
        </div>
        <div className="pt-20 pb-4 bg-green-950 w-full flex flex-col justify-center items-center">
            <h1 className="text-white gallery text-center text-7xl font-playwrite">CRAFT</h1>
        </div>
        <div className="h-full">
            <div className="w-full h-14 text-white flex justify-end items-center bg-green-950">
                  <div className="flex justify-end items-top gap-1 w-full p-2 border-2">
                    <div className="border-2 px-2 flex justify-center items-center cursor-pointer bg-[#5F823C] rounded-xl">
                      <img onClick={() => setShowSlide("parallax")}  src={parallax} className="h-10"/>
                    </div>
                    <div className="border-2 px-2 flex justify-center items-center cursor-pointer bg-[#5F823C] rounded-xl">
                      <img onClick={() => setShowSlide("scroller")} src={scroller} className="h-9"/>
                    </div>
                  </div>
            </div>
            <div className="w-full my-8">
              {
                showSlide == "parallax" && <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
              }
              {
                showSlide == "scroller" && <ScrollView slides={SLIDES}/>
              }
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Craft