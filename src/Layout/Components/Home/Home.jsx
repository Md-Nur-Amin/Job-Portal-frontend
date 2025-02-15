import React from 'react';
import { FaSearch, FaBriefcase } from "react-icons/fa";


const Home = () => {
    return (
        <div className="space-y-8">
            <div className="card bg-base-100 shadow-xl">

                <div className=''>
                    <div className="space-y-6 mt-8">
                        {/* Hero Banner */}
                        <div
                            className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center mb-12"
                            style={{
                                backgroundImage:
                                    'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>

                            <div className="relative container mx-auto px-4 text-center">
                                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                    Find Your Dream Job Today
                                </h1>
                                <p className=" text-sm lg:text-base text-white/90 mb-8 max-w-xl mx-auto">
                                    Connect with top companies, discover exciting opportunities, and take the next step in your career journey.
                                </p>

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
                                        <button className="btn btn-primary">Search Jobs</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                <div className="card-body">
                    <textarea
                        className="textarea textarea-bordered "
                        placeholder="What's on your mind?"
                    />
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Post</button>
                    </div>
                </div>
            </div>





            <div>
                <section className="bg-gray-100 py-16">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Jobtale</h2>

                        <div className="flex justify-center mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
                                <img
                                    src="https://source.unsplash.com/600x300/?technology,career"
                                    alt="Jobtale Illustration"
                                    className="rounded-lg mx-auto"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
                                <span className="bg-blue-500 text-white p-2 rounded-full">🚀</span>
                                <p className="text-gray-700">Pioneering Career Growth Through Innovative Solutions</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
                                <span className="bg-blue-500 text-white p-2 rounded-full">📊</span>
                                <p className="text-gray-700">Offering Detailed Insights into New Positions and Career Paths</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
                                <span className="bg-blue-500 text-white p-2 rounded-full">👥</span>
                                <p className="text-gray-700">Tailored Career Solutions for Every Professional</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
                                <span className="bg-blue-500 text-white p-2 rounded-full">📈</span>
                                <p className="text-gray-700">Transforming Career Trajectories with Strategic Insights</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>


        </div>

    );
};

export default Home;