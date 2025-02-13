import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../Auth/firebase.config';
import Swal from "sweetalert2";
import { FiAlertTriangle } from "react-icons/fi";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);

    const handleRegister = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const acceptedTerms = e.target.terms.checked;
        console.log(email, password, acceptedTerms);

        console.log(typeof password);

        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password must be at least 6 characters long');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password must contain at least one uppercase character');
            return;
        }
        else if (!acceptedTerms) {
            setRegisterError('You must accept the terms and conditions');
            return;
        }



        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);

                // Show SweetAlert success message
                Swal.fire({
                    title: "Success!",
                    text: "Account created successfully",
                    icon: "success",
                    confirmButtonText: "OK",
                });

                setSuccess("Account created successfully");
            })
            .catch((error) => {
                console.log(error);
                setRegisterError(error.message);
            });
    }




    return (
        <div>

            <div className="min-h-screen flex items-center justify-center ">
                <div className="card bg-base-100 w-full max-w-md shadow-2xl p-8 my-10">

                    <h1 className="text-3xl font-bold text-center mb-5 flex flex-col items-center">
                        <img className="h-24 mb-2" src="/src/assets/sign-up.gif" alt="Sign Up" />
                        Register Now!
                    </h1>


                    <form onSubmit={handleRegister} className="space-y-4">
                        {/* Email Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full text-lg"
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Password</span>
                            </label>

                            <div className="relative w-full">
                                <input
                                    type={showPass ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter your password"
                                    className="input input-bordered w-full text-lg pr-12"
                                    required
                                />
                                <span
                                    onClick={() => setShowPass(!showPass)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl text-gray-500"
                                >
                                    {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
                                </span>
                            </div>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        {/* Terms and Conditions */}

                        <div>
                            <input type="checkbox" name="terms" id="" /> <label htmlFor="terms">I agree to the <Link to="/terms" className="link link-hover "> terms and conditions</Link></label>
                        </div>

                        {/* Login Button */}
                        <div className="form-control mt-4">
                            <button type="submit" className="btn bg-indigo-600 hover:bg-indigo-700 text-white text-base py-2 w-full">
                                Register
                            </button>
                        </div>
                    </form>

                    {/* Error Message */}
                    {registerError && (
                        <p className="text-red-600 text-center mt-3 flex items-center justify-center gap-2">
                            <FiAlertTriangle className="text-xl" />
                            {registerError}
                        </p>
                    )}


                    <div className='my-2'>
                        <p className='text-center'>Already have an account ? <Link to="/login" className='underline text-blue-500'> Log In </Link> </p>
                    </div>

                </div>


            </div>


        </div>
    );
};

export default SignUp;