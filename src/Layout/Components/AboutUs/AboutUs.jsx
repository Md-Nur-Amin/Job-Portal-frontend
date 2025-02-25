// import React from 'react';

// const AboutUs = () => {


//     return (
//         <div className="min-h-screen bg-[#f8f9ff] relative overflow-hidden">
//             {/* Background Blob */}
//             <div className="absolute -left-48 -top-48 w-96 h-96 bg-[#e8ebff] rounded-full blur-3xl opacity-50"></div>

//             <div className="container mx-auto px-4 py-16 relative">
//                 <div className="grid lg:grid-cols-2 gap-12 items-center">
//                     {/* Left Content */}
//                     <div className="space-y-8">
//                         <h1 className="text-5xl font-bold text-gray-800">About Us</h1>
//                         <h2 className="text-3xl font-semibold text-gray-700">
//                             A New Way For Working For Many Of Professionals.
//                         </h2>
//                         <div className="space-y-6 text-gray-600">
//                             <p>
//                                 CareerConnect is revolutionizing the way professionals find their dream careers.
//                                 We're not just another job board – we're a comprehensive career platform that
//                                 connects talented individuals with opportunities that match their skills and aspirations.
//                             </p>
//                             <p>
//                                 Our innovative approach combines cutting-edge technology with human insight,
//                                 ensuring that every connection we make is meaningful and valuable for both
//                                 job seekers and employers.
//                             </p>
//                             <p>
//                                 Since our founding, we've helped thousands of professionals advance their
//                                 careers and assisted companies in building strong, diverse teams that drive
//                                 success.
//                             </p>
//                         </div>
//                     </div>

//                     {/* Right Image Gallery */}
//                     <div className="relative h-[600px] flex items-center justify-center">
//                         <div className="grid grid-cols-3 gap-4 relative">
//                             <div className="rounded-3xl overflow-hidden">
//                                 <img
//                                     src="https://images.unsplash.com/photo-1633886038251-66951c201c28?q=80&w=800"
//                                     alt="Office space"
//                                     className="w-full h-[400px] object-cover"
//                                 />
//                             </div>
//                             <div className="rounded-3xl overflow-hidden translate-y-12">
//                                 <img
//                                     src="https://images.unsplash.com/photo-1620843437920-ead942b3c67b?q=80&w=800"
//                                     alt="Team meeting"
//                                     className="w-full h-[400px] object-cover"
//                                 />
//                             </div>
//                             <div className="rounded-3xl overflow-hidden">
//                                 <img
//                                     src="https://images.unsplash.com/photo-1590322300318-9e4565691ccd?q=80&w=800"
//                                     alt="Office collaboration"
//                                     className="w-full h-[400px] object-cover"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Navigation Dots */}
//                 <div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-2">
//                     <div className="w-2 h-2 rounded-full bg-gray-300"></div>
//                     <div className="w-2 h-2 rounded-full bg-blue-500"></div>
//                     <div className="w-2 h-2 rounded-full bg-gray-300"></div>
//                     <div className="w-2 h-2 rounded-full bg-gray-300"></div>
//                     <div className="w-2 h-2 rounded-full bg-gray-300"></div>
//                     <div className="w-2 h-2 rounded-full bg-gray-300"></div>
//                     <div className="w-2 h-2 rounded-full bg-gray-300"></div>
//                     <div className="w-2 h-2 rounded-full bg-gray-300"></div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AboutUs;

import React, { useState } from 'react';

const AboutUs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            title: "About Us",
            subtitle: "A New Way For Working For Many Of Professionals.",
            description: [
                "CareerConnect is revolutionizing the way professionals find their dream careers. We're not just another job board – we're a comprehensive career platform that connects talented individuals with opportunities that match their skills and aspirations.",
                "Our innovative approach combines cutting-edge technology with human insight, ensuring that every connection we make is meaningful and valuable for both job seekers and employers.",
                "Since our founding, we've helped thousands of professionals advance their careers and assisted companies in building strong, diverse teams that drive success."
            ],
            images: [
                "https://images.unsplash.com/photo-1633886038251-66951c201c28?q=80&w=800",
                "https://images.unsplash.com/photo-1620843437920-ead942b3c67b?q=80&w=800",
                "https://images.unsplash.com/photo-1590322300318-9e4565691ccd?q=80&w=800"
            ]
        },
        {
            title: "Our Mission",
            subtitle: "Connecting Talent with Opportunity.",
            description: [
                "Our mission is to bridge the gap between talent and opportunity, empowering professionals to achieve their career goals while helping businesses find the right people to grow and succeed.",
                "We believe in creating an inclusive and diverse job market where everyone has access to opportunities that match their unique skills and aspirations."
            ],
            images: [
                "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800",
                "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?q=80&w=800",
                "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800"
            ]
        },
        {
            title: "Our Vision",
            subtitle: "Shaping the Future of Work.",
            description: [
                "We envision a world where everyone has the opportunity to reach their full potential and where businesses thrive by harnessing the power of diverse and talented teams.",
                "Through innovation, technology, and a human-centered approach, we aim to transform the future of work for generations to come."
            ],
            images: [
                "https://images.unsplash.com/photo-1517245386807-9bba12bf57c2?q=80&w=800",
                "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800",
                "https://images.unsplash.com/photo-1531497865144-0464ef8fb9c4?q=80&w=800"
            ]
        }
    ];

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#e9ebff] to-[#f8f9ff] relative overflow-hidden">
            {/* Background Blob */}
            <div className="absolute left-0 top-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1517245386807-9bba12bf57c2?q=80&w=1920')] bg-cover bg-center opacity-10"></div>

            <div className="container mx-auto px-4 py-16 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <h1 className="text-5xl font-bold text-gray-800">{slides[activeIndex].title}</h1>
                        <h2 className="text-3xl font-semibold text-gray-700">{slides[activeIndex].subtitle}</h2>
                        <div className="space-y-6 text-gray-600">
                            {slides[activeIndex].description.map((text, i) => (
                                <p key={i}>{text}</p>
                            ))}
                        </div>
                    </div>

                    {/* Right Image Gallery */}
                    <div className="relative h-[600px] flex items-center justify-center">
                        <div className="grid grid-cols-3 gap-4 relative">
                            {slides[activeIndex].images.map((image, i) => (
                                <div key={i} className={`rounded-3xl overflow-hidden ${i === 1 ? 'translate-y-12' : ''}`}>
                                    <img
                                        src={image}
                                        alt={`Slide image ${i + 1}`}
                                        className="w-full h-[400px] object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Navigation Dots */}
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-2">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full cursor-pointer ${index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                            onClick={() => handleDotClick(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

