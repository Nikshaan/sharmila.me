import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import PostSlide from "../components/PostSlide";
import PostContent from "../assets/PostContent";
import { motion } from "motion/react";
import Navbar from "../components/Navbar";

const Journal = () => {
  const [filteredPosts, setFilteredPosts] = useState(PostContent);

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

  const searchPost = (value) => {
  let newPosts = PostContent.slice();
  newPosts = newPosts.filter(post => post.title.toLowerCase().includes(value.toLowerCase()));
  setFilteredPosts(newPosts);
  }

  return (
    <>
    <div className="absolute top-0 right-0 left-0 transition-all duration-200 z-40">
            <Navbar />
          </div>
    
    <motion.div className="relative pb-80 min-h-[100svh]  min-w-[390px] w-[80%] 2xl:w-[60%] m-auto bg-transparent"> 
      <div className="h-full flex flex-col justify-center items-center sm:pb-5 my-20">
        <motion.div
        initial = {{ x: "-200vh"}}
        animate = {{x: 0}}
        transition={{ duration: 2, ease: "backInOut" }}
        exit={{ x: "200vh" }} 
        className="min-w-[390px] w-[80%] 2xl:w-[60%] m-auto">
        <h1 className="font-manrope text-5xl lg:text-5xl 2xl:text-6xl underline decoration-[#f23a11] decoration-2 underline-offset-8  text-center">JOURNAL</h1>
        <div className="mb-5 mt-5 gap-4 w-full flex justify-center items-center">
          <input onChange={(e) => searchPost(e.target.value)} type="text" placeholder="Type here to search" className="w-5/6 h-10 font-raleway px-2 py-1 xl:py-2 xl:px-2 border-2 text-black border-black xl:text-lg bg-[#ebeef0] bg-opacity-15"/>
        </div>
      </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-3 4xl:grid-cols-4">
          {
            filteredPosts.map((post) =>
              <PostSlide key={post.id} id={post.id} img={post.img} title={post.title} author={post.author} readTime={post.time} date={post.date} />
          )
          }
        </div>
      </div>

      <motion.div className="z-40 absolute bottom-0 w-full mt-14">
        <Footer />
      </motion.div>
    </motion.div>
    </>
  )
}

export default Journal
