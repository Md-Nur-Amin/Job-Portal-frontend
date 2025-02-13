import React, { useRef, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../../Auth/firebase.config';
import { FiAlertTriangle } from "react-icons/fi";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash, FaGoogle, FaGithub } from "react-icons/fa";
import { signInWithPopup } from "firebase/auth";


const Login = () => {

    const [loginError, setLoginError] = useState('');
    const emailRef = useRef(null);
    const [showPass, setShowPass] = useState(false);


    // Providers for Social Auth
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


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

    const handleForgetPass = () => {
        const email = emailRef.current?.value; // Get the email from input field

        if (!email) {
            console.log("Please provide an email"); // ✅ Fixed logging issue
            return;
        }

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            console.log("Please enter a valid email address");
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log("Please check your email");
                Swal.fire({
                    title: "Password Reset",
                    text: "A password reset email has been sent to your email address.",
                    icon: "info",
                    confirmButtonText: "OK",
                });
            })
            .catch(error => {
                console.error("Error sending password reset email:", error.message);
            });
    };


    // Google Signup
    const handleGoogleSignUp = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                Swal.fire({
                    title: "Success!",
                    text: "Logged in with Google",
                    icon: "success",
                    confirmButtonText: "OK",
                });
            })
            .catch((error) => {
                setLoginError(error.message);  // ✅ Fixed state issue
            });
    };

    // GitHub Signup
    const handleGitHubSignUp = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                Swal.fire({
                    title: "Success!",
                    text: "Signed up with GitHub successfully",
                    icon: "success",
                    confirmButtonText: "OK",
                });
            })
            .catch((error) => {
                setLoginError(error.message);  // ✅ Fixed state issue
            });
    };






    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className=" bg-base-100 w-full max-w-md shadow-2xl p-8 my-5 rounded-2xl">
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
                            ref={emailRef}  // ✅ Correctly assigned here
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
                            <a onClick={handleForgetPass} href="#" className="label-text-alt link link-hover">Forgot password?</a>
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

                <div className="text-center my-4">
                    <p className="text-gray-500">or sign up with</p>
                </div>

                <div className="flex flex-col gap-3">
                    <button
                        onClick={handleGoogleSignUp}
                        className="btn bg-red-600 hover:bg-red-700 text-white text-base py-2 w-full flex items-center justify-center gap-2"
                    >
                        <FaGoogle className="text-lg" /> Sign Up with Google
                    </button>

                    <button
                        onClick={handleGitHubSignUp}
                        className="btn bg-gray-800 hover:bg-gray-900 text-white text-base py-2 w-full flex items-center justify-center gap-2"
                    >
                        <FaGithub className="text-lg" /> Sign Up with GitHub
                    </button>
                </div>

                <div className='my-2 py-3'>
                    <p className='text-center'>Do nor have an account ? <Link to="/SignUp" className='underline text-blue-500'> Register here </Link> </p>
                </div>


            </div>
        </div>
    );
};

export default Login;
