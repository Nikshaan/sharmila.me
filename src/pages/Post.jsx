import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import PostContent from "../assets/PostContent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import back from "../assets/back.png";

const Post = () => {
    const{postTitle} = useParams();
    const [currPost, setCurrPost] = useState({});

    const fetchPostData = () => {
        PostContent.map((post) => {
            if(post.title == postTitle){
                setCurrPost(post)
            }
        })
    }

    useEffect(() => {
      async function func() {
        await fetchPostData();
        }
      func();
      document.getElementById("content").innerHTML = currPost.content;
      }, [currPost]);

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
    <div className="bg-[#fff5de] text-black">
        <div id="navbar" className="fixed top-0 right-0 left-0 transition-all duration-200 z-50">
            <Navbar />
        </div>
        <div className="w-full mt-16 relative text-center font-raleway">
            <Link to="/sharmila.me/journal">
                <img src={back} className="h-8 absolute top-2 bg-white rounded-full z-20"/>
            </Link>
            <img src={currPost.img} />
            <div className="absolute top-0 bottom-0 flex flex-col text-white bg-black bg-opacity-45 justify-center items-center w-full p-2">
                <p className="font-bold text-4xl sm:text-6xl lg:text-8xl">{currPost.title}</p>
                <p className="font-medium text-2xl sm:text-4xl lg:text-6xl">{currPost.author}</p>
            </div>
            <div className="flex justify-between items-center px-2 gap-4  text-md sm:text-2xl lg:text-3xl font-bold">
                <p>{currPost.time} read</p>
                <p>Posted on {currPost.date}</p>
            </div>
        </div>
        <div id="content" className="my-10 lg:my-20 p-2 text-xl sm:text-3xl lg:text-4xl font-nunito flex flex-col gap-4" />
        <Footer />
    </div>
  )
}

export default Post