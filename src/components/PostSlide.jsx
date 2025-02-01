import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { spring } from "motion";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from "react-lazy-load-image-component";

const PostSlide = ({id, img, title, author, date, readTime }) => {
    PostSlide.propTypes = {
        id: PropTypes.any,
        img: PropTypes.any,
        title: PropTypes.any,
        author: PropTypes.any,
        date: PropTypes.any,
        readTime: PropTypes.any,
        content: PropTypes.any,
        index: PropTypes.any,
      };
  return (
    <motion.div
    initial = {{ x: "100vh"}}
    animate = {{x: 0}}
    transition={{ duration: 4, type: spring, stiffness: 30}} 
    className="m-5 border-2 border-[#0f1b61] shadow-md shadow-[#0f1b61] hover:shadow-lg hover:shadow-[#0f1b61] transition-shadow duration-300 cursor-pointer pb-8">
        <Link to={`/sharmila.me/journal/post/${id}`} className="flex flex-col p-1 2xl:p-2 gap-3">
        <div className=" md:w-full">
            <LazyLoadImage effect="blur" src={img} placeholderSrc={img} alt="poster" className="w-full border-[#0f1b61] border-2"/>
        </div>
        <div className="flex w-full flex-col justify-center items-center sm:text-center gap-1 xl:gap-4 p-1 font-domine pb-2">
            <h1 className="font-extrabold text-3xl sm:text-3xl text-center w-full">{title}</h1>
            <p className="text-xl  lg:text-2xl  text-center text-[#6fb3f2]">{author}</p>
            <p className="text-lg sm:text-xl  text-center font-raleway">{readTime} read</p>
            <p className="text-lg sm:text-xl text-center font-raleway">Posted on {date}</p>
        </div>
        </Link>
    </motion.div>
  )
}

export default PostSlide