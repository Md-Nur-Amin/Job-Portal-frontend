import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaMoneyBillWave, FaBuilding, FaSearch, FaBriefcase } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Alljobs = ({ limit }) => {
    const [jobs, setJobs] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [location, setLocation] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/jobs') 
            .then(res => res.json())
            .then(data => setJobs(data))
            .catch(err => console.error(err));
    }, []);

    // Filtering jobs based on the search term and location
    const filteredJobs = jobs.filter(job =>
        (job.designation.toLowerCase().includes(keyword.toLowerCase()) ||
            job.companyName.toLowerCase().includes(keyword.toLowerCase())) &&
        job.location.toLowerCase().includes(location.toLowerCase())
    );

   
    const jobsToDisplay = limit ? filteredJobs.slice(0, limit) : filteredJobs;

    return (
        <div className="max-w-7xl mx-auto p-6">
            {/* Search Bar */}
            <div className="bg-base-100 p-4 rounded-lg shadow-xl max-w-3xl mx-auto my-10">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <FaSearch className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Job title or keyword"
                            className="input input-bordered w-full pl-10"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 relative">
                        <FaBriefcase className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Location"
                            className="input input-bordered w-full pl-10"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    {/* Optional search button, currently just cosmetic */}
                    <button className="btn bg-sky-500 text-black hover:bg-sky-400">
                        Search Jobs
                    </button>
                </div>
            </div>

            {/* Job Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {jobsToDisplay.map(job => (
                    <div key={job._id} className="card bg-base-200 shadow-2xl rounded-xl">
                        <div className="card-body">
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={`http://localhost:5000/uploads/${job.companyLogo}`}
                                    alt={job.companyName}
                                    className="w-12 h-12 rounded-full object-cover border"
                                />
                                <div>
                                    <h2 className="card-title text-lg">{job.designation}</h2>
                                    <p className="text-sm text-gray-500">{job.companyName}</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 text-sm text-gray-700 mb-3">
                                <div className="flex items-center gap-2">
                                    <FaBuilding /> <span>{job.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaMoneyBillWave /> <span>{job.salary} per month</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaMapMarkerAlt /> <span>{job.hours}</span>
                                </div>
                                <p>
                                    <span className="font-semibold">Responsibilities:</span>{' '}
                                    {job.responsibilities.slice(0, 80)}...
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-3">
                                <div className="badge bg-gray-300 p-3 text-sky-700 text-sm ">Innovation</div>
                                <div className="badge bg-gray-300 p-3 text-sky-500 text-sm ">Remote Option</div>
                                <div className="badge bg-gray-300 p-3 text-sky-500 text-sm  ">Listed Company</div>
                            </div>

                            <div className="flex justify-between items-center">
                                <p className="text-xs text-gray-400">
                                    {new Date(job.createdAt).toLocaleDateString()}
                                </p>
                                <button className="btn btn-sm bg-sky-500 text-black hover:bg-sky-400">
                                    <Link to={`/jobDetails/${job._id}`}>Job Details</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* If no jobs match the search */}
            {jobsToDisplay.length === 0 && (
                <p className="text-center text-gray-500 mt-6">No jobs found matching your search.</p>
            )}
        </div>
    );
};

export default Alljobs;
