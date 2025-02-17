import React, { useContext, useState } from 'react';
import { authContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { GoMail } from "react-icons/go";
import { VscLock } from "react-icons/vsc";
import { CiUser } from "react-icons/ci";
import { HiLink } from "react-icons/hi2";

const SignUp = () => {
    const { createUser, signUpWithGoogle, signUpWithGithub } = useContext(authContext);

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [userType, setUserType] = useState('job_seeker'); // Default to Job Seeker

    const handleRegister = (e) => {
        e.preventDefault();

        setRegisterError('');
        setSuccess('');

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        const acceptedTerms = form.get('terms');

        if (password.length < 6) {
            setRegisterError('Password must be at least 6 characters long');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setRegisterError('Password must contain at least one uppercase letter');
            return;
        }
        if (!acceptedTerms) {
            setRegisterError('You must accept the terms and conditions');
            return;
        }

        createUser(email, password)
            .then((result) => {
                console.log('User created:', result.user);

                // ✅ Store User Info (You may send it to a database)
                const userInfo = {
                    uid: result.user.uid,
                    name,
                    photo,
                    email,
                    userType, // ✅ Store user type
                };
                console.log('User Info:', userInfo);

                setSuccess('Account created successfully');

                // ✅ SweetAlert2 Success Notification
                Swal.fire({
                    icon: "success",
                    title: "Account Created!",
                    text: `Your ${userType.replace('_', ' ')} account has been successfully created.`,
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "OK",
                });
            })
            .catch((error) => {
                setRegisterError(error.message);

                // ✅ SweetAlert2 Error Notification
                Swal.fire({
                    icon: "error",
                    title: "Registration Failed!",
                    text: error.message,
                    confirmButtonColor: "#d33",
                    confirmButtonText: "Try Again",
                });
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="card bg-base-100 w-full max-w-md shadow-2xl p-8 my-10">
                <h1 className="text-3xl font-bold text-center mb-5">Register Now!</h1>

                {/* 🔹 User Type Toggle */}
                <div className="flex justify-center gap-4 mb-5">
                    <button
                        type="button"
                        className={`px-4 py-2 rounded-lg transition-all ${userType === 'job_seeker' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
                            }`}
                        onClick={() => setUserType('job_seeker')}
                    >
                        Job Seeker
                    </button>
                    <button
                        type="button"
                        className={`px-4 py-2 rounded-lg transition-all ${userType === 'employer' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
                            }`}
                        onClick={() => setUserType('employer')}
                    >
                        Employer
                    </button>
                </div>

                {/* 🔹 Registration Form */}
                <form onSubmit={handleRegister} className="space-y-4">
                    {/* ✅ Hidden Input for User Type */}
                    <input type="hidden" name="userType" value={userType} />


                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg">Name</span>
                        </label>

                        <div className="relative w-full">
                            {/* User Icon Inside Input */}
                            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg">
                                <CiUser />
                            </span>

                            {/* Name Input */}
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="input input-bordered w-full text-lg pl-12"
                                required
                            />
                        </div>
                    </div>

                    {/* Photo URL */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg">Photo URL</span>
                        </label>
                        <div className="relative w-full">
                            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg">
                                <HiLink />
                            </span>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Enter photo URL"
                                className="input input-bordered w-full text-lg pl-12"
                                required
                            />
                        </div>
                    </div>


                    {/* Email */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg">Email</span>
                        </label>
                        <div className="relative w-full">
                            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg">
                                <GoMail />
                            </span>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full text-lg pl-12"
                                required
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-lg">Password</span></label>
                        <div className="relative w-full">
                            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg">
                                <VscLock />
                            </span>
                            <input
                                type={showPass ? "text" : "password"}
                                name="password" placeholder="Enter your password"
                                className="input input-bordered w-full text-lg pl-12"
                                required />
                            <span onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl text-gray-500">
                                {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
                            </span>
                        </div>
                    </div>

                    {/* Terms & Conditions */}
                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms">I agree to the <Link to="/terms" className="text-blue-500 underline">terms and conditions</Link></label>
                    </div>

                    <div className="form-control mt-4">
                        <button type="submit" className="btn bg-indigo-600 hover:bg-indigo-700 text-white text-base py-2 w-full">Register</button>
                    </div>
                </form>

                {/* 🔹 Error & Success Messages */}
                {success && <p className="text-green-600 text-center mt-3">{success}</p>}
                {registerError && <p className="text-red-600 text-center mt-3 flex items-center justify-center gap-2"><FiAlertTriangle className="text-xl" />{registerError}</p>}

                {/* 🔹 Login Link */}
                <div className="my-2 text-center">
                    <p>Already have an account? <Link to="/login" className="underline text-blue-500"> Log In </Link></p>
                </div>

                <div className="divider">OR</div>

                {/* 🔹 Social Media Login */}
                <div className="flex flex-col gap-3">
                    <button onClick={signUpWithGoogle} className="btn btn-outline flex items-center justify-center gap-2">
                        <FcGoogle className="text-lg" /> Continue with Google
                    </button>
                    <button onClick={signUpWithGithub} className="btn btn-outline flex items-center justify-center gap-2">
                        <FaGithub className="text-lg" /> Continue with GitHub
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
