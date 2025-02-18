import { useState } from 'react';
import { FaPlus, FaTrash, FaDownload, FaEye } from 'react-icons/fa';
import html2pdf from 'html2pdf.js';


const ResumeBuilder = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({
    personal: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      summary: '',
    },
    experience: [],
    education: [],
    skills: [],
    projects: [],
  });

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      personal: {
        ...prev.personal,
        [name]: value
      }
    }));
  };

  const addListItem = (section) => {
    const newItem = {
      id: Date.now(),
      title: '',
      organization: '',
      startDate: '',
      endDate: '',
      description: '',
    };

    if (section === 'skills') {
      newItem.name = '';
      newItem.level = 'Intermediate';
    }

    setFormData(prev => ({
      ...prev,
      [section]: [...prev[section], newItem]
    }));
  };

  const removeListItem = (section, id) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].filter(item => item.id !== id)
    }));
  };

  const handleListItemChange = (section, id, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    }));
  };

  const handlePreview = () => {
    setShowPreview(true);
  };

  const handleDownload = () => {
    const element = document.getElementById('resume-preview');
    const opt = {
      margin: 1,
      filename: `${formData.personal.fullName.replace(/\s+/g, '_')}_resume.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  const ResumePreview = () => (
    <div id="resume-preview" className="bg-white p-8 max-w-4xl mx-auto">
      {/* Personal Information */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">{formData.personal.fullName}</h1>
        <div className="text-sm space-x-2">
          <span>{formData.personal.email}</span>
          <span>•</span>
          <span>{formData.personal.phone}</span>
          <span>•</span>
          <span>{formData.personal.location}</span>
        </div>
      </div>

      {/* Summary */}
      {formData.personal.summary && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2 border-b">Professional Summary</h2>
          <p>{formData.personal.summary}</p>
        </div>
      )}

      {/* Experience */}
      {formData.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 border-b">Work Experience</h2>
          <div className="space-y-4">
            {formData.experience.map((exp) => (
              <div key={exp.id}>
                <h3 className="font-bold">{exp.title}</h3>
                <p className="text-sm">
                  {exp.organization} | {exp.startDate} - {exp.endDate}
                </p>
                <p className="mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {formData.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 border-b">Education</h2>
          <div className="space-y-4">
            {formData.education.map((edu) => (
              <div key={edu.id}>
                <h3 className="font-bold">{edu.title}</h3>
                <p className="text-sm">
                  {edu.organization} | {edu.startDate} - {edu.endDate}
                </p>
                <p className="mt-2">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {formData.skills.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 border-b">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            {formData.skills.map((skill) => (
              <div key={skill.id}>
                <span className="font-semibold">{skill.name}</span>
                <span className="text-sm ml-2">({skill.level})</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {formData.projects.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 border-b">Projects</h2>
          <div className="space-y-4">
            {formData.projects.map((project) => (
              <div key={project.id}>
                <h3 className="font-bold">{project.title}</h3>
                <p className="text-sm">{project.organization}</p>
                <p className="mt-2">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Resume Builder</h1>
        <p className="text-lg opacity-80">Create a professional resume in minutes</p>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-boxed justify-center mb-8">
        <button 
          className={`tab ${activeTab === 'personal' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('personal')}
        >
          Personal Info
        </button>
        <button 
          className={`tab ${activeTab === 'experience' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('experience')}
        >
          Experience
        </button>
        <button 
          className={`tab ${activeTab === 'education' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
        <button 
          className={`tab ${activeTab === 'skills' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('skills')}
        >
          Skills
        </button>
        <button 
          className={`tab ${activeTab === 'projects' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mb-8">
        <button 
          className="btn btn-primary"
          onClick={handlePreview}
        >
          <FaEye className="mr-2" />
          Preview
        </button>
        <button 
          className="btn btn-success"
          onClick={handleDownload}
        >
          <FaDownload className="mr-2" />
          Download PDF
        </button>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 flex items-center justify-center">
            <div className="bg-base-100 rounded-lg shadow-xl max-w-4xl w-full">
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-bold">Resume Preview</h2>
                <button 
                  className="btn btn-ghost btn-sm"
                  onClick={() => setShowPreview(false)}
                >
                  ✕
                </button>
              </div>
              <div className="p-4 max-h-[80vh] overflow-y-auto">
                <ResumePreview />
              </div>

              


              <div className="p-4 border-t flex justify-end gap-4">
                <button 
                  className="btn btn-ghost"
                  onClick={() => setShowPreview(false)}
                >
                  Close
                </button>
                <button 
                  className="btn btn-primary"
                  onClick={handleDownload}
                >
                  <FaDownload className="mr-2" />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Form Sections */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          {/* Personal Information */}
          {activeTab === 'personal' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.personal.fullName}
                    onChange={handlePersonalChange}
                    className="input input-bordered"
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.personal.email}
                    onChange={handlePersonalChange}
                    className="input input-bordered"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.personal.phone}
                    onChange={handlePersonalChange}
                    className="input input-bordered"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Location</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.personal.location}
                    onChange={handlePersonalChange}
                    className="input input-bordered"
                    placeholder="San Francisco, CA"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Professional Summary</span>
                </label>
                <textarea
                  name="summary"
                  value={formData.personal.summary}
                  onChange={handlePersonalChange}
                  className="textarea textarea-bordered h-32"
                  placeholder="Write a brief summary of your professional background and career objectives..."
                />
              </div>
            </div>
          )}

          {/* Experience Section */}
          {activeTab === 'experience' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Work Experience</h2>
                <button 
                  className="btn btn-primary btn-sm"
                  onClick={() => addListItem('experience')}
                >
                  <FaPlus className="mr-2" />
                  Add Experience
                </button>
              </div>
              
              <div className="space-y-6">
                {formData.experience.map((exp) => (
                  <div key={exp.id} className="card bg-base-200">
                    <div className="card-body">
                      <div className="flex justify-end">
                        <button 
                          className="btn btn-ghost btn-sm text-error"
                          onClick={() => removeListItem('experience', exp.id)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Job Title</span>
                          </label>
                          <input
                            type="text"
                            value={exp.title}
                            onChange={(e) => handleListItemChange('experience', exp.id, 'title', e.target.value)}
                            className="input input-bordered"
                            placeholder="Software Engineer"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Company</span>
                          </label>
                          <input
                            type="text"
                            value={exp.organization}
                            onChange={(e) => handleListItemChange('experience', exp.id, 'organization', e.target.value)}
                            className="input input-bordered"
                            placeholder="Tech Company Inc."
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Start Date</span>
                          </label>
                          <input
                            type="date"
                            value={exp.startDate}
                            onChange={(e) => handleListItemChange('experience', exp.id, 'startDate', e.target.value)}
                            className="input input-bordered"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">End Date</span>
                          </label>
                          <input
                            type="date"
                            value={exp.endDate}
                            onChange={(e) => handleListItemChange('experience', exp.id, 'endDate', e.target.value)}
                            className="input input-bordered"
                          />
                        </div>
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Description</span>
                        </label>
                        <textarea
                          value={exp.description}
                          onChange={(e) => handleListItemChange('experience', exp.id, 'description', e.target.value)}
                          className="textarea textarea-bordered h-24"
                          placeholder="Describe your responsibilities and achievements..."
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education Section */}
          {activeTab === 'education' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Education</h2>
                <button 
                  className="btn btn-primary btn-sm"
                  onClick={() => addListItem('education')}
                >
                  <FaPlus className="mr-2" />
                  Add Education
                </button>
              </div>
              
              <div className="space-y-6">
                {formData.education.map((edu) => (
                  <div key={edu.id} className="card bg-base-200">
                    <div className="card-body">
                      <div className="flex justify-end">
                        <button 
                          className="btn btn-ghost btn-sm text-error"
                          onClick={() => removeListItem('education', edu.id)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Degree</span>
                          </label>
                          <input
                            type="text"
                            value={edu.title}
                            onChange={(e) => handleListItemChange('education', edu.id, 'title', e.target.value)}
                            className="input input-bordered"
                            placeholder="Bachelor of Science in Computer Science"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Institution</span>
                          </label>
                          <input
                            type="text"
                            value={edu.organization}
                            onChange={(e) => handleListItemChange('education', edu.id, 'organization', e.target.value)}
                            className="input input-bordered"
                            placeholder="University Name"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Start Date</span>
                          </label>
                          <input
                            type="date"
                            value={edu.startDate}
                            onChange={(e) => handleListItemChange('education', edu.id, 'startDate', e.target.value)}
                            className="input input-bordered"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">End Date</span>
                          </label>
                          <input
                            type="date"
                            value={edu.endDate}
                            onChange={(e) => handleListItemChange('education', edu.id, 'endDate', e.target.value)}
                            className="input input-bordered"
                          />
                        </div>
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Additional Information</span>
                        </label>
                        <textarea
                          value={edu.description}
                          onChange={(e) => handleListItemChange('education', edu.id, 'description', e.target.value)}
                          className="textarea textarea-bordered h-24"
                          placeholder="Add any relevant achievements, GPA, or coursework..."
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Section */}
          {activeTab === 'skills' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Skills</h2>
                <button 
                  className="btn btn-primary btn-sm"
                  onClick={() => addListItem('skills')}
                >
                  <FaPlus className="mr-2" />
                  Add Skill
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {formData.skills.map((skill) => (
                  <div key={skill.id} className="card bg-base-200">
                    <div className="card-body">
                      <div className="flex justify-end">
                        <button 
                          className="btn btn-ghost btn-sm text-error"
                          onClick={() => removeListItem('skills', skill.id)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Skill Name</span>
                        </label>
                        <input
                          type="text"
                          value={skill.name}
                          onChange={(e) => handleListItemChange('skills', skill.id, 'name', e.target.value)}
                          className="input input-bordered"
                          placeholder="e.g., JavaScript, Project Management"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Proficiency Level</span>
                        </label>
                        <select
                          value={skill.level}
                          onChange={(e) => handleListItemChange('skills', skill.id, 'level', e.target.value)}
                          className="select select-bordered w-full"
                        >
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Section */}
          {activeTab === 'projects' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Projects</h2>
                <button 
                  className="btn btn-primary btn-sm"
                  onClick={() => addListItem('projects')}
                >
                  <FaPlus className="mr-2" />
                  Add Project
                </button>
              </div>
              
              <div className="space-y-6">
                {formData.projects.map((project) => (
                  <div key={project.id} className="card bg-base-200">
                    <div className="card-body">
                      <div className="flex justify-end">
                        <button 
                          className="btn btn-ghost btn-sm text-error"
                          onClick={() => removeListItem('projects', project.id)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Project Name</span>
                          </label>
                          <input
                            type="text"
                            value={project.title}
                            onChange={(e) => handleListItemChange('projects', project.id, 'title', e.target.value)}
                            className="input input-bordered"
                            placeholder="Project Name"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Technologies Used</span>
                          </label>
                          <input
                            type="text"
                            value={project.organization}
                            onChange={(e) => handleListItemChange('projects', project.id, 'organization', e.target.value)}
                            className="input input-bordered"
                            placeholder="e.g., React, Node.js, MongoDB"
                          />
                        </div>
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Project Description</span>
                        </label>
                        <textarea
                          value={project.description}
                          onChange={(e) => handleListItemChange('projects', project.id, 'description', e.target.value)}
                          className="textarea textarea-bordered h-24"
                          placeholder="Describe the project, your role, and key achievements..."
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;