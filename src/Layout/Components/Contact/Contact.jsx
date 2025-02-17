import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import Map from '../Map/Map';
import SendMail from './SendMail';

const Contact = () => {


    return (
        <div className="my-16 mx-4 md:mx-40 space-y-12">
            <h1 className="text-3xl font-bold text-center">Contact Us</h1>
            <p className="text-center text-gray-500">Get in touch with us for any questions or concerns</p>

            {/* Contact Info Section */}
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <FaMapMarkerAlt className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="card-title">Visit Us</h3>
                        <p className="text-sm">Baridhara</p>
                        <p className="text-sm">Dhaka-1212</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <FaPhone className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="card-title">Call Us</h3>
                        <p className="text-sm">+880 1840719423</p>
                        <p className="text-sm">+880 1754462117</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <FaEnvelope className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="card-title">Email Us</h3>
                        <p className="text-sm">contact@jobportal.com</p>
                        <p className="text-sm">support@jobportal.com</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <FaClock className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="card-title">Working Hours</h3>
                        <p className="text-sm">Mon - Thu: 9:00 - 18:00</p>
                        <p className="text-sm">Fri - Sat: Closed</p>
                    </div>
                </div>
            </div>

            {/* Form and Map Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact Form */}
                <SendMail></SendMail>

                {/* Map Section */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Our Location</h2>
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
                        <Map></Map>

                        {/* <p className="text-gray-500">Map integration would go here<br />(Google Maps, Mapbox, etc.)</p> */}
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <details className="border p-4 rounded-lg">
                        <summary className="cursor-pointer font-medium">How do I create an account?</summary>
                        <p className="mt-2 text-gray-500">You can create an account by clicking the sign-up button on the top right corner and filling out the registration form.</p>
                    </details>
                    <details className="border p-4 rounded-lg">
                        <summary className="cursor-pointer font-medium">How can I post a job?</summary>
                        <p className="mt-2 text-gray-500">To post a job, navigate to the Jobs section and click on 'Post a Job'. Fill out the necessary details and submit.</p>
                    </details>
                    <details className="border p-4 rounded-lg">
                        <summary className="cursor-pointer font-medium">Is the service free?</summary>
                        <p className="mt-2 text-gray-500">Our basic services are free. However, premium features may incur additional charges.</p>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default Contact;
