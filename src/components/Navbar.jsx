import { Link } from "react-router-dom";
import { Sling as Hamburger } from 'hamburger-react'
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
  return (
    <div className="w-full font-raleway h-16 flex rounded-b-lg justify-between items-center px-4 bg-white bg-opacity-15 border-2">
        <div>
            <Link to="/">
                <p className="text-4xl lg:text-5xl mt-2 ml-1 text-end font-league font-extrabold duration-200">SS.</p>
            </Link>
        </div>
        <div>
            <div className="sm:hidden text-xl absolute top-2 right-2 flex flex-col justify-center items-center">
                <Hamburger toggled={isOpen} toggle={setOpen} />
                <div>
                    {
                    isOpen && <div className="z-50 mt-1.5 top-12 bg-white bg-opacity-15 border-white text-white rounded-2xl flex flex-col justify-between items-center absolute -right-1 border-2">
                        <Link to="/gallery">
                            <p onClick={() => setOpen(false)} className="px-10 py-2 hover:underline underline-offset-2">gallery</p>
                        </Link>
                        <Link to="/journal">
                            <p onClick={() => setOpen(false)} className="px-10 py-2 hover:underline underline-offset-2">journal</p>
                        </Link>
                        <Link to="/about">
                            <p onClick={() => setOpen(false)} className="px-11 py-2 hover:underline underline-offset-2 ">about</p>
                        </Link>
                    </div>
                    }
                </div>
            </div>
            <ul className="gap-8 text-xl lg:text-2xl hidden sm:flex">
                <Link to="/gallery">
                    <p>gallery</p>
                </Link>
                <Link to="/journal">
                    <p>journal</p>
                </Link>
                <Link to="/about">
                    <p>about</p>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar