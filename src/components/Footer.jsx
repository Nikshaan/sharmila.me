import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import gmail from "../assets/gmail.png";

const Footer = () => {
  return (
    <div className="pt-5 p-2.5 flex flex-col justify-center items-center text-white">
      <div className="flex justify-between items-center border-b-2 border-[#6fb3f2] pb-2.5 w-full pl-2">
        <div>
          <p className="text-4xl lg:text-5xl mt-2 ml-1 text-end font-domine font-extrabold duration-200 text-[#7f00e0]">SS.</p>
        </div>
        
        <div className="flex gap-4 sm:gap-6">
            <Link to="https://www.facebook.com/sharmila.sharma.7739"> 
              <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Facebook" src={facebook} alt="facebook" className="w-9 h-9 sm:w-10 sm:h-10 cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-[#6fb3f2] rounded-full border-2 border-[#0f1b61]"/>
            </Link>
            <Link to="https://x.com/sharmilaart">
              <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Twitter" src={twitter} alt="twitter" className="w-9 h-9 sm:w-10 sm:h-10 cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-[#6fb3f2] rounded-full border-2 border-[#0f1b61]"/>
            </Link>
            <Link to="https://www.instagram.com/sharmila.sharma31/">
              <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Instagram" src={instagram} alt="instagram" className="w-9 h-9 sm:w-10 sm:h-10 cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-[#6fb3f2] rounded-full border-2 border-[#0f1b61]"/>
            </Link>
            <Link to="mailto:sharmila.sharma31@gmail.com">
              <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content="Email" src={gmail} alt="gmail" className="w-9 h-9 sm:w-10 sm:h-10 cursor-pointer hover:scale-110 duration-200 hover:shadow-md hover:shadow-[#6fb3f2] rounded-full border-2 border-[#0f1b61]"/>
            </Link>
            <Tooltip id="my-tooltip" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center p-3 my-5 ">
            <p className="text-center text-lg sm:text-2xl lg:text-2xl font-medium font-raleway text-[#0f1b61]">SUBSCRIBE TO RECEIVE POSTS DIRECTLY TO YOUR INBOX</p>
            <div className="flex w-full sm:text-lg lg:text-xl  gap-4 justify-center items-center mt-4 font-raleway">
                <input type="text" placeholder="Enter your email address" className="px-2 py-1 w-full rounded-sm text-black border-2 border-[#6fb3f2]"/>
                <button className="px-2 py-0.5 text-nowrap text-[#0f1b61] rounded-sm border-[#6fb3f2] hover:bg-[#6fb3f2] duration-300 transition-all border-2"> Get notified!</button>
            </div>
        </div>
        
        <div className="mb-10">
            <p className="text-sm sm:text-lg lg:text-xl font-domine font-thin text-[#0f1b61]">Copyright © Sharmila Sharma 2025</p>
        </div>
    </div>
  )
}

export default Footer