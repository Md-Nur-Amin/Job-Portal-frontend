
import errimg from '../../../assets/error.jpg'


import React from 'react';


const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#0F172A] px-6">
            <div className="max-w-3xl flex flex-col md:flex-row items-center gap-8">
                {/* Left Content */}
                <div className="text-white text-center md:text-left">
                    <h1 className="text-5xl font-bold">Oops!</h1>
                    <p className="mt-3 text-lg text-gray-300">
                        It seems something went wrong.
                    </p>
                    <a
                        href="/"
                        className="mt-6 inline-block px-6 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#0F172A] rounded-md transition"
                    >
                        Go Back
                    </a>
                </div>

                {/* Right Image */}
                <img
                    src={errimg}
                    alt="Error Illustration"
                    className="max-w-lg w-full h-auto object-cover drop-shadow-lg"
                />
            </div>
        </div>

    );
};

export default ErrorPage;

