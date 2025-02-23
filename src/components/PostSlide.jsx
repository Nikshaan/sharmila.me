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
    className="m-5 border-2 bg-[#ebeef0] border-black shadow-sm shadow-[#f23a11] hover:shadow-md hover:shadow-[#f23a11] transition-shadow duration-300 cursor-pointer pb-2">
        <Link to={`/sharmila.me/journal/post/${id}`} className="flex flex-col p-1 2xl:p-2 gap-3">
        <div className=" md:w-full">
            <LazyLoadImage effect="blur" src={img} placeholderSrc={img} alt="poster" className="w-full border-black border-2"/>
        </div>
        <div className="flex w-full flex-col justify-start items-start gap-1 xl:gap-2 p-1 pl-2 font-domine pb-2">
            <h1 className="font-extrabold text-left text-3xl sm:text-2xl w-full">{title}</h1>
            <p className="text-xl  lg:text-xl text-[#f23a11]">{author}</p>
            <p className="text-lg sm:text-lg font-raleway">{readTime} read</p>
            <p className="text-lg sm:text-lg font-raleway">Posted on {date}</p>
        </div>
        </Link>
    </motion.div>
  )
}

export default PostSlide