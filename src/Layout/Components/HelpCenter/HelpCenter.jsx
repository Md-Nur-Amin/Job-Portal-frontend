import { useState } from 'react';
import { FaSearch, FaBriefcase, FaUserCircle, FaFileAlt, FaLock, FaBell, FaQuestionCircle } from 'react-icons/fa';

const HelpCenter = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Topics', icon: FaQuestionCircle },
        { id: 'account', name: 'Account & Profile', icon: FaUserCircle },
        { id: 'jobs', name: 'Jobs & Applications', icon: FaBriefcase },
        { id: 'resume', name: 'Resume Builder', icon: FaFileAlt },
        { id: 'security', name: 'Privacy & Security', icon: FaLock },
        { id: 'notifications', name: 'Notifications', icon: FaBell },
    ];

    const faqs = [
        {
            category: 'account',
            question: 'How do I create an account?',
            answer: 'To create an account, click on the "Sign Up" button in the top right corner. Fill in your details including name, email, and password. Verify your email address to complete the registration process.'
        },
        {
            category: 'account',
            question: 'How do I update my profile?',
            answer: 'Navigate to your profile settings by clicking on your avatar. From there, you can update your personal information, professional details, and contact information.'
        },
        {
            category: 'jobs',
            question: 'How do I search for jobs?',
            answer: 'Use the search bar on the homepage to look for specific positions. You can filter by location, job type, and experience level. Save interesting positions to your favorites.'
        },
        {
            category: 'jobs',
            question: 'How do I apply for a job?',
            answer: 'Click the "Apply Now" button on any job listing. You can use your saved resume or create a new application. Make sure to review all information before submitting.'
        },
        {
            category: 'resume',
            question: 'How do I create a resume?',
            answer: 'Use our Resume Builder tool to create a professional resume. Choose from multiple templates, add your experience and skills, and download in PDF format.'
        },
        {
            category: 'security',
            question: 'How do I change my password?',
            answer: 'Go to Security Settings in your profile. Click on "Change Password" and follow the prompts to update your password. Make sure to use a strong, unique password.'
        },
        {
            category: 'notifications',
            question: 'How do I manage notification settings?',
            answer: 'Visit your Notification Preferences to customize what alerts you receive. You can choose email, mobile, or in-app notifications for different types of updates.'
        }
    ];

    console.log(faqs);

    const filteredFaqs = faqs.filter(faq => {
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
        return matchesSearch && matchesCategory;
    });


    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
                    <p className="text-xl text-gray-600 mb-8">How can we help you today?</p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto mb-12">
                        <div className="relative">
                            <input
                                type="text"
                                className="input input-bordered w-full pl-12 pr-4 py-3"
                                placeholder="Search for help..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                        {categories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <button
                                    key={category.id}
                                    className={`btn btn-outline flex flex-col items-center p-4 h-auto ${activeCategory === category.id ? 'btn-primary' : ''
                                        }`}
                                    onClick={() => setActiveCategory(category.id)}
                                >
                                    <Icon className="w-6 h-6 mb-2" />
                                    <span className="text-sm">{category.name}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* FAQs */}
                    <div className="max-w-3xl mx-auto">
                        {filteredFaqs.length === 0 ? (
                            <div className="text-center py-12">
                                <FaQuestionCircle className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                                <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                                <p className="text-gray-600">
                                    Try adjusting your search or browse all topics
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {filteredFaqs.map((faq, index) => (
                                    <div key={index} className="collapse collapse-plus bg-white shadow-sm">
                                        <input type="radio" name="faq-accordion" />
                                        <div className="collapse-title text-xl font-medium">
                                            {faq.question}
                                        </div>
                                        <div className="collapse-content">
                                            <p className="text-gray-600 pt-4">{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Contact Support */}
                    <div className="mt-12 bg-blue-600 text-white p-8 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
                        <p className="mb-6">Our support team is available 24/7 to assist you</p>
                        <div className="flex justify-center gap-4">
                            <button className="btn bg-orange-400 border-none ">
                                Contact Support
                            </button>
                            <button className="btn text-orange-500 border-none ">
                                Live Chat
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HelpCenter;