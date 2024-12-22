import Navbar from "../components/Navbar";
import EmblaCarousel from "../components/EmblaCarousel";
import Footer from "../components/Footer";
import parallax from "../assets/parallax.png";
import scroller from "../assets/scroller.png";
import { useEffect, useState } from "react";
import ScrollView from "../components/ScrollView";
import gal1 from "../assets/Paintings/gal1.jpg";
import gal2 from "../assets/Paintings/gal2.jpg";
import gal3 from "../assets/Paintings/gal3.jpg";
import gal4 from "../assets/Paintings/gal4.jpg";
import gal5 from "../assets/Paintings/gal5.jpg";
import gal6 from "../assets/Paintings/gal6.jpg";
import gal7 from "../assets/Paintings/gal7.jpg";
import gal8 from "../assets/Paintings/gal8.jpg";
import gal9 from "../assets/Paintings/gal9.jpg";
import gal10 from "../assets/Paintings/gal10.jpg";
import gal11 from "../assets/Paintings/gal11.jpg";
import gal12 from "../assets/Paintings/gal12.jpg";
import gal13 from "../assets/Paintings/gal13.jpg";
import gal14 from "../assets/Paintings/gal14.jpg";
import gal15 from "../assets/Paintings/gal15.jpg";
import gal16 from "../assets/Paintings/gal16.jpg";
import gal17 from "../assets/Paintings/gal17.jpg";
import gal18 from "../assets/Paintings/gal18.jpg";
import gal19 from "../assets/Paintings/gal19.jpg";
import gal20 from "../assets/Paintings/gal20.jpg";
import gal21 from "../assets/Paintings/gal21.jpg";
import gal22 from "../assets/Paintings/gal22.jpg";
import gal23 from "../assets/Paintings/gal23.jpg";
import gal24 from "../assets/Paintings/gal24.jpg";
import gal25 from "../assets/Paintings/gal25.jpg";
import gal26 from "../assets/Paintings/gal26.jpg";
import gal27 from "../assets/Paintings/gal27.jpg";
import gal28 from "../assets/Paintings/gal28.jpg";
import gal29 from "../assets/Paintings/gal29.jpg";
import gal30 from "../assets/Paintings/gal30.jpg";
import gal31 from "../assets/Paintings/gal31.jpg";
import gal32 from "../assets/Paintings/gal32.jpg";
import gal33 from "../assets/Paintings/gal33.jpg";
import gal34 from "../assets/Paintings/gal34.jpg";
import gal35 from "../assets/Paintings/gal35.jpg";
import gal36 from "../assets/Paintings/gal36.jpg";
import gal37 from "../assets/Paintings/gal37.jpg";
import gal38 from "../assets/Paintings/gal38.jpg";
import gal39 from "../assets/Paintings/gal39.jpg";
import gal40 from "../assets/Paintings/gal40.jpg";
import gal41 from "../assets/Paintings/gal41.jpg";
import gal42 from "../assets/Paintings/gal42.jpg";
import gal43 from "../assets/Paintings/gal43.jpg";
import gal44 from "../assets/Paintings/gal44.jpg";
import gal45 from "../assets/Paintings/gal45.jpg";
import gal46 from "../assets/Paintings/gal46.jpg";
import gal47 from "../assets/Paintings/gal47.jpg";
import gal48 from "../assets/Paintings/gal48.jpg";
import gal49 from "../assets/Paintings/gal49.jpg";
import gal50 from "../assets/Paintings/gal50.jpg";
import gal51 from "../assets/Paintings/gal51.jpg";
import gal52 from "../assets/Paintings/gal52.jpg";
import gal53 from "../assets/Paintings/gal53.jpg";
import gal54 from "../assets/Paintings/gal54.jpg";
import gal55 from "../assets/Paintings/gal55.jpg";
import gal56 from "../assets/Paintings/gal56.jpg";
import gal57 from "../assets/Paintings/gal57.jpg";
import gal58 from "../assets/Paintings/gal58.jpg";
import gal59 from "../assets/Paintings/gal59.jpg";
import gal60 from "../assets/Paintings/gal60.jpg";
import gal61 from "../assets/Paintings/gal61.jpg";
import gal62 from "../assets/Paintings/gal62.jpg";
import gal63 from "../assets/Paintings/gal63.jpg";
import gal64 from "../assets/Paintings/gal64.jpg";
import gal65 from "../assets/Paintings/gal65.jpg";
import gal66 from "../assets/Paintings/gal66.jpg";
import gal67 from "../assets/Paintings/gal67.jpg";
import gal81 from "../assets/Paintings/gal81.jpg";
import gal82 from "../assets/Paintings/gal82.jpg";
import gal83 from "../assets/Paintings/gal83.jpg";
import gal84 from "../assets/Paintings/gal84.jpg";
import gal85 from "../assets/Paintings/gal85.jpg";
import gal86 from "../assets/Paintings/gal86.jpg";
import gal87 from "../assets/Paintings/gal87.jpg";
import gal88 from "../assets/Paintings/gal88.jpg";
import gal89 from "../assets/Paintings/gal89.jpg";
import gal90 from "../assets/Paintings/gal90.jpg";
import gal91 from "../assets/Paintings/gal91.jpg";
import gal92 from "../assets/Paintings/gal92.jpg";
import gal93 from "../assets/Paintings/gal93.jpg";
import gal94 from "../assets/Paintings/gal94.jpg";
import gal95 from "../assets/Paintings/gal95.jpg";
import gal96 from "../assets/Paintings/gal96.jpg";
import gal97 from "../assets/Paintings/gal97.jpg";
import gal98 from "../assets/Paintings/gal98.jpg";
import gal99 from "../assets/Paintings/gal99.jpg";
import gal100 from "../assets/Paintings/gal100.jpg";
import gal101 from "../assets/Paintings/gal101.jpg";
import gal102 from "../assets/Paintings/gal102.jpg";
import gal103 from "../assets/Paintings/gal103.jpg";
import gal104 from "../assets/Paintings/gal104.jpg";
import gal105 from "../assets/Paintings/gal105.jpg";
import gal106 from "../assets/Paintings/gal106.jpg";
import gal107 from "../assets/Paintings/gal107.jpg";
import gal108 from "../assets/Paintings/gal108.jpg";
import gal109 from "../assets/Paintings/gal109.jpg";
import gal110 from "../assets/Paintings/gal110.jpg";
import gal111 from "../assets/Paintings/gal111.jpg";

const Paintings = () => {
  const OPTIONS = { dragFree: true, loop: true }
  const SLIDES = [gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8, gal9, gal10, gal11, gal12, gal13, gal14, gal15, gal16, gal17, gal18, gal19, gal20,
     gal21, gal22, gal23, gal24, gal25, gal26, gal27, gal28, gal29, gal30, gal31, gal32, gal33, gal34, gal35, gal36, gal37, gal38, gal39, gal40,
     gal41, gal42, gal43, gal44, gal45, gal46, gal47, gal48, gal49, gal50, gal51, gal52, gal53, gal54, gal55, gal56, gal57, gal58, gal59, gal60,
     gal61, gal62, gal63, gal64, gal65, gal66, gal67, gal81, gal82, gal83, gal84, gal85, gal86, gal87, gal88, gal89, gal90, gal91, gal92, gal93,
     gal94, gal95, gal96, gal97, gal98, gal99, gal100, gal101, gal102, gal103, gal104, gal105, gal106, gal107, gal108, gal109, gal110, gal111];
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
            <h1 className="text-white gallery text-center text-7xl font-playwrite">PAINTINGS</h1>
        </div>
        <div className="h-full">
            <div className="w-full h-14 text-white flex justify-end items-center bg-green-950">
                  <div className="flex justify-end items-top gap-1 w-full p-2 border-2">
                    <div onClick={() => setShowSlide("parallax")} className="border-2 px-2 flex justify-center items-center cursor-pointer bg-[#5F823C] rounded-xl">
                      <img src={parallax} className="h-10"/>
                    </div>
                    <div onClick={() => setShowSlide("scroller")} className="border-2 px-2 flex justify-center items-center cursor-pointer bg-[#5F823C] rounded-xl">
                      <img src={scroller} className="h-9"/>
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
export default Paintings