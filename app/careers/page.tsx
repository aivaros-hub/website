"use client";

import { useState } from "react";
import Link from "next/link";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
}

const jobListings: Job[] = [
  {
    id: "ai-genaralist-001",
    title: "AI Genaralist",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    experience: "3-5 years",
    description: "We're looking for a versatile AI Genaralist who can work across multiple domains of AI development, from machine learning to natural language processing. You'll be instrumental in building and deploying AI agents across various industries.",
    responsibilities: [
      "Design and develop AI agents for diverse business applications",
      "Collaborate with cross-functional teams to understand requirements and deliver solutions",
      "Implement machine learning models and integrate them into production systems",
      "Optimize AI agent performance and scalability",
      "Stay current with the latest AI/ML research and technologies",
      "Participate in code reviews and contribute to technical documentation"
    ],
    requirements: [
      "Bachelor's or Master's degree in Computer Science, AI, or related field",
      "3+ years of experience in AI/ML development",
      "Strong proficiency in Python and ML frameworks (TensorFlow, PyTorch, scikit-learn)",
      "Experience with NLP, computer vision, or reinforcement learning",
      "Solid understanding of software engineering principles",
      "Excellent problem-solving and communication skills"
    ],
    niceToHave: [
      "Experience with LLMs and prompt engineering",
      "Knowledge of cloud platforms (AWS, Azure, GCP)",
      "Contributions to open-source AI projects",
      "Experience building production AI systems",
      "Familiarity with MLOps practices"
    ]
  },
  {
    id: "ai-architect-001",
    title: "AI Architect",
    department: "Engineering",
    location: "Prosper, TX / Remote",
    type: "Full-time",
    experience: "7+ years",
    description: "Join us as an AI Architect to design and lead the development of our AI agent ecosystem. You'll define the technical vision and architecture for scalable, multi-agent systems that power intelligent automation across industries.",
    responsibilities: [
      "Define and evolve the overall architecture for our AI agent platform",
      "Lead the design of multi-agent orchestration systems",
      "Establish technical standards and best practices for AI development",
      "Mentor engineering teams and conduct architecture reviews",
      "Evaluate and select appropriate AI technologies and frameworks",
      "Collaborate with product and business teams on technical roadmap",
      "Drive innovation in agent-based AI systems"
    ],
    requirements: [
      "Master's or Ph.D. in Computer Science, AI, or related field",
      "7+ years of experience in software architecture and AI/ML systems",
      "Deep expertise in designing distributed AI systems",
      "Strong knowledge of microservices, APIs, and cloud architecture",
      "Experience leading technical teams and projects",
      "Proven track record of delivering complex AI solutions at scale",
      "Excellent communication and leadership skills"
    ],
    niceToHave: [
      "Experience with agent-based systems and multi-agent frameworks",
      "Knowledge of enterprise integration patterns",
      "Background in multiple AI domains (NLP, computer vision, RL)",
      "Published research in AI/ML conferences",
      "Experience with AI safety and ethics",
      "Previous experience at high-growth tech companies"
    ]
  },
  {
    id: "prompt-engineer-001",
    title: "Prompt Engineer",
    department: "AI Research",
    location: "Remote",
    type: "Full-time",
    experience: "2-4 years",
    description: "We're seeking a creative Prompt Engineer to design, optimize, and maintain prompts for our AI agents across various domains. You'll work closely with our AI teams to ensure our agents deliver accurate, contextual, and valuable outputs.",
    responsibilities: [
      "Design and optimize prompts for LLM-based AI agents",
      "Develop prompt templates and frameworks for different use cases",
      "Test and evaluate prompt effectiveness across various scenarios",
      "Collaborate with domain experts to understand business requirements",
      "Create documentation and guidelines for prompt engineering best practices",
      "Monitor and improve AI agent responses based on user feedback",
      "Experiment with different prompting techniques and strategies"
    ],
    requirements: [
      "Bachelor's degree in Computer Science, Linguistics, AI, or related field",
      "2+ years of experience working with large language models",
      "Deep understanding of prompt engineering techniques and patterns",
      "Strong analytical and problem-solving skills",
      "Excellent written communication skills",
      "Experience with OpenAI, Anthropic, or similar LLM platforms",
      "Ability to iterate quickly and learn from experimentation"
    ],
    niceToHave: [
      "Background in computational linguistics or NLP",
      "Experience with fine-tuning language models",
      "Knowledge of AI safety and bias mitigation",
      "Familiarity with retrieval-augmented generation (RAG)",
      "Experience in specific domains (HR, healthcare, DevOps)",
      "Programming skills in Python"
    ]
  }
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    resume: null as File | null,
    coverLetter: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleApplyClick = (job: Job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
    // Scroll to form
    setTimeout(() => {
      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0],
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedJob) return;

    setIsSubmitting(true);

    // Prepare form data for email
    const emailData = {
      jobTitle: selectedJob.title,
      jobId: selectedJob.id,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      linkedin: formData.linkedin,
      coverLetter: formData.coverLetter,
      resumeName: formData.resume?.name || "No resume attached",
    };

    // TODO: Replace with actual API endpoint to send email to admin@aivaros.ai
    console.log("Application submitted:", emailData);
    
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
        resume: null,
        coverLetter: "",
      });
      setShowApplicationForm(false);
      setSelectedJob(null);
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white dark:from-gray-900 dark:via-purple-900/10 dark:to-gray-900 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Help us build the future of AI agents and transform how businesses operate
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Aivaros.ai?</h2>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Be part of a mission-driven team building cutting-edge AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-800 border-2 border-purple-100 dark:border-purple-800">
              <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-800 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Cutting-Edge Technology</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Work with the latest AI technologies, LLMs, and agent-based systems
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 border-2 border-blue-100 dark:border-blue-800">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-800 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Impact & Growth</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Make a real impact on industries while growing your career
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-white dark:from-teal-900/20 dark:to-gray-800 border-2 border-teal-100 dark:border-teal-800">
              <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-800 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600 dark:text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Remote-First Culture</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Work from anywhere with flexible hours and great benefits
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Find your next opportunity with us
            </p>
          </div>

          <div className="space-y-6">
            {jobListings.map((job) => (
              <div
                key={job.id}
                className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{job.title}</h3>
                          <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-300">
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                              {job.department}
                            </span>
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {job.location}
                            </span>
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {job.type}
                            </span>
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                              </svg>
                              {job.experience}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {job.description}
                      </p>

                      <details className="group">
                        <summary className="cursor-pointer list-none text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 flex items-center">
                          <span>View Full Job Description</span>
                          <svg className="w-5 h-5 ml-2 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        
                        <div className="mt-6 space-y-6">
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Responsibilities</h4>
                            <ul className="space-y-2">
                              {job.responsibilities.map((resp, idx) => (
                                <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                                  <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Requirements</h4>
                            <ul className="space-y-2">
                              {job.requirements.map((req, idx) => (
                                <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                                  <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Nice to Have</h4>
                            <ul className="space-y-2">
                              {job.niceToHave.map((item, idx) => (
                                <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </details>
                    </div>

                    <div className="lg:ml-6">
                      <button
                        onClick={() => handleApplyClick(job)}
                        className="w-full lg:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
                      >
                        Apply Now →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      {showApplicationForm && selectedJob && (
        <section id="application-form" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-800 p-8 sm:p-10 rounded-3xl border-2 border-purple-200 dark:border-purple-800">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Apply for {selectedJob.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">Fill out the form below and we'll get back to you soon</p>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-green-800 dark:text-green-300 font-medium">Application submitted successfully! We'll be in touch soon.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-purple-500 dark:focus:border-purple-400 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900/50 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-purple-500 dark:focus:border-purple-400 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900/50 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-purple-500 dark:focus:border-purple-400 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900/50 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="linkedin" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-purple-500 dark:focus:border-purple-400 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900/50 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Resume/CV *
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-purple-500 dark:focus:border-purple-400 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900/50 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-50 dark:file:bg-purple-900/30 file:text-purple-700 dark:file:text-purple-300 hover:file:bg-purple-100 dark:hover:file:bg-purple-900/50"
                  />
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">PDF, DOC, or DOCX (max 10MB)</p>
                </div>

                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Cover Letter *
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    rows={6}
                    value={formData.coverLetter}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-purple-500 dark:focus:border-purple-400 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900/50 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none"
                    placeholder="Tell us why you're a great fit for this role..."
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowApplicationForm(false);
                      setSelectedJob(null);
                    }}
                    className="px-8 py-4 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-purple via-brand-blue to-brand-teal">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-brand-purple hover:bg-gray-50 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 text-lg"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </div>
  );
}
