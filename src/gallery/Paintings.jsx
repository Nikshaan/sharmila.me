import Navbar from "../components/Navbar"
import home01 from "../assets/homePage/home01.jpg";
import gal55 from "../assets/homePage/gal55.jpg";
import gal57 from "../assets/homePage/gal57.jpg";
import gal63 from "../assets/homePage/gal63.jpeg";
import EmblaCarousel from "../components/EmblaCarousel";
import Footer from "../components/Footer";

const Paintings = () => {
  const OPTIONS = { dragFree: true, loop: true }
  const SLIDES = [home01, gal55, gal57, gal63]

  var prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else if (currentScrollPos >= 64) {
    document.getElementById("navbar").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}
  return (
    <div className="bg-[#5F823C] w-full">
        <div id="navbar" className="fixed bg-[#5F823C] top-0 right-0 left-0 transition-all duration-200 z-50">
            <Navbar />
        </div>
        <div className="pt-20 w-full flex flex-col justify-center items-center">
            <h1 className="text-white gallery text-center text-7xl font-playwrite">PAINTINGS</h1>
        </div>
        <div className="h-full mt-7">
            <div className="w-full h-14 text-white flex justify-end items-center px-4">
                  <div className="flex gap-4 cursor-pointer">
                      <p>Parallax</p>
                      <p>Normal</p>
                  </div>
            </div>
            <div className="w-full my-7">
              <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>
        </div>
        <Footer />
    </div>
  )
}
export default Paintings