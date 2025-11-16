import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agent Platform - Aivaros.ai",
  description: "A comprehensive platform for deploying, orchestrating, and managing AI agents across your entire organization. Multi-agent orchestration, workflow automation, and enterprise integrations.",
};

export default function AgentEcosystemPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-gray-900 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight dark:text-white">
              AI Agent <span className="gradient-text">Platform</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              A comprehensive platform for deploying, orchestrating, and managing AI agents across your entire organization
            </p>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What is the <span className="gradient-text">Aivaros.ai Platform</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Aivaros.ai provides a universal AI operating system where organizations can deploy and orchestrate specialized AI agents across different domains and industries. Think of it as the foundational layer that powers intelligent automation throughout your business.
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Our platform enables multiple AI agents to work together seamlessly, automating complex workflows, making intelligent decisions, and continuously learning from your business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Core Platform Features */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Platform <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Built for enterprise-grade AI agent deployment and orchestration
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Multi-Agent Orchestration */}
            <div className="p-10 rounded-3xl bg-white dark:bg-gray-800 border-2 border-purple-100 dark:border-purple-900 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Multi-Agent Orchestration</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    Coordinate dozens of specialized agents working together to solve complex business challenges across departments and systems.
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Agent-to-agent communication protocols</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Task delegation and workload distribution</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Centralized monitoring and control</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Workflow Automation */}
            <div className="p-10 rounded-3xl bg-white dark:bg-gray-800 border-2 border-blue-100 dark:border-blue-900 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Workflow Automation</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    Build sophisticated automation pipelines that span across departments, with intelligent agents that learn and adapt over time.
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Visual workflow builder and designer</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Conditional logic and decision trees</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Error handling and recovery mechanisms</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Integration Layer */}
            <div className="p-10 rounded-3xl bg-white dark:bg-gray-800 border-2 border-teal-100 dark:border-teal-900 hover:border-teal-300 dark:hover:border-teal-700 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Integration Layer</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    Connect seamlessly with your existing tools, CRMs, HRIS, EMR systems, DevOps platforms, and more through our robust integration framework.
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Pre-built connectors for popular tools</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>REST APIs and webhooks support</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Custom integration development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Analytics Dashboard */}
            <div className="p-10 rounded-3xl bg-white dark:bg-gray-800 border-2 border-indigo-100 dark:border-indigo-900 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Analytics Dashboard</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    Real-time insights into agent performance, workflow efficiency, and business outcomes with comprehensive analytics and reporting.
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Real-time monitoring and alerts</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Performance metrics and KPI tracking</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Custom reports and data exports</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Agent Suites Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Industry-Specific <span className="gradient-text">Agent Suites</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Pre-configured agent ecosystems designed for specific industries and use cases
            </p>
          </div>

          <div className="space-y-12">
            {/* MetaTalio */}
            <div className="p-10 rounded-3xl bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-800 border-2 border-purple-200 dark:border-purple-800">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">MetaTalio - HR & Workforce Agents</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold mb-4">For IT Staffing Companies & HR Teams</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                    Transform your human resources and staffing operations with AI agents that handle recruitment, employee management, payroll, and workforce analytics.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">ATS & Recruitment Agents</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Resume parsing, candidate matching, automated outreach, and interview scheduling</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">HRMS Agents</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Employee onboarding, timesheet management, payroll processing, and compliance</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">IT Employee Agents</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Equipment provisioning, access management, and employee lifecycle automation</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Analytics Agents</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Workforce insights, productivity tracking, and predictive analytics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise Automation */}
            <div className="p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 border-2 border-blue-200 dark:border-blue-800">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Enterprise Automation - Tech & DevOps Agents</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">For Software Teams & Engineering Organizations</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                    Accelerate your software delivery with AI agents that automate DevOps pipelines, QA testing, security scanning, and incident response.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">DevOps Agents</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">CI/CD orchestration, deployment automation, and infrastructure management</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">QA Testing Agents</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Automated test generation, execution, regression testing, and bug detection</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Security Agents</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Vulnerability scanning, compliance checks, and security automation</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Incident Response</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Automated alerting, root cause analysis, and resolution workflows</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Healthcare */}
            <div className="p-10 rounded-3xl bg-gradient-to-br from-teal-50 to-white dark:from-teal-900/20 dark:to-gray-800 border-2 border-teal-200 dark:border-teal-800">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Healthcare Agents</h3>
                  <p className="text-teal-600 dark:text-teal-400 font-semibold mb-4">For Healthcare Providers & Medical Practices</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                    Enhance patient care and operational efficiency with AI agents specialized for healthcare providers, from intake to insurance processing.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Patient Intake Agents</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Automated onboarding, health history collection, and documentation</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Scheduling Agents</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Appointment booking, reminders, and calendar optimization</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">EMR Assistance</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Documentation support, note generation, and record management</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Insurance Workflow</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Eligibility verification, claims processing, and authorization handling</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Deploy AI Agents?
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Start transforming your operations with our comprehensive AI agent ecosystem
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
            >
              Talk to Our Team →
            </Link>
            <Link
              href="/products"
              className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 rounded-xl font-semibold transition-all duration-300 text-lg"
            >
              View Agent Suites
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
