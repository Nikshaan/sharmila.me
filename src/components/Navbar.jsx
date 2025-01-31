import { Link, NavLink } from "react-router-dom";
import { Squash as Hamburger } from 'hamburger-react';
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    
  return (
    <div className="w-full font-semibold font-manrope h-16 flex justify-center items-center px-4 text-white lg:py-2">
        <div className="absolute left-2 px-2">
            <Link to="/sharmila.me/">
                <p className="text-4xl font-domine md:-mt-1.5 lg:text-5xl pt-2 text-end font-extrabold duration-200">SS.</p>
            </Link>
        </div>

        <div>
            <div className="sm:hidden text-lg absolute top-2 right-2 flex flex-col justify-center items-center">
                <Hamburger toggled={isOpen} toggle={setOpen} />
                <div>
                    {
                    isOpen && <div className="z-50 font-manrope bg-black cursor-default mt-1.5 top-12 font-bold rounded-2xl flex flex-col justify-between items-center absolute -right-1 border-2">
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

            <ul className="gap-8 font-manrope font-thin text-2xl lg:text-3xl hidden sm:flex">
                <NavLink to="/sharmila.me/gallery">
                    <p className="underline-offset-2 hover:scale-95 duration-200">GALLERY</p>
                </NavLink>
                <NavLink to="/sharmila.me/journal">
                    <p className="underline-offset-2 hover:scale-95 duration-200">JOURNAL</p>
                </NavLink>
                <NavLink to="/sharmila.me/about">
                    <p className="underline-offset-2 hover:scale-95 duration-200">ABOUT</p>
                </NavLink>
            </ul>
            
        </div>
    </div>
  )
}

export default Navbar