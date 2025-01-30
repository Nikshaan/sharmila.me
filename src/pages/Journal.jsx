import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import PostSlide from "../components/PostSlide";
import PostContent from "../assets/PostContent";

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
    <div className="relative pb-80 min-h-[100svh] overflow-hidden min-w-[390px] bg-gradient-to-b from-black to-[#14014f]">
      <div id="navbar" className="fixed top-0 right-0 left-0 z-40 transition-all duration-200">
          <Navbar />
      </div>

      <div className="h-full lg:pt-16 flex flex-col justify-center items-center sm:pb-5 my-20">
        <h1 className="border-b-2 pt-4 font-domine text-7xl lg:text-8xl 2xl:text-9xl text-white border-[#6fb3f2]">JOURNAL</h1>
        <div className="mt-10 mb-5 lg:mt-20 gap-4 w-full flex justify-center items-center">
          <input onChange={(e) => searchPost(e.target.value)} type="text" placeholder="Type here to search" className="w-5/6 h-10 font-raleway px-2 py-1 xl:py-2 xl:px-4 border-2 xl:text-xl bg-white bg-opacity-15 text-white"/>
        </div>
        <div className="grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6">
          {
            filteredPosts.map((post) =>
              <PostSlide key={post.id} id={post.id} img={post.img} title={post.title} author={post.author} readTime={post.time} date={post.date} />
          )
          }
        </div>
      </div>

      <div className="z-40 absolute bottom-0 w-full mt-14">
        <Footer />
      </div>
    </div>
  )
}

export default Journal