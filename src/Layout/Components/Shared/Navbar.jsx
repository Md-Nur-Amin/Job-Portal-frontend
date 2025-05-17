import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBriefcase, FaUsers, FaUser, FaSun, FaMoon, FaEnvelope, FaBars } from 'react-icons/fa';
import { IoMdSunny } from "react-icons/io";
import { MdLogin } from "react-icons/md";

import { authContext } from '../../Provider/AuthProvider';
import jobLogo from '../../../assets/logo2removebg.png'



const Navbar = () => {

    const { user, logOut } = useContext(authContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    };

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
                <FaBriefcase />
                <Link to="/allJobs">Jobs</Link>
            </li>

            <li className="flex items-center space-x-2 text-black text-sm font-sans relative hover:text-red-500 cursor-pointer transition-all ease-in-out before:transition-all before:ease-in-out before:duration-700 before:absolute before:bg-red-500 before:h-[1px] before:w-0 hover:before:w-full before:bottom-0 before:left-0"><FaUsers /><Link to="/network">Network</Link>
            </li>


            <li className="flex items-center space-x-2 text-black text-sm font-sans relative hover:text-red-500 cursor-pointer transition-all ease-in-out before:transition-all before:ease-in-out before:duration-700 before:absolute before:bg-red-500 before:h-[1px] before:w-0 hover:before:w-full before:bottom-0 before:left-0"> <FaEnvelope /> <Link to="/contact"> Contact Us </Link> </li>

            <li className="flex items-center space-x-2 text-black text-sm font-sans relative hover:text-red-500 cursor-pointer transition-all ease-in-out before:transition-all before:ease-in-out before:duration-700 before:absolute before:bg-red-500 before:h-[1px] before:w-0 hover:before:w-full before:bottom-0 before:left-0"> <FaUser /> <Link to="/SignUp"> Register Profile</Link> </li>


            <li className="dropdown dropdown-end z-[1]">
                {/* 🔹 Profile Icon / Login Icon */}
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        {user ? (
                            <img src={user.photoURL} alt="User profile" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-300">
                                <MdLogin className="text-xl text-gray-700" />
                            </div>
                        )}
                    </div>
                </label>

                {/* 🔹 Dropdown Menu */}
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-36"
                >
                    {user ? (
                        <>
                            <li><a className='font-medium'> {user?.displayName} </a></li>
                            <li>
                                <Link to="/profile" className='font-medium'>My Profile</Link>
                            </li>
                            <li>
                                <Link to="/updateProfile" className='font-medium'>Update Profile</Link>
                            </li>

                            <li>
                                <Link to="/jobPost" className='font-medium'> Post a job </Link>
                            </li>

                            <li>
                                <Link to="/notification" className='font-medium'> Notifications </Link>
                            </li>

                            <li>
                                <button onClick={handleLogOut} className="text-red-500 medium">Log Out</button>
                            </li>
                        </>
                    ) : (
                        <li>
                            <Link to="/login" className='font-medium'>Log In</Link>
                        </li>
                    )}
                </ul>
            </li>





            <li>
                <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
                    {theme === 'light' ? <FaMoon /> : <IoMdSunny className='text-black' />}
                </button>
            </li>

        </>
    );

    return (
        <div className="bg-gray-100 shadow-lg rounded-xl mt-5 mx-5">

            <div className="container mx-auto px-4">

                <div className="flex justify-between items-center py-4">
                    {/* <Link to="/" className="flex items-center text-xl text-black font-bold">
                        <img src="/src/assets/jobPortal.png" alt="Jobtale Logo" className="w-10 h-10 mx-2" />
                        <span>Jobtale</span>
                    </Link> */}

                    <Link to="/" className="flex items-center text-xl font-bold">
                        <img src={jobLogo} alt="Jobtale Logo" className="w-10 h-10 mb-1 mx-2" />
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 text-transparent bg-clip-text">
                            Jobtale
                        </span>
                    </Link>



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
