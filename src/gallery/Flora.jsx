import Navbar from "../components/Navbar";
import EmblaCarousel from "../components/EmblaCarousel";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import ScrollView from "../components/ScrollView";
import gal1 from "../assets/Flora/gal1.jpg";
import gal2 from "../assets/Flora/gal2.jpg";
import gal3 from "../assets/Flora/gal3.jpg";
import gal4 from "../assets/Flora/gal4.jpg";
import Toggle from "react-toggle";
import floraDesc from "../assets/floraDesc";

const Flora = () => {
  const OPTIONS = { dragFree: true, loop: true };
  const SLIDES = [gal1, gal2, gal3, gal4];
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

function resize() {
  if (screen.width < 640) {     
  setShowSlide("parallax");
  }
  else {
  setShowSlide("scroller");
  }
}
useEffect(() => resize(), []);

  return (
    <div className="w-full xsm:w-[80%] 2xl:w-[70%] 4xl:w-[60%] m-auto h-full bg-transparent">
        <div id="navbar" className="fixed top-0 right-0 left-0 transition-all duration-200 z-20">
            <Navbar />
        </div>
        
        <div className="pt-8 pb-4 w-full flex flex-col justify-center items-center">
            <h1 className="text-center text-5xl lg:text-5xl font-manrope pt-12 border-b-2 border-[#f23a11]">FLORA</h1>
        </div>

        <div className="h-full">
            <div className="w-full text-black h-14 mb-4 flex justify-end items-center border-2 bg-[#ebeef0] border-black px-4 font-raleway">
              <p className="pb-1.5 font-bold">CHANGE VIEW</p>
              <label className="px-2">
                <Toggle
                  defaultChecked={false}
                  icons={false}
                  onChange={() => viewMode()} />
              </label>
            </div>
            
            <div className="w-full mb-14">
              {
                showSlide == "parallax" && <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
              }
              {
                showSlide == "scroller" && <ScrollView slides={SLIDES} desc={floraDesc}/>
              }
            </div>

        </div>
        <Footer />
      </div>
  )
}

export default Flora