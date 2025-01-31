import Navbar from "../components/Navbar";
import EmblaCarousel from "../components/EmblaCarousel";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import ScrollView from "../components/ScrollView";
import gal1 from "../assets/Craft/gal1.jpg";
import gal2 from "../assets/Craft/gal2.jpg";
import gal3 from "../assets/Craft/gal3.jpg";
import gal4 from "../assets/Craft/gal4.jpg";
import gal5 from "../assets/Craft/gal5.jpg";
import Toggle from "react-toggle";
import craftDesc from "../assets/craftDesc";

const Craft = () => {
  const OPTIONS = { dragFree: true, loop: true };
  const SLIDES = [gal1, gal2, gal3, gal4, gal5];
  const [showSlide, setShowSlide] = useState("scroller");

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

const viewMode = () => {
  if(showSlide == "scroller"){
    setShowSlide("parallax");
  }else{
    setShowSlide("scroller");
  }
}

  return (
    <div className="w-[80%] 2xl:w-[70%] 4xl:w-[60%] m-auto h-full bg-transparent">
        <div id="navbar" className="fixed top-0 right-0 left-0 transition-all duration-200 z-20">
            <Navbar />
        </div>

        <div className="pt-20 pb-4 w-full flex flex-col justify-center items-center">
            <h1 className="text-center text-6xl lg:text-8xl pt-12 font-manrope text-white">CRAFT</h1>
        </div>

        <div className="h-full">
            <div className="w-full text-black h-14 flex justify-end items-center border-2 px-4 bg-[#6fb3f2] font-raleway">
              <p className="pb-1.5 font-bold">COLUMNS</p>
              <label className="px-2">
                <Toggle
                  defaultChecked={false}
                  icons={false}
                  onChange={() => viewMode()} />
              </label>
              <p className="pb-1.5 font-bold">PARALLAX</p>
            </div>

            <div className="w-full my-14">
              {
                showSlide == "parallax" && <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
              }
              {
                showSlide == "scroller" && <ScrollView slides={SLIDES} desc={craftDesc}/>
              }
            </div>
            
        </div>
        <Footer />
     </div>
  )
}

export default Craft