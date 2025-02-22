import { useParams } from "react-router-dom";
import { SLIDES } from "../gallery/Paintings";
import paintingsDesc from "../assets/paintingsDesc";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const PaintingPage = () => {
    const{ paintingID } = useParams();

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
    <div className="w-full m-auto h-full flex flex-col items-center">
        <div id="navbar" className="fixed top-0 right-0 left-0 z-40 transition-all duration-200">
            <Navbar />
        </div>

        <div className="flex flex-col lg:flex-row w-[80%] 2xl:w-[70%] 4xl:w-[60%] m-auto justify-center items-center lg:pt-24 lg:items-start lg:justify-between gap-10 h-full py-20">
            <img src={SLIDES[paintingID]} className="w-full border-2 p-1 lg:w-1/2 border-black"/>
            <div className="w-full h-full flex flex-col items-start justify-start gap-2 font-raleway font-light lg:mt-0 -mt-4">
                <p className="text-xl sm:text-2xl 2x:text-3xl font-medium font-domine">{paintingsDesc[paintingID].name?`${paintingsDesc[paintingID].name}`:null}</p>
                <p className="text-sm 2xl:text-base">Size: {paintingsDesc[paintingID].dimensions?`${paintingsDesc[paintingID].dimensions}`:null} cm</p>
                <p className="text-sm 2xl:text-base">Price: ₹ {paintingsDesc[paintingID].price?`${paintingsDesc[paintingID].price}`:null}</p>
                <p className=" my-1 text-sm 2xl:text-base bg-[#f23a11] border-2 px-3 font-medium py-1 bg-opacity-45 border-black rounded-full">{paintingsDesc[paintingID].available === true?`AVAILABLE`:`UNAVAILABLE`}</p>
                <p className="text-base font-raleway sm:text-lg">{paintingsDesc[paintingID].longDesc?`${paintingsDesc[paintingID].longDesc}`: paintingsDesc[paintingID].shortDesc?`${paintingsDesc[paintingID].shortDesc}`:null}</p>
            </div>
        </div>

        <div className="z-40  -mt-5 lg:w-[80%] 2xl:w-[60%]">
            <Footer />
        </div>
    </div>
  )
}

export default PaintingPage