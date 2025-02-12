import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBriefcase, FaUsers, FaUser, FaSun, FaMoon, FaEnvelope, FaBars } from 'react-icons/fa';
import { IoMdSunny } from "react-icons/io";


const Navbar = () => {
    const [theme, setTheme] = useState('light');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = (
        <>
            <li className="flex items-center space-x-2 text-black text-sm font-sans relative hover:text-red-500 cursor-pointer transition-all ease-in-out before:transition-all before:ease-in-out before:duration-700 before:absolute before:bg-red-500 before:h-[1px] before:w-0 hover:before:w-full before:bottom-0 before:left-0"> <FaHome /> <Link to="/"> Home </Link>
            </li>

            <li className="flex items-center space-x-2 text-black text-sm font-sans relative hover:text-red-500 cursor-pointer transition-all ease-in-out before:transition-all before:ease-in-out before:duration-700 before:absolute before:bg-red-500 before:h-[1px] before:w-0 hover:before:w-full before:bottom-0 before:left-0">
                <FaBriefcase/>
                <Link to="/jobs">Jobs</Link>
            </li>

            <li className="flex items-center space-x-2 text-black text-sm font-sans relative hover:text-red-500 cursor-pointer transition-all ease-in-out before:transition-all before:ease-in-out before:duration-700 before:absolute before:bg-red-500 before:h-[1px] before:w-0 hover:before:w-full before:bottom-0 before:left-0"><FaUsers/><Link to="/network">Network</Link>
            </li>


            <li className="flex items-center space-x-2 text-black text-sm font-sans relative hover:text-red-500 cursor-pointer transition-all ease-in-out before:transition-all before:ease-in-out before:duration-700 before:absolute before:bg-red-500 before:h-[1px] before:w-0 hover:before:w-full before:bottom-0 before:left-0"> <FaEnvelope /> <Link to="/contact"> Contact Us </Link> </li>

            <li className="flex items-center space-x-2 text-black text-sm font-sans relative hover:text-red-500 cursor-pointer transition-all ease-in-out before:transition-all before:ease-in-out before:duration-700 before:absolute before:bg-red-500 before:h-[1px] before:w-0 hover:before:w-full before:bottom-0 before:left-0"> <FaUser/> <Link to="/profile">Profile</Link>
            </li>

            <li>
                <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
                    {theme === 'light' ? <FaMoon/> : <IoMdSunny className='text-black' />}
                </button>
            </li>

        </>
    );

    return (
        <div className="bg-white shadow-lg rounded-xl mt-3 mx-5">

            <div className="container mx-auto px-4">

                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="text-xl text-black font-bold">JobPortal</Link>
                    
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="btn btn-ghost btn-circle">
                            <FaBars size={24} />
                        </button>
                    </div>
                    
                    <ul className="hidden md:flex space-x-6 items-center">
                        {navLinks}
                    </ul>

                </div>
                {isMenuOpen && (
                    <div className="md:hidden">
                        <ul className="flex flex-col space-y-4 p-4 bg-slate-300 rounded-lg shadow-md">
                            {navLinks}
                        </ul>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Navbar;
