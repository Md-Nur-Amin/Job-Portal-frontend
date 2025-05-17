import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaMapMarkerAlt, FaMoneyBillWave, FaBuilding } from 'react-icons/fa';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs/${id}`) // GET /jobs/:id from backend
      .then(res => res.json())
      .then(data => {
        setJob(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!job) {
    return <div className="text-center py-20 text-red-500">Job not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="card bg-base-100 shadow-2xl rounded-xl">
        <div className="card-body">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={`http://localhost:5000/uploads/${job.companyLogo}`}
              alt={job.companyName}
              className="w-16 h-16 rounded-full object-cover border"
            />
            <div>
              <h2 className="card-title text-2xl">{job.designation}</h2>
              <p className="text-sm text-gray-500">{job.companyName}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-2">
              <FaBuilding /> <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMoneyBillWave /> <span>{job.salary} per month</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt /> <span>{job.hours}</span>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">Key Responsibilities:</h3>
            <p className="text-gray-500 whitespace-pre-line">{job.responsibilities}</p>
          </div>

          <div className="flex justify-end">
            <label htmlFor="apply-modal" className="btn btn-sm bg-sky-500 text-black hover:bg-sky-400 ">Apply</label>
          </div>
        </div>
      </div>

      {/* Modal Trigger (DaisyUI modal linked by id="apply-modal") */}
      <input type="checkbox" id="apply-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Apply for {job.designation}</h3>
          <p className="py-2 text-sm">Fill out your application below:</p>

          {/* Application form inside modal */}
          <form>
            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input type="text" placeholder="Your name" className="input input-bordered" required />
            </div>

            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="Email address" className="input input-bordered" required />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Resume Link</span>
              </label>
              <input type="url" placeholder="https://..." className="input input-bordered" required />
            </div>

            <div className="modal-action">
              <label htmlFor="apply-modal" className="btn btn-outline">Cancel</label>
              <button type="submit" className="btn btn-primary">Submit Application</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
