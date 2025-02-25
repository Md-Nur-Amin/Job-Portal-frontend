import React from 'react';
import { FaSearch, FaBriefcase } from "react-icons/fa";
import { FaEbay } from "react-icons/fa";
import { SiGodaddy, SiExpedia, SiInfosys, SiFujitsu } from "react-icons/si";
import jobCom from "../../../assets/JobIllustrator.jpg";
import jobPost from "../../../assets/Posts.jpg"
import grp from "../../../assets/group.png"
import business from "../../../assets/businessTarget.png"
import star from "../../../assets/sparkle.png"
import content from "../../../assets/contentManagement.png"
import SendMail from '../Contact/SendMail';
import Login from '../../AuthForm/Login/Login';
import { Typewriter } from 'react-simple-typewriter';


const Home = () => {
    return (
        <div className="space-y-8 mb-40 ">
            <div className="shadow-x mb-40 ">

                <div className='mt-10'>
                    <div className="space-y-6 mt-8 ">
                        {/* Hero Banner */}
                        <div
                            className="relative min-h-[600px] bg-fixed flex items-center justify-center bg-cover bg-center mb-12"
                            style={{
                                backgroundImage:
                                    'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>

                            <div className="relative container mx-auto px-4 text-center">
                                {/* <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                    Find Your Dream Job Today
                                </h1>
                                <p className=" text-sm lg:text-base text-white/90 mb-8 max-w-xl mx-auto">
                                    Connect with top companies, discover exciting opportunities, and take the next step in your career journey.
                                </p> */}
                                <div className="text-center">
                                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                        Find Your Dream Job Today
                                    </h1>
                                    <p className="text-base lg:text-base text-white/90 mb-8 max-w-xl mx-auto">
                                        <Typewriter
                                            words={['Connect with top companies, discover exciting opportunities, and take the next step in your career journey.']}
                                            loop={false}
                                            cursor
                                            cursorStyle="|"
                                            typeSpeed={40}
                                            deleteSpeed={40}
                                        />
                                    </p>
                                </div>


                                {/* Search Bar */}
                                <div className="bg-base-100 p-4 rounded-lg shadow-xl max-w-3xl mx-auto mb-8">
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <div className="flex-1 relative">
                                            <FaSearch className="absolute left-3 top-3 text-gray-400" />
                                            <input
                                                type="text"
                                                placeholder="Job title or keyword"
                                                className="input input-bordered w-full pl-10"
                                            />
                                        </div>
                                        <div className="flex-1 relative">
                                            <FaBriefcase className="absolute left-3 top-3 text-gray-400" />
                                            <input
                                                type="text"
                                                placeholder="Location"
                                                className="input input-bordered w-full pl-10"
                                            />
                                        </div>
                                        <button className="btn bg-sky-500 text-black hover:bg-sky-400">Search Jobs</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                <div className="card-body mx-2 lg:mx-40 shadow-2xl rounded-3xl">
                    <textarea
                        className="textarea textarea-bordered "
                        placeholder="What's on your mind?"
                    />
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm rounded-xl bg-sky-500 text-black hover:bg-sky-400">Post</button>
                    </div>
                </div>
            </div>


            {/* Trusted by section */}
            <div className=''>
                <div className="flex justify-center items-center lg:gap-6 max-w-6xl mx-auto">
                    {/* First Image */}
                    <div className="bg-white p-1 lg:p-6 w-1/2 flex justify-center items-center">
                        <img
                            src={jobCom}
                            alt="Jobtale Illustration"
                            className="rounded-lg w-full lg:h-64 object-cover"
                        />
                    </div>

                    {/* Second Image */}
                    <div className="bg-white p-1 lg:p-6 w-1/2 flex justify-center items-center">
                        <img
                            src={jobPost}
                            alt="Jobtale Illustration"
                            className="rounded-lg w-full lg:h-64 object-cover"
                        />
                    </div>
                </div>

                <div>
                    <div className="bg-sky-600 py-16 text-2xl font-semibold font-urbanist text-center text-white">
                        <p>Trusted by the world's best companies</p>

                        {/* Updated Icon Section */}
                        <div className="my-10 flex justify-center items-center space-x-6 lg:space-x-36 text-4xl lg:text-5xl">
                            <FaEbay />
                            <SiGodaddy />
                            <SiExpedia />
                            <SiInfosys />
                            <SiFujitsu />
                        </div>
                    </div>
                </div>

            </div>




            {/* Why choose Jobtale section */}
            <div>
                <section className="bg-gray-100 py-20 px-4 md:px-20 my-24 ">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Jobtale</h2>

                        <div className="flex  justify-center mb-8">
                            <div className="bg-white p-2 rounded-lg shadow-lg w-full max-w-6xl">
                                <img
                                    src={jobCom}
                                    alt="Jobtale Illustration"
                                    className="rounded-lg mx-auto h-[200px] md:h-[300px] w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 md:px-0">
                            <div className="bg-white py-10 rounded-lg shadow-lg flex flex-col items-center space-y-3 w-full">
                                <span className="bg-blue-500 text-white p-2 rounded-full flex justify-center items-center">
                                    <img src={business} alt="" className="w-6 h-6" />
                                </span>
                                <p className="text-gray-700 font-bold text-center max-w-xs">
                                    Pioneering Career Growth Through Innovative Solutions
                                </p>
                            </div>

                            <div className="bg-white py-10 rounded-lg shadow-lg flex flex-col items-center space-y-4 w-full">
                                <span className="bg-blue-500 text-white p-2 rounded-full flex justify-center items-center">
                                    <img src={star} alt="" className="w-6 h-6" />
                                </span>
                                <p className="text-gray-700 font-bold text-center max-w-xs">
                                    Tailored Career Solutions for Every Professional
                                </p>
                            </div>

                            <div className="bg-white py-10 rounded-lg shadow-lg flex flex-col items-center space-y-4 w-full">
                                <span className="bg-blue-500 text-white p-2 rounded-full flex justify-center items-center">
                                    <img src={grp} alt="" className="w-6 h-6" />
                                </span>
                                <p className="text-gray-700 font-bold text-center max-w-xs">
                                    Tailored Career Solutions for Every Professional
                                </p>
                            </div>

                            <div className="bg-white py-10 rounded-lg shadow-lg flex flex-col items-center space-y-4 w-full">
                                <span className="bg-blue-500 text-white p-2 rounded-full flex justify-center items-center">
                                    <img src={content} alt="" className="w-6 h-6" />
                                </span>
                                <p className="text-gray-700 font-bold text-center max-w-xs">
                                    Transforming Career Trajectories with Strategic Insights
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            {/* Contact Section */}

            <div className=' bg-slate-100 items-center py-20'>
                <div className='text-center lg:mx-40 mx-10'>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch With Us</h2>
                    <p className="text-gray-700 mb-6 lg:px-40">
                        Whether you're looking for your next career opportunity or seeking top talent for your company, we're here to help.
                        Reach out to us with any questions, feedback, or support inquiries—we'd love to hear from you!
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 items-center lg:ml-20 px-3 lg:px-6 lg:pl-6 ">
                    <SendMail />
                    <div>
                        <Login />
                    </div>
                </div>
            </div>






        </div>

    );
};

export default Home;