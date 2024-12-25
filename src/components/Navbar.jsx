import { Link, NavLink } from "react-router-dom";
import { Squash as Hamburger } from 'hamburger-react';
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    
  return (
    <div className="w-full bg-[#fff5de] text-[#8a733e] font-semibold h-16 flex justify-between items-center px-4 border-b-2 border-[#8a733e]">
        <div>
            <Link to="/sharmila.me/">
                <p className="text-4xl md:-mt-1.5 lg:text-5xl text-end font-almendra font-extrabold duration-200">SS.</p>
            </Link>
        </div>

        <div>
            <div className="sm:hidden text-xl absolute top-2 right-2 flex flex-col justify-center items-center">
                <Hamburger toggled={isOpen} toggle={setOpen} />
                <div>
                    {
                    isOpen && <div className="z-50 font-almendra cursor-default mt-1.5 top-12 font-bold rounded-2xl flex flex-col justify-between items-center absolute -right-1 bg-[#fff5de] border-2 border-[#8a733e]">
                        <NavLink to="/sharmila.me/gallery">
                            <p onClick={() => setOpen(false)} className="px-10 py-2 hover:scale-95 duration-200 underline-offset-2">gallery</p>
                        </NavLink>
                        <NavLink to="/sharmila.me/journal">
                            <p onClick={() => setOpen(false)} className="px-10 py-2 hover:scale-95 duration-200 underline-offset-2">journal</p>
                        </NavLink>
                        <NavLink to="/sharmila.me/about">
                            <p onClick={() => setOpen(false)} className="px-11 py-2 hover:scale-95 duration-200 underline-offset-2 ">about</p>
                        </NavLink>
                    </div>
                    }
                </div>
            </div>

            <ul className="gap-8 font-almendra md:text-xl lg:text-3xl hidden sm:flex">
                <NavLink to="/sharmila.me/gallery">
                    <p className="underline-offset-2 hover:scale-95 duration-200">gallery</p>
                </NavLink>
                <NavLink to="/sharmila.me/journal">
                    <p className="underline-offset-2 hover:scale-95 duration-200">journal</p>
                </NavLink>
                <NavLink to="/sharmila.me/about">
                    <p className="underline-offset-2 hover:scale-95 duration-200">about</p>
                </NavLink>
            </ul>
            
        </div>
    </div>
  )
}

export default Navbar