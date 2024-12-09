import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import mit from "../assets/mit.jpg"
//homepage bg, img alt, set website image and title
const Journal = () => {
  return (
    <>
    <div className="absolute top-0 right-0 left-0">
        <Navbar />
    </div>
    <div className="bg-[#BF0329] h-full flex flex-col justify-center sm:pb-16">
    <img src={mit} className="mt-16"/>
      <div className="bg-black relative border-2 border-white bg-opacity-65 p-4 rounded-xl mx-4 md:mx-10 lg:mx-16 -mt-32 sm:-mt-[26rem] lg:-mt-[35rem] xl:-mt-[47rem] mb-14 h-screen flex justify-center items-center flex-col">
        <h1 className="text-white font-thin text-9xl font-madi -mt-20 journal absolute -top-1">Journal</h1>
      </div>
    </div>
    <div className="z-50 absolute w-full">
      <Footer />
    </div>
    </>
  )
}

export default Journal