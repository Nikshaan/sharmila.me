import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { spring } from "motion";

const PostSlide = ({img, title, author, date, readTime }) => {
    PostSlide.propTypes = {
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
    className="m-5 xl:mx-32 4xl:mx-96 border-2 border-[#8a733e] bg-[#fffaef] shadow-md shadow-[#8a733e] hover:shadow-lg hover:shadow-[#8a733e] transition-shadow">
        <Link to={`/sharmila.me/post/${title}`} className="flex flex-col sm:flex-row p-1 2xl:p-2 gap-3">
        <div className=" md:w-1/2">
            <img src={img} className="w-full border-2 border-black"/>
        </div>
        <div className="flex flex-col justify-center items-center sm:text-center gap-1 xl:gap-4 p-1 font-enriqueta sm:w-1/2">
            <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl 2xl:text-7xl">{title}</h1>
            <p className="font-semibold text-2xl  sm:text-3xl lg:text-3xl 2xl:text-5xl">{author}</p>
            <p className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl">{readTime} read</p>
            <p className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl">Posted on {date}</p>
        </div>
        </Link>
    </motion.div>
  )
}

export default PostSlide