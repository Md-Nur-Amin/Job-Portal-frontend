import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const JobApplication = ({ jobId, userId }) => {
    const [job, setJob] = useState(null);
    const [resumeLink, setResumeLink] = useState('');

    useEffect(() => {
        // Fetch the job details
        const fetchJob = async () => {
            const res = await fetch(`http://localhost:5000/jobs/${jobId}`);
            if (res.ok) {
                const data = await res.json();
                setJob(data);
            } else {
                Swal.fire('Error', 'Failed to fetch job details', 'error');
            }
        };

        fetchJob();
    }, [jobId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prevent applying to own job
        if (job && job.userId === userId) {
            Swal.fire('Error', 'You cannot apply for your own job', 'error');
            return;
        }

        const applicationData = {
            userId,
            resumeLink,
        };

        try {
            const res = await fetch(`http://localhost:5000/apply/${jobId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(applicationData),
            });

            if (res.ok) {
                Swal.fire('Success', 'Application submitted successfully!', 'success');
            } else {
                Swal.fire('Error', 'Failed to apply for the job', 'error');
            }
        } catch (err) {
            Swal.fire('Error', 'Something went wrong', 'error');
        }
    };

    return (
        <div>
            {job && (
                <div>
                    <h3>{job.designation}</h3>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Resume Link:
                            <input
                                type="text"
                                value={resumeLink}
                                onChange={(e) => setResumeLink(e.target.value)}
                                required
                            />
                        </label>
                        <button type="submit">Apply</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default JobApplication;
