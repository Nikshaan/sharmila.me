import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import mit from "../assets/mit.jpg"

const Journal = () => {

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
    <>
    <div id="navbar" className="fixed top-0 right-0 left-0 transition-all duration-200 z-50">
        <Navbar />
    </div>
    <div className="bg-[#BF0329] h-full flex flex-col justify-center sm:pb-16">
    <img src={mit} alt="background-image-mit" className="mt-16"/>
      <div className="bg-black relative border-2 border-white bg-opacity-65 p-4 rounded-xl mx-4 md:mx-10 lg:mx-16 -mt-32 xsm:-mt-[17rem] sm:-mt-[24rem] md:-mt-[30rem] lg:-mt-[41rem] xl:-mt-[53rem] 2xl:-mt-[64rem] 3xl:-mt-[78rem] 4xl:-mt-[92rem] mb-14 h-screen flex justify-start items-center flex-col">
        <h1 className="text-white font-thin text-9xl font-madi -mt-20 journal absolute -top-1">Journal</h1>
        <div className="mt-10 gap-4 w-full flex justify-center items-center">
          <input type="text" placeholder="Type here to search" className="w-5/6 px-2 py-1 rounded-full border-2 border-red-600"/>
        </div>
      </div>
    </div>
    <div className="z-50 absolute w-full">
      <Footer />
    </div>
    </>
  )
}

export default Journal