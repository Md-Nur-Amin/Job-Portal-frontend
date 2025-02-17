import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiUserCircle } from "react-icons/hi";

const Profile = () => {
    const { user } = useContext(authContext);

    if (!user) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <h1 className="text-2xl font-bold">No user found. Please log in.</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="card bg-base-100 w-full max-w-md shadow-2xl p-8 my-10">
                <h1 className="text-3xl font-bold text-center mb-5">My Profile</h1>

                {/* Profile Picture */}
                <div className="flex justify-center mb-5">
                    <img
                        src={user.photoURL || "https://via.placeholder.com/100"}
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
                    />
                </div>

                {/* Profile Details */}
                <div className="space-y-4">
                    {/* Name */}
                    <div className="flex items-center gap-3 text-lg">
                        <HiUserCircle className="text-2xl text-gray-600" />
                        <p><strong>Name:</strong> {user.displayName || "Not Set"}</p>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3 text-lg">
                        <MdEmail className="text-2xl text-gray-600" />
                        <p><strong>Email:</strong> {user.email}</p>
                    </div>

                    {/* User Type (Job Seeker / Employer) */}
                    <div className="flex items-center gap-3 text-lg">
                        <FaUserEdit className="text-2xl text-gray-600" />
                        <p><strong>Role:</strong> {user.role || "Not Specified"}</p>
                    </div>
                </div>

                {/* Edit Profile Button */}
                <div className="form-control mt-6">
                    <Link to="/update-profile" className="btn bg-indigo-600 hover:bg-indigo-700 text-white">
                        Edit Profile
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;
