import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agent Suites & Products - Aivaros.ai",
  description: "Explore our specialized AI agent suites: MetaTalio for HR & Workforce, Enterprise Automation for DevOps, and Healthcare Agents for patient care.",
};

export default function ProductsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              AI Agent <span className="gradient-text">Suites</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Industry-specific agent suites designed to transform your business operations
            </p>
          </div>
        </div>
      </section>

      {/* MetaTalio Suite */}
      <section id="metatalio" className="py-20 bg-white dark:bg-gray-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6">
                <svg className="w-11 h-11 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="text-purple-600 dark:text-purple-400">MetaTalio</span> Suite
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Comprehensive AI-powered HR and workforce management platform for modern IT staffing companies and enterprises.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                MetaTalio transforms how you recruit, manage, and optimize your workforce with intelligent agents that automate complex HR workflows end-to-end. From sourcing candidates to payroll processing, our agents work 24/7 to enhance your operations.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Talk to Our Team
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h3>
              
              <div className="p-6 rounded-2xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">AI-Powered ATS & Recruitment</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Intelligent resume parsing, candidate enrichment, automated job matching, outreach, screening, and interview scheduling</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">HRMS & Payroll</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Complete HR management system with automated payroll processing</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">IT Employee Lifecycle</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Equipment provisioning, access management, and onboarding automation</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Workforce Analytics</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Real-time insights, productivity tracking, and predictive analytics</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Timesheets & Compliance</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Automated time tracking and regulatory compliance management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Automation Suite */}
      <section id="enterprise" className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h3>
              
              <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">DevOps Automation</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">CI/CD pipeline orchestration and infrastructure as code management</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">QA Testing Agents</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Automated test generation, execution, and regression testing</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Security Enablement</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Vulnerability scanning, compliance checks, and security automation</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Incident Response</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Automated alerting, root cause analysis, and resolution workflows</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Documentation Agents</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Automated documentation generation and code review assistance</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Performance Monitoring</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Real-time monitoring, anomaly detection, and optimization recommendations</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6">
                <svg className="w-11 h-11 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="text-blue-600 dark:text-blue-400">Enterprise Automation</span> Suite
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Accelerate software delivery with AI agents for DevOps, QA, and security teams.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Transform your software development lifecycle with intelligent automation agents that handle everything from code deployment to security scanning. Reduce manual work, minimize errors, and ship faster with confidence.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Talk to Our Team
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Suite */}
      <section id="healthcare" className="py-20 bg-white dark:bg-gray-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mb-6">
                <svg className="w-11 h-11 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="text-teal-600 dark:text-teal-400">Healthcare</span> Agent Suite
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Enhance patient care and operational efficiency for healthcare providers.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Streamline your healthcare operations with AI agents designed specifically for medical practices, clinics, and hospitals. Automate patient intake to insurance processing, automate administrative tasks while improving patient experiences.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Talk to Our Team
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h3>
              
              <div className="p-6 rounded-2xl bg-teal-50 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-teal-600 dark:text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Patient Onboarding</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Automated intake, health history collection, and registration workflows</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-teal-50 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-teal-600 dark:text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Appointment Scheduling</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Intelligent booking, reminders, and calendar optimization</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-teal-50 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-teal-600 dark:text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">EMR Documentation</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">AI-assisted note generation and medical record management</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-teal-50 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-teal-600 dark:text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Insurance Workflows</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Eligibility verification, claims processing, and authorization handling</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-teal-50 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-teal-600 dark:text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Patient Communication</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Automated follow-ups, health reminders, and patient engagement</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-teal-50 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-teal-600 dark:text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Operational Analytics</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Patient flow insights, resource optimization, and revenue cycle analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-purple via-brand-blue to-brand-teal">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Deploy Your Agent Suite?
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Schedule a personalized demo to see how our AI agents can transform your operations
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-brand-purple hover:bg-gray-50 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 text-lg"
          >
            Book Your Demo Today →
          </Link>
        </div>
      </section>
    </div>
  );
}
