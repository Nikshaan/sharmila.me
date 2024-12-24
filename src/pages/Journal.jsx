import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import PostSlide from "../components/PostSlide";
import PostContent from "../assets/PostContent";

const Journal = () => {

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
    <div className="bg-[#fff5de] h-full flex flex-col justify-center items-center sm:pb-16 mt-20">
        <h1 className="text-[#8a733e] border-[#8a733e] border-b-2 font-almendra text-8xl lg:text-[10rem]">Journal</h1>
        <div className="mt-10 mb-5 lg:mt-20 gap-4 w-full flex justify-center items-center">
          <input type="text" placeholder="Type here to search" className="w-5/6 font-raleway px-2 py-1 rounded-full border-2 border-[#8a733e]"/>
        </div>
        {
          PostContent.map((post, index) =>
            <PostSlide key={index} img={post.img} title={post.title} author={post.author} readTime={post.time} date={post.date} />
        )
        }
      </div>
    <div className="z-50 absolute w-full mt-14">
      <Footer />
    </div>
    </>
  )
}

export default Journal