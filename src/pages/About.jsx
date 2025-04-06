import { spring } from "motion";
import Footer from "../components/Footer";
import { motion } from "motion/react";
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
    <motion.div
    initial = {{ y: "100vh"}}
    animate = {{y: 0}}
    transition={{ duration: 0.2, type: spring, stiffness: 30}}
    exit={{ y: "100vh" }} 
    className="relative pb-80 min-w-[390px] w-[80%] 2xl:w-[60%] m-auto min-h-[100svh] h-full bg-white flex flex-col items-center">

    <div className="pt-16 mt-2 lg:pt-[4.5rem] h-full flex flex-col justify-center items-center sm:pb-5 overflow-hidden">
        <h1 className="border-b-2 border-[#f23a11] lg:mb-8 text-5xl lg:text-5xl 2xl:text-6xl font-manrope">ABOUT</h1>

        <motion.div
        initial = {{ y: "100vh"}}
        animate = {{y: 0}}
        transition={{ duration: 5, type: spring, stiffness: 30}}
        exit={{ y: "100vh" }} 
        className="overflow-hidden mb-16 mt-6 2xl:mt-0 sm:px-10 md:px-20">
        <p className="text-lg sm:text-xl 2xl:text-2xl overflow-hidden text-left font-raleway font-medium px-8 sm:px-2 lg:px-10 xl:px-16">
          I am a professional artist who likes to work with artistic acrylic colors and watercolors. I have been painting for more than 25 years and planning to create innovative work and learn new things in the future. I started my artistic journey from my school days where I liked drawing, painting and from that moment onwards, I decided to take up art as a career. 
        </p>
        <p className="text-lg sm:text-xl 2xl:text-2xl overflow-hidden mt-8 text-left font-raleway px-8 sm:px-2 lg:px-10 xl:px-16">
          I am from Gwalior from where I also pursued a National Diploma in Fine Art at the Government Institute of Fine Arts, along with an MA in Drawing &amp; Painting from Jiwaji University. In one second year, I participated in the Intermediate Grade Drawing Examination by the Government of Maharashtra and receive an A grade. Later in my third year, I won the Late L .S. Rajput Memorial painting Award for one of my drawings. I was also awarded a certificate by Madhya Pradesh Tulsi Academy during my time at the institute. 
        </p>
        <p className="text-lg sm:text-xl 2xl:text-2xl overflow-hidden mt-8 text-left font-raleway font-medium px-8 sm:px-2 lg:px-10 xl:px-16">
          I don&apos;t focus on any specific type of art, because I keep trying something new painting the only constant thing in my artwork is figurative art but the style keeps varying mostly from Knife
          painting, brush, abstract, modern art, etc
          In college, my painting was listed in the Manas Bhavan Gwalior Exhibition, after that, it was listed in Bharat Bhawan Bhopal
          Right now, I am planning to participate in various embodiments to show my artwork.
        </p>
        </motion.div>
    </div>
    
    <div className="z-40 absolute bottom-0 -mt-5 lg:w-[80%]">
      <Footer />
    </div>
    
    </motion.div>
  )
}

export default About