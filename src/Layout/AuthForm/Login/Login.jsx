import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../../Auth/firebase.config';
import { FiAlertTriangle } from "react-icons/fi";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';

const Login = () => {

    const [loginError, setLoginError] = useState('');


    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setLoginError('');

        console.log(email, password);

        // Firebase Authentication (Moved inside the function)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log("User logged in:", result.user);
                Swal.fire({
                    title: "Success!",
                    text: "Account created successfully",
                    icon: "success",
                    confirmButtonText: "OK",
                });
            })
            .catch(error => {
                console.error("Login error:", error.message);
                setLoginError(error.message);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className=" bg-base-100 w-full max-w-md shadow-2xl p-8 my-5">
                <h1 className="text-3xl font-bold text-center mb-5">Login now!</h1>

                <form onSubmit={handleLogin} className="space-y-4">
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
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full text-lg pr-12"
                                required
                            />
                        </div>

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    {/* Login Button */}
                    <div className="form-control mt-4">
                        <button type="submit" className="btn bg-indigo-600 hover:bg-indigo-700 text-white text-base py-2 w-full">
                            Login
                        </button>
                    </div>
                </form>

                {loginError && (
                    <p className="text-red-600 text-center mt-3 flex items-center justify-center gap-2">
                        <FiAlertTriangle className="text-xl" />
                        {loginError}
                    </p>
                )}

                <div className='my-2 py-3'>
                    <p className='text-center'>Do nor have an account ? <Link to="/SignUp" className='underline text-blue-500'> Register here </Link> </p>
                </div>


            </div>
        </div>
    );
};

export default Login;
