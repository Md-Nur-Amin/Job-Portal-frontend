import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { GoArrowUpRight } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

const TAGS = [
  'Tech Startups',
  'Ecommerce',
  'Finance',
  'Innovators',
  'AI',
  'Remote',
  'Product',
  'DevOps',
  'Healthcare',
  'SaaS',
];

const getRandomTags = () => {
  const shuffled = TAGS.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.floor(Math.random() * 3) + 2); // 2–4 tags
};

const LatestJobs = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('http://localhost:5000/jobs');
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error('Error fetching jobs:', err);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Latest job opportunities</h2>

      {jobs.length > 0 && (
        <Marquee pauseOnHover gradient={false} speed={45}>
          {jobs.map((job, idx) => {
            const tags = job.tags?.length ? job.tags : getRandomTags();
            const logoUrl = job.companyLogo
              ? `http://localhost:5000/uploads/${job.companyLogo}`
              : `https://source.unsplash.com/random/100x100?sig=${idx}`;

            return (
              <div
                key={idx}
                className="bg-white border border-sky-400 shadow-sm rounded-xl mx-4 p-5 min-w-[280px] max-w-[300px] flex-shrink-0 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={logoUrl}
                    alt={job.companyName}
                    className="w-10 h-10 object-cover rounded-full border"
                  />
                  <div>
                    <p className="text-xs text-gray-400">Company</p>
                    <h3 className="text-sm font-semibold text-gray-800">{job.companyName}</h3>
                  </div>
                  <div
                    onClick={() => navigate(`/JobDetails/${job._id}`)}
                    className="ml-auto p-2 rounded-full border border-sky-400 hover:border-sky-600 text-sky-500 hover:text-sky-600 cursor-pointer"
                    title="View Job Details"
                  >
                    <GoArrowUpRight className="text-xl" />
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Job available: <strong>{job.positions || 'N/A'} Job opportunities</strong>
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </Marquee>
      )}
    </div>
  );
};

export default LatestJobs;
