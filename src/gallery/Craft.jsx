import Navbar from "../components/Navbar";
import EmblaCarousel from "../components/EmblaCarousel";
import Footer from "../components/Footer";
import parallax from "../assets/parallax.png";
import scroller from "../assets/scroller.png";
import { useEffect, useState } from "react";
import ScrollView from "../components/ScrollView";
import gal1 from "../assets/Craft/gal1.jpg";
import gal2 from "../assets/Craft/gal2.jpg";
import gal3 from "../assets/Craft/gal3.jpg";
import gal4 from "../assets/Craft/gal4.jpg";
import gal5 from "../assets/Craft/gal5.jpg";


const Craft = () => {
  const OPTIONS = { dragFree: true, loop: true };
  const SLIDES = [gal1, gal2, gal3, gal4, gal5];
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
    <div className="bg-[#fff5de] text-[#8a733e] w-full h-full">
        <div id="navbar" className="fixed top-0 right-0 left-0 transition-all duration-200 z-20">
            <Navbar />
        </div>
        <div className="pt-20 pb-4 bg-[#fff5de] text-[#8a733e] w-full flex flex-col justify-center items-center">
            <h1 className="text-center text-8xl lg:text-9xl 2xl:text-[10rem] font-almendra">CRAFT</h1>
        </div>
        <div className="h-full">
            <div className="w-full h-14 flex justify-end items-center bg-[#8a733e] border-2 border-yellow-950">
                  <div className="flex justify-end items-top gap-1 w-full p-2">
                    <div className="border-2 px-2 flex justify-center items-center cursor-pointer bg-[#fff5de] border-yellow-950 rounded-xl">
                      <img onClick={() => setShowSlide("parallax")}  src={parallax} className="h-10"/>
                    </div>
                    <div className="border-2 px-2 flex justify-center items-center cursor-pointer bg-[#fff5de] border-yellow-950 rounded-xl">
                      <img onClick={() => setShowSlide("scroller")} src={scroller} className="h-9"/>
                    </div>
                  </div>
            </div>
            <div className="w-full my-14">
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