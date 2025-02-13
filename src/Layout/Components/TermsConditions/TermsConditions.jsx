import React from 'react';

const TermsConditions = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-8 max-w-6xl  my-5 rounded-3xl shadow-black shadow-2xl">
                <h1 className="text-4xl font-bold mb-8 text-center">Terms and Conditions</h1>
                <div className="text-sm breadcrumbs mb-8">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li>Terms and Conditions</li>
                    </ul>
                </div>

                <div className="space-y-8">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                            <p className="mb-4">
                                Welcome to JobPortal. By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                            </p>
                            <p>
                                These terms and conditions outline the rules and regulations for the use of JobPortal's Website.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-2xl font-semibold mb-4">2. User Accounts</h2>
                            <ul className="list-disc list-inside space-y-3">
                                <li>You must be at least 18 years of age to use this website.</li>
                                <li>You must provide accurate, complete, and current information when creating an account.</li>
                                <li>You are responsible for maintaining the confidentiality of your account and password.</li>
                                <li>You agree to accept responsibility for all activities that occur under your account.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-2xl font-semibold mb-4">3. Job Postings</h2>
                            <div className="space-y-4">
                                <p>
                                    All job postings must comply with applicable laws and regulations. JobPortal reserves the right to remove any job posting that:
                                </p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Contains false, misleading, or deceptive information</li>
                                    <li>Discriminates against protected classes</li>
                                    <li>Promotes illegal activities</li>
                                    <li>Violates intellectual property rights</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-2xl font-semibold mb-4">4. Privacy Policy</h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold mb-3">4.1 Information We Collect</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-semibold mb-2">Personal Information:</h4>
                                            <ul className="list-disc list-inside space-y-1">
                                                <li>Name and contact details</li>
                                                <li>Professional experience and education</li>
                                                <li>Resume and cover letters</li>
                                                <li>Profile pictures</li>
                                                <li>Employment preferences</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-2">Automatically Collected Information:</h4>
                                            <ul className="list-disc list-inside space-y-1">
                                                <li>IP address and device information</li>
                                                <li>Browser type and settings</li>
                                                <li>Usage data and interactions</li>
                                                <li>Cookies and similar technologies</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">4.2 How We Use Your Information</h3>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>To provide and improve our services</li>
                                        <li>To match you with relevant job opportunities</li>
                                        <li>To communicate with you about your account</li>
                                        <li>To analyze and enhance our platform's performance</li>
                                        <li>To comply with legal obligations</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">4.3 Data Sharing and Disclosure</h3>
                                    <p className="mb-3">We may share your information with:</p>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Employers when you apply for jobs</li>
                                        <li>Service providers who assist our operations</li>
                                        <li>Legal authorities when required by law</li>
                                    </ul>
                                    <div className="alert alert-warning mt-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                        <span>We never sell your personal information to third parties.</span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">4.4 Your Privacy Rights</h3>
                                    <p className="mb-3">You have the right to:</p>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Access your personal information</li>
                                        <li>Correct inaccurate data</li>
                                        <li>Request deletion of your data</li>
                                        <li>Opt-out of marketing communications</li>
                                        <li>Export your data</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">4.5 Data Security</h3>
                                    <p className="mb-3">We implement various security measures to protect your information:</p>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Encryption of data in transit and at rest</li>
                                        <li>Regular security assessments</li>
                                        <li>Access controls and authentication</li>
                                        <li>Monitoring for suspicious activities</li>
                                    </ul>
                                    <div className="alert alert-info mt-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <span>We regularly update our security measures to protect your data.</span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">4.6 Cookie Policy</h3>
                                    <p className="mb-3">We use cookies and similar technologies to:</p>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Remember your preferences</li>
                                        <li>Analyze site usage</li>
                                        <li>Personalize content</li>
                                        <li>Improve user experience</li>
                                    </ul>
                                    <div className="alert alert-success mt-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>You can control cookie preferences through your browser settings.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
                            <div className="space-y-4">
                                <p>
                                    The content on JobPortal, including but not limited to text, graphics, logos, images, and software, is the property of JobPortal and is protected by copyright and other intellectual property laws.
                                </p>
                                <div className="alert alert-warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    <span>Unauthorized use of any materials on this website may violate copyright laws.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
                            <p className="mb-4">
                                JobPortal shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                            </p>
                            <div className="alert alert-error">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>Use of this website is at your own risk.</span>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
                            <p className="mb-4">
                                JobPortal reserves the right to modify these terms at any time. We do so by posting and drawing attention to the updated terms on the Site. Your decision to continue to visit and make use of the Site after such changes have been made constitutes your formal acceptance of the new Terms of Use.
                            </p>
                            <div className="alert alert-success">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>We will notify users of any material changes to these terms.</span>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
                            <p className="mb-4">
                                If you have any questions about these Terms and Conditions or our Privacy Policy, please contact us:
                            </p>
                            <div className="space-y-2">
                                <p>Email: contact@jobportal.com</p>
                                <p>Phone: +880 1840719423 </p>
                                <p>Address: Baridhara, Dhaka-1212</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-sm opacity-70">Last updated: February 2025</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsConditions;