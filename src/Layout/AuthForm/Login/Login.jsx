import React, { useContext, useRef, useState } from 'react';
import { authContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { FiAlertTriangle } from "react-icons/fi";
import { FaRegEye, FaRegEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Login = () => {
    const { logIn, googleSignIn, githubSignIn, resetPassword } = useContext(authContext);
    const [loginError, setLoginError] = useState('');
    const [showPass, setShowPass] = useState(false);
    const { signUpWithGoogle, signUpWithGithub } = useContext(authContext);
    const [email, setEmail] = useState('');




    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        setLoginError('');

        logIn(email, password)
            .then(result => {
                console.log("User logged in:", result.user);
            })
            .catch(error => {
                console.error("Login error:", error.message);
                setLoginError(error.message);
            });
    };

    const handleForgetPass = () => {
        if (!email) {
            setLoginError("Please provide an email");
            return;
        }

        resetPassword(email)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Email Sent!",
                    text: "A password reset email has been sent to your email address.",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "OK",
                });
            })
            .catch(error => {
                console.error("Error sending password reset email:", error.message);
                setLoginError(error.message);

                Swal.fire({
                    icon: "error",
                    title: "Oops!",
                    text: error.message,
                    confirmButtonColor: "#d33",
                    confirmButtonText: "Try Again",
                });
            });
    };


    return (
        <div className="min-h-screen flex items-center justify-center">
            
            <div className="bg-base-100 lg:w-2/3 shadow-2xl p-8 my-10 rounded-2xl">
                <h1 className="text-3xl font-bold text-center mb-5"> Account Login </h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-lg">Email</span></label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full text-lg"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-lg">Password</span></label>
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
                            <a onClick={handleForgetPass} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-4">
                        <button type="submit" className="btn bg-indigo-600 hover:bg-indigo-700 text-white text-base py-2 w-full">
                            Login
                        </button>
                    </div>
                </form>
                {loginError && (
                    <p className="text-red-600 text-center mt-3 flex items-center justify-center gap-2">
                        <FiAlertTriangle className="text-xl" /> {loginError}
                    </p>
                )}
                <div className="text-center my-4">
                    <p className="text-gray-500">or sign up with</p>
                </div>
                <div className="flex flex-col gap-3">
                    <button onClick={signUpWithGoogle}
                        className="btn btn-outline flex items-center justify-center gap-2">
                        <FcGoogle className="text-lg" /> Continue with Google

                    </button>

                    <button onClick={signUpWithGithub}
                        className="btn btn-outline flex items-center justify-center gap-2">
                        <FaGithub className="text-lg" /> Continue with GitHub
                    </button>

                </div>
                <div className='my-2 py-3'>
                    <p className='text-center'>Don't have an account? <Link to="/SignUp" className='underline text-blue-500'>Register here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
