import { spring } from "motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "motion/react";
import starry from "../assets/starry.jpg";
import { useEffect } from "react";

const About = () => {

  useEffect(()=> {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, [])
  

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
    <div className="bg-[#161E43] h-full flex flex-col justify-center sm:pb-16">
    <img src={starry} alt="background-image-starry" className="mt-16"/>
      <div className="bg-black relative border-2 border-white bg-opacity-85 p-4 rounded-xl mx-4 md:mx-16 lg:mx-24 xl:mx-48 2xl:mx-[25rem] 3xl:mx-[30rem] 4xl:mx-[40rem] -mt-16 xsm:-mt-[12rem] sm:-mt-[17rem] md:-mt-[22rem] lg:-mt-[30rem] xl:-mt-[40rem] 2xl:-mt-[49rem] 3xl:-mt-[59rem] 4xl:-mt-[80rem] mb-14 h-3/4 flex justify-center items-center flex-col">
          <h1 className="text-white font-thin text-9xl lg:text-[10rem] font-madi -mt-20 about absolute -top-1">About</h1>
          <div className="overflow-hidden">
          <motion.p
          initial = {{ y: "100vh"}}
          animate = {{y: 0}}
          transition={{ duration: 5, type: spring, stiffness: 30}} 
          className="text-white text-xl sm:text-2xl overflow-hidden mt-12 md:mt-14 mb-6 md:mb-20 text-center font-raleway font-semibold sm:px-2 lg:px-10 xl:px-16">
            I am a professional artist who likes to work with artistic acrylic colors and watercolors. I have been painting for more than 25 years and planning to create innovative work and learn new things in the future. I started my artistic journey from my school days where I liked drawing, painting and from that moment onwards, I decided to take up art as a career. 
            I am from Gwalior from where I also pursued a National Diploma in Fine Art at the Government Institute of Fine Arts, along with an MA in Drawing &amp; Painting from Jiwaji University. In one second year, I participated in the Intermediate Grade Drawing Examination by the Government of Maharashtra and receive an A grade. Later in my third year, I won the Late L .S. Rajput Memorial painting Award for one of my drawings. I was also awarded a certificate by Madhya Pradesh Tulsi Academy during my time at the institute 
            I don&apos;t focus on any specific type of art, because I keep trying something new painting the only constant thing in my artwork is figurative art but the style keeps varying mostly from Knife
            painting, brush, abstract, modern art, etc
            In college, my painting was listed in the Manas Bhavan Gwalior Exhibition, after that, it was listed in Bharat Bhawan Bhopal
            Right now, I am planning to participate in various embodiments to show my artwork.
          </motion.p>
          </div>
      </div>
    </div>
    <div className="z-50 absolute w-full bg-black 4xl:pb-56">
      <Footer />
    </div>
    </>
  )
}

export default About