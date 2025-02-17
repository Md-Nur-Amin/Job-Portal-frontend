import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const SendMail = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_p9uxy8w', 'template_53jyaw5', form.current, {
                publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

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
        <div>
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

        </div>
    );
};

export default SendMail;