import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import PostSlide from "../components/PostSlide";
import PostContent from "../assets/PostContent";

const Journal = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(()=> {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    setFilteredPosts(PostContent)
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
    <div className="relative pb-80 overflow-hidden min-w-[390px]">
      <div id="navbar" className="fixed top-0 right-0 left-0  z-40 transition-all duration-200">
          <Navbar />
      </div>

      <div className="bg-[#fff5de] h-full flex flex-col justify-center items-center sm:pb-5 my-20">
        <h1 className="text-[#8a733e] border-[#8a733e] border-b-2 font-almendra text-8xl lg:text-9xl 2xl:text-[10rem]">Journal</h1>
        <div className="mt-10 mb-5 lg:mt-20 gap-4 w-full flex justify-center items-center">
          <input onChange={(e) => searchPost(e.target.value)} type="text" placeholder="Type here to search" className="w-5/6 font-enriqueta px-2 py-1 xl:py-2 xl:px-4 rounded-full border-2 xl:text-xl border-[#8a733e]"/>
        </div>
        <div>
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