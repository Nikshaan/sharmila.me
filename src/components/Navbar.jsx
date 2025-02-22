import { Link, NavLink } from "react-router-dom";
import { Squash as Hamburger } from 'hamburger-react';
import { useState } from "react";
import { motion } from "motion/react";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    const underline = {
        initial: {width : 0},
        animate: {width : '100%'}
    };
    
  return (
    <div className="w-full min-w-[344px] bg-white font-semibold font-raleway h-16 flex justify-center items-center px-4 text-black lg:py-2">
        <div className="absolute left-2 px-2">
            <Link to="/sharmila.me/">
                <p className="text-2xl font-manrope md:-mt-1.5 lg:text-4xl pt-2 text-end font-extrabold duration-200">SS.</p>
            </Link>
        </div>

        <div>
            <div className="sm:hidden text-lg absolute top-2 right-2 flex flex-col justify-center items-center">
                <Hamburger toggled={isOpen} toggle={setOpen} />
                <div>
                    {
                    isOpen && <div className="z-50 cursor-default mt-1.5 top-12 font-bold rounded-2xl flex flex-col justify-between items-center bg-[#f5fafc] absolute -right-1 border-2">
                        <NavLink to="/sharmila.me/gallery">
                            <p onClick={() => setOpen(false)} className="px-10 py-2 hover:scale-95 duration-200 underline-offset-2">GALLERY</p>
                        </NavLink>
                        <NavLink to="/sharmila.me/journal">
                            <p onClick={() => setOpen(false)} className="px-10 py-2 hover:scale-95 duration-200 underline-offset-2">JOURNAL</p>
                        </NavLink>
                        <NavLink to="/sharmila.me/about">
                            <p onClick={() => setOpen(false)} className="px-11 py-2 hover:scale-95 duration-200 underline-offset-2 ">ABOUT</p>
                        </NavLink>
                    </div>
                    }
                </div>
            </div>

            <ul className="gap-8 text-xl hidden sm:flex">
                <motion.div 
                initial = "initial"
                whileHover = "animate">
                    <NavLink to="/sharmila.me/gallery">
                        <p>GALLERY</p>
                        <motion.div variants = {underline} className = "border-t-2 border-[#f23a11] rounded-3xl transition-all duration-100 ease-out" />
                    </NavLink>
                </motion.div>
                <motion.div 
                initial = "initial"
                whileHover = "animate">
                    <NavLink to="/sharmila.me/journal">
                        <p>JOURNAL</p>
                        <motion.div variants = {underline} className = "border-t-2 border-[#f23a11] rounded-3xl transition-all duration-100 ease-out" />
                    </NavLink>
                </motion.div>
                <motion.div 
                initial = "initial"
                whileHover = "animate">
                    <NavLink to="/sharmila.me/about">
                        <p>ABOUT</p>
                        <motion.div variants = {underline} className = "border-t-2 border-[#f23a11] rounded-3xl transition-all duration-100 ease-out" />
                    </NavLink>
                </motion.div>
            </ul>
            
        </div>
    </div>
  )
}

export default Navbar