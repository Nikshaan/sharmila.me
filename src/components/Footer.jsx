import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import gmail from "../assets/gmail.png";

const Footer = () => {
  return (
    <div className="pt-5 p-2.5 flex flex-col justify-center items-center text-black">
      <div className="flex justify-between items-center border-b-2 border-[#f23a11] pb-2.5 w-full pl-2">
        <div>
          <p className="text-4xl lg:text-4xl mt-2 ml-1 text-end font-domine font-extrabold duration-200 text-black">SS.</p>
        </div>
        
        <div className="flex gap-2 mt-4">
                        <Link to="https://www.facebook.com/sharmila.sharma.7739">
                          <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Facebook" src={facebook} alt="facebook" className="w-8 h-8 cursor-pointer hover:scale-110 duration-200 hover:shadow-sm hover:shadow-black rounded-full"/>
                        </Link>
                        <Link to="https://x.com/sharmilaart">
                          <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Twitter" src={twitter} alt="twitter" className="w-8 h-8 cursor-pointer hover:scale-110 duration-200 hover:shadow-sm hover:shadow-black rounded-full"/>
                        </Link>
                        <Link to="https://www.instagram.com/sharmila.sharma31/">
                          <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Instagram" src={instagram} alt="instagram" className="w-8 h-8  cursor-pointer hover:scale-110 duration-200 hover:shadow-sm hover:shadow-black rounded-full"/>
                        </Link>
                        <Link to="mailto:sharmila.sharma31@gmail.com">
                          <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Email" src={gmail} alt="gmail" className="w-8 h-8 cursor-pointer hover:scale-110 duration-200 hover:shadow-sm hover:shadow-black rounded-full"/>
                        </Link>
                        <Tooltip id="my-tooltip" />
                    </div>
        </div>

        <div className="flex flex-col justify-center items-center p-3 my-5 ">
            <p className="text-center text-lg sm:text-2xl lg:text-[1.3rem] font-medium font-raleway">SUBSCRIBE TO RECEIVE POSTS DIRECTLY TO YOUR INBOX</p>
            <div className="flex w-full sm:text-lg lg:text-lg  gap-4 justify-center items-center mt-4 font-raleway">
                <input type="text" placeholder="Enter your email address" className="px-2 py-0.5 w-full rounded-sm border-2 border-black bg-[#ebeef0]"/>
                <button className="px-2 py-0.5 text-nowrap rounded-sm duration-300 transition-all border-2 border-black hover:text-white hover:bg-[#f23a11]"> Get notified!</button>
            </div>
        </div>
        
        <div className="mb-10">
            <p className="text-sm sm:text-lg lg:text-xl font-thin">Copyright © Sharmila Sharma 2025</p>
        </div>
    </div>
  )
}

export default Footer