import React, { useState } from 'react';
import blob from "../../../assets/bgBlob.png";


const AboutUs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            title: "About Us",
            subtitle: "A New Way For Working For Many Of Professionals.",
            description: [
                "Jobtale is revolutionizing the way professionals find their dream careers. We're not just another job board – we're a comprehensive career platform that connects talented individuals with opportunities that match their skills and aspirations.",
                "Our innovative approach combines cutting-edge technology with human insight, ensuring that every connection we make is meaningful and valuable for both job seekers and employers.",
               
            ],
            image: "https://i.postimg.cc/G2KjnpdW/msq2.jpg"
        },
        {
            title: "Our Mission",
            subtitle: "Connecting Talent with Opportunity.",
            description: [
                "Our mission is to bridge the gap between talent and opportunity, empowering professionals to achieve their career goals while helping businesses find the right people to grow and succeed.",
                "We believe in creating an inclusive and diverse job market where everyone has access to opportunities that match their unique skills and aspirations."
            ],
            image: "https://i.postimg.cc/RFBPz8fH/clock.jpg"
        },
        {
            title: "Our Vision",
            subtitle: "Shaping the Future of Work.",
            description: [
                "We envision a world where everyone has the opportunity to reach their full potential and where businesses thrive by harnessing the power of diverse and talented teams.",
                "Through innovation, technology, and a human-centered approach, we aim to transform the future of work for generations to come."
            ],
            image: "https://i.postimg.cc/9XNGdKMY/office.jpg"
        }
    ];

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="min-h-screen relative overflow-hidden my-20 shadow-2xl   lg:mx-5 rounded-xl">
            {/* Background Blob */}
            <div className="absolute left-0 top-0 w-full h-full bg-[url('')] bg-cover bg-center opacity-10"></div>

            <div className="container mx-auto px-4 py-16 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 lg:ml-20 lg:px-14">
                        <h1 className="text-3xl font-bold text-gray-600">{slides[activeIndex].title}</h1>
                        <h2 className="text-xl font-semibold text-gray-600">{slides[activeIndex].subtitle}</h2>
                        <div className="space-y-6 text-sm text-gray-400">
                            {slides[activeIndex].description.map((text, i) => (
                                <p key={i}>{text}</p>
                            ))}
                        </div>
                    </div>

                    {/* Split Image Layout */}
                    <div className="flex gap-4 items-center justify-center   min-h-screen p-6">
                        <div className="relative flex gap-3">
                            {/* Left Panel */}
                            <div className="w-36 h-80 overflow-hidden rounded-lg shadow-lg">
                                <img src={slides[activeIndex].image} alt="Split Image" className="w-full h-full object-cover object-left" />
                            </div>
                            
                            {/* Center Panel */}
                            <div className="w-40 h-96 overflow-hidden rounded-lg shadow-lg">
                                <img src={slides[activeIndex].image} alt="Split Image" className="w-full h-full object-cover object-center" />
                            </div>
                            
                            {/* Right Panel */}
                            <div className="w-36 h-80 overflow-hidden rounded-lg shadow-lg">
                                <img src={slides[activeIndex].image} alt="Split Image" className="w-full h-full object-cover object-right" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Dots */}
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-4 rounded-3xl">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full cursor-pointer ${index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                            onClick={() => handleDotClick(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
