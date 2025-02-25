import React, { useState } from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaNewspaper, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaApple } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import jobLogo from '../../../assets/logo2removebg.png'


const Footer = () => {

    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Subscribed:', email);
        setEmail('');
    };



    return (
        <div>
            <footer className="text-base-content">
                {/* Newsletter Section */}
                <div className="bg-accent text-accent-content py-12 rounded-t-3xl my-10">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="max-w-md">
                                <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                                <p className="opacity-90">Stay updated with the latest job opportunities and career insights.</p>
                            </div>
                            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full md:w-80 text-base-content"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button type="submit" className="btn btn-neutral">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div className="space-y-2">

                            <Link to="/" className="flex items-center text-xl font-bold">
                                <img src={jobLogo} alt="Jobtale Logo" className="w-10 h-10 mx-2" />
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 text-transparent bg-clip-text">
                                    Jobtale
                                </span>
                            </Link>

                            <p className="opacity-80">Connecting professionals and opportunities worldwide. Your career journey starts here.</p>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-primary" />
                                    <span>Baridhara, Dhaka-1212</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaPhone className="text-primary" />
                                    <span>+880 1840719423</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaEnvelope className="text-primary" />
                                    <span>contact@jobportal.com</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <FaBriefcase className="text-primary" />
                                        <span>Find Jobs</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/network" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <FaUsers className="text-primary" />
                                        <span>Professional Network</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/profile" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <FaGraduationCap className="text-primary" />
                                        <span>Career Development</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/jobs" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <FaNewspaper className="text-primary" />
                                        <span>Job Alerts</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h4 className="text-xl font-bold mb-4">Resources</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/aboutUs" className="hover:text-primary transition-colors">About Us</Link>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-primary transition-colors">Career Advice</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-primary transition-colors">Interview Tips</a>
                                </li>
                                <li>
                                    <Link to="/resumeBuilder" className="hover:text-primary transition-colors">Resume Builder</Link>
                                </li>
                                <li>
                                    <Link to="/help" className="hover:text-primary transition-colors">Help Center</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Download App */}
                        <div>
                            <h4 className="text-xl font-bold mb-4">Download Our App</h4>
                            <p className="opacity-80 mb-4">Get the Jobtale app for seamless job searching on the go.</p>
                            <div className="space-y-2">
                                <button className="btn btn-outline btn-primary w-full"> <FaApple />
                                    App Store
                                </button>
                                <button className="btn btn-outline btn-primary w-full"> <IoLogoGooglePlaystore />
                                    Google Play
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="border-t border-base-300 mt-12 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="text-sm opacity-80">
                                © 2024 JobPortal. All rights reserved.
                            </div>
                            <div className="flex gap-4">
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                                    className="btn btn-ghost btn-circle hover:text-primary transition-colors">
                                    <FaTwitter className="w-5 h-5" />
                                </a>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                                    className="btn btn-ghost btn-circle hover:text-primary transition-colors">
                                    <FaGithub className="w-5 h-5" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                                    className="btn btn-ghost btn-circle hover:text-primary transition-colors">
                                    <FaLinkedin className="w-5 h-5" />
                                </a>
                            </div>
                            <div className="flex gap-4 text-sm">
                                <Link to="/terms" className="hover:text-primary transition-colors">Privacy Policy</Link>

                                <span>•</span>
                                <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                                <span>•</span>
                                <Link to="/terms" className="hover:text-primary transition-colors">Cookie Policy</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;