import React, { useState } from 'react';
import { FaBuilding, FaUserTie, FaMoneyBillWave, FaMapMarkerAlt, FaClock, FaClipboardList, FaUpload } from 'react-icons/fa';
import Swal from 'sweetalert2';

const JobPost = () => {
    const [formData, setFormData] = useState({
        companyLogo: '',
        companyName: '',
        designation: '',
        salary: '',
        location: '',
        hours: 'Full Time',
        responsibilities: '',
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'companyLogo') {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });

        try {
            const res = await fetch('http://localhost:5000/jobs', {
                method: 'POST',
                body: data,

            });
            if (res.ok) {
                Swal.fire('Success!', 'Job posted successfully!', 'success');
                setFormData({
                    companyLogo: '',
                    companyName: '',
                    designation: '',
                    salary: '',
                    location: '',
                    hours: 'Full Time',
                    responsibilities: '',
                });
            } else {
                Swal.fire('Error', 'Failed to post job', 'error');
            }
        } catch (err) {
            Swal.fire('Error', 'Something went wrong', 'error');
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Post a New Job</h1>
            <form onSubmit={handleSubmit} className="space-y-4 bg-base-100 shadow-lg rounded-xl p-6">
                <label className="form-control w-full">
                    <span className="label-text flex items-center gap-2"><FaUpload /> Company Logo</span>
                    <input type="file" name="companyLogo" className="file-input file-input-bordered w-full" onChange={handleChange} />
                </label>

                <label className="form-control w-full">
                    <span className="label-text flex items-center gap-2"><FaBuilding /> Company Name</span>
                    <input type="text" name="companyName" className="input input-bordered w-full" value={formData.companyName} onChange={handleChange} required />
                </label>

                <label className="form-control w-full">
                    <span className="label-text flex items-center gap-2"><FaUserTie /> Designation</span>
                    <input type="text" name="designation" className="input input-bordered w-full" value={formData.designation} onChange={handleChange} required />
                </label>

                <label className="form-control w-full">
                    <span className="label-text flex items-center gap-2"><FaMoneyBillWave /> Salary</span>
                    <input type="number" name="salary" className="input input-bordered w-full" value={formData.salary} onChange={handleChange} required />
                </label>

                <label className="form-control w-full">
                    <span className="label-text flex items-center gap-2"><FaMapMarkerAlt /> Location</span>
                    <input type="text" name="location" className="input input-bordered w-full" value={formData.location} onChange={handleChange} required />
                </label>

                <label className="form-control w-full">
                    <span className="label-text flex items-center gap-2"><FaClock /> Hours</span>
                    <select name="hours" className="select select-bordered w-full" value={formData.hours} onChange={handleChange}>
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Remote</option>
                    </select>
                </label>

                <label className="form-control w-full">
                    <span className="label-text flex items-center gap-2"><FaClipboardList /> Key Responsibilities</span>
                    <textarea name="responsibilities" className="textarea textarea-bordered w-full" rows="4" value={formData.responsibilities} onChange={handleChange} required></textarea>
                </label>

                <button type="submit" className="btn btn-primary w-full">Submit Job</button>
            </form>
        </div>
    );
};

export default JobPost;

