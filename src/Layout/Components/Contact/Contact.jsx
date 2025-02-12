import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_p9uxy8w', 'template_53jyaw5', form.current, {
                publicKey: '_ldzeXkBrpyrmgniI',
            })
            .then(
                () => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Message Sent',
                        text: 'Your message has been sent successfully!',
                    });
                    form.current.reset();
                },
                (error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Failed to Send',
                        text: 'There was an error sending your message. Please try again later.',
                    });
                },
            );
    };

    return (
        <div className="my-16 mx-4 md:mx-40 space-y-12">
            <h1 className="text-3xl font-bold text-center">Contact Us</h1>
            <p className="text-center text-gray-500">Get in touch with us for any questions or concerns</p>

            {/* Contact Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <div className="text-purple-500 text-2xl mb-2">\ud83d\udccd</div>
                    <h2 className="font-bold text-lg">Visit Us</h2>
                    <p>123 Career Street<br />San Francisco, CA 94105</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <div className="text-purple-500 text-2xl mb-2">\ud83d\udcde</div>
                    <h2 className="font-bold text-lg">Call Us</h2>
                    <p>+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <div className="text-purple-500 text-2xl mb-2">\ud83d\udce7</div>
                    <h2 className="font-bold text-lg">Email Us</h2>
                    <p>contact@jobportal.com<br />support@jobportal.com</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <div className="text-purple-500 text-2xl mb-2">\ud83d\udd52</div>
                    <h2 className="font-bold text-lg">Working Hours</h2>
                    <p>Mon - Fri: 9:00 - 18:00<br />Sat - Sun: Closed</p>
                </div>
            </div>

            {/* Form and Map Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact Form */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Send us a Message</h2>
                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                        <input type="text" name="user_name" placeholder="Full Name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                        <input type="email" name="user_email" placeholder="Email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                        <input type="text" name="subject" placeholder="Subject" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                        <textarea name="message" placeholder="Message" rows="4" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required></textarea>
                        <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition">Send Message</button>
                    </form>
                </div>

                {/* Map Section */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Our Location</h2>
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
                        <p className="text-gray-500">Map integration would go here<br />(Google Maps, Mapbox, etc.)</p>
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
