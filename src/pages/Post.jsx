import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PostContent from "../assets/PostContent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import back from "../assets/back.png";
import { useNavigate } from "react-router-dom";

const Post = () => {
    const{postId} = useParams();
    const navigate = useNavigate();
    const [currPost, setCurrPost] = useState({});

    const fetchPostData = () => {
        PostContent.map((post) => {
            if(post.id == postId){
                setCurrPost(post)
            }
          })
        }

    function nextPost() {
      if(currPost.id != PostContent.length){
      navigate(`/sharmila.me/journal/post/${currPost.id + 1}`);
    }}

    function prevPost() {
      if(currPost.id != 1){
      navigate(`/sharmila.me/journal/post/${currPost.id - 1}`);
    }}

    useEffect(() => {
      async function func() {
        await fetchPostData();
        }
      func();
      document.getElementById("content").innerHTML = currPost.content;
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      }, [currPost, postId]);

    var prevScrollpos = window.pageYOffset;

    window.onscroll = () => {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos || currentScrollPos == 0) {
      document.getElementById("navbar").style.top = "0";
    } else if (currentScrollPos >= 64) {
      document.getElementById("navbar").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
    }

  return (
    <div className="bg-gradient-to-b from-black to-[#14014f] text-white min-w-[390px]">
        <div id="navbar" className="fixed top-0 right-0 left-0 transition-all duration-200 z-50">
            <Navbar />
        </div>

        <div className="w-full mt-16 relative text-center font-nunito flex flex-col justify-center items-center">
            <Link to="/sharmila.me/journal">
                <img alt="back" src={back} className="h-8 lg:h-10 absolute top-2 left-2 bg-white rounded-full z-20"/>
            </Link>
            <img alt="poster" src={currPost.img} />
            <div className="absolute top-0 bottom-0 flex flex-col text-white bg-black bg-opacity-75 justify-center items-center w-full p-2">
                <p className="font-bold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">{currPost.title}</p>
                <p className="font-medium text-2xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">{currPost.author}</p>
            </div>
            <div className="flex justify-between bottom-0 items-center px-2 gap-4 text-white absolute w-full text-md sm:text-2xl lg:text-3xl 2xl:text-5xl font-thin">
                <p>{currPost.time} read</p>
                <p>Posted on {currPost.date}</p>
            </div>
        </div>

        <div id="content" className="my-10 xl:px-8 lg:my-20 p-2 text-xl sm:text-2xl lg:text-3xl font-nunito flex flex-col gap-4" />

        <div className="disable-text flex justify-around mb-14 text-lg sm:text-xl lg:text-2xl font-luxury font-thin">
            <p onClick={prevPost} className="cursor-pointer">Previous post</p>
            <p onClick={() => document.body.scrollTop = document.documentElement.scrollTop = 0} className="cursor-pointer">Back to Top</p>
            <p onClick={nextPost} className="cursor-pointer">Next post</p>
        </div>

        <Footer />
    </div>
  )
}

export default Post