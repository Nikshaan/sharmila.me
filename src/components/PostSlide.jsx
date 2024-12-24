import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PostSlide = ({img, title, author, date, readTime }) => {
    PostSlide.propTypes = {
        img: PropTypes.any,
        title: PropTypes.any,
        author: PropTypes.any,
        date: PropTypes.any,
        readTime: PropTypes.any,
        content: PropTypes.any,
      };
  return (
    <div className="m-5 border-2 border-black bg-white">
        <Link to={`/sharmila.me/post/${title}`} className="flex flex-col sm:flex-row p-1 gap-3">
        <div className=" md:w-1/2">
            <img src={img} />
        </div>
        <div className="flex flex-col justify-center items-center sm:text-center gap-1 xl:gap-4 p-1 font-montserrat sm:w-1/2">
            <h1 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">{title}</h1>
            <p className="font-bold text-xl lg:text-2xl">{author}</p>
            <p className="text-lg lg:text-xl">{readTime} read</p>
            <p className="text-lg lg:text-xl">Posted on {date}</p>
        </div>
        </Link>
    </div>
  )
}

export default PostSlide