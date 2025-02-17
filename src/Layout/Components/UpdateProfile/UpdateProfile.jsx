import { useContext, useState } from "react";
import { authContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { CiUser } from "react-icons/ci"; // User icon
import { HiLink } from "react-icons/hi"; // Link icon

const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(authContext);
    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await updateUserProfile(name, photoURL);
            setLoading(false);

            // ✅ Success Message
            Swal.fire({
                icon: "success",
                title: "Profile Updated!",
                text: "Your profile has been successfully updated.",
                confirmButtonColor: "#3085d6",
            });
        } catch (error) {
            setLoading(false);

            // ❌ Error Message
            Swal.fire({
                icon: "error",
                title: "Update Failed",
                text: error.message,
                confirmButtonColor: "#d33",
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="card bg-base-100 w-full max-w-md shadow-2xl p-8 my-10">
                <h1 className="text-3xl font-bold text-center mb-5">Update Profile</h1>

                {/* Profile Picture Preview */}
                <div className="flex justify-center mb-5">
                    <img
                        src={photoURL || "https://via.placeholder.com/100"}
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
                    />
                </div>

                <form onSubmit={handleUpdate} className="space-y-4">
                    {/* Name Field */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-lg">Name</span></label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl">
                                <CiUser />
                            </span>
                            <input
                                type="text"
                                className="input input-bordered w-full text-lg pl-10"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Photo URL Field */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-lg">Photo URL</span></label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl">
                                <HiLink />
                            </span>
                            <input
                                type="text"
                                className="input input-bordered w-full text-lg pl-10"
                                value={photoURL}
                                onChange={(e) => setPhotoURL(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Update Button */}
                    <div className="form-control mt-4">
                        <button
                            type="submit"
                            className="btn bg-indigo-600 hover:bg-indigo-700 text-white text-base py-2 w-full"
                            disabled={loading}
                        >
                            {loading ? "Updating..." : "Update Profile"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
