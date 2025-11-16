import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries - Aivaros.ai",
  description: "AI agent solutions for IT Staffing, Software Development, Healthcare, and more industries.",
};

export default function IndustriesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white dark:from-gray-900 dark:via-purple-900/10 dark:to-gray-900 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              AI Agents Across <span className="gradient-text">Industries</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Specialized solutions tailored to transform operations in your industry
            </p>
          </div>
        </div>
      </section>

      {/* IT & Staffing Companies */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold mb-4">
                IT STAFFING & RECRUITMENT
              </span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Transform Your Staffing Operations
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 mb-8">
                <p className="text-lg leading-relaxed">
                  <strong className="text-gray-900 dark:text-white">The Challenge:</strong> IT staffing companies struggle with manual resume screening, slow candidate matching, time-consuming interview scheduling, and complex payroll management for hundreds of contractors.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong className="text-gray-900 dark:text-white">Our Solution:</strong> MetaTalio's AI agents automate the entire recruitment and workforce management lifecycle—from parsing resumes to payroll processing.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong className="text-gray-900 dark:text-white">Outcomes:</strong> 70% reduction in time-to-hire, 3x increase in candidate throughput, automated compliance management, and real-time workforce analytics.
                </p>
              </div>
              <Link
                href="/products#metatalio"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Explore MetaTalio Suite →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-800 p-10 rounded-3xl border-2 border-purple-100 dark:border-purple-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Automated Sourcing</strong>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">AI agents find and qualify candidates 24/7</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Intelligent Matching</strong>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Match candidates to jobs with precision</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Payroll Automation</strong>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Handle timesheets and payroll for all contractors</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Predictive Analytics</strong>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Forecast hiring needs and optimize placements</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Software & DevOps Teams */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 p-10 rounded-3xl border-2 border-blue-100 dark:border-blue-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Faster Deployments</strong>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Ship code faster with automated CI/CD</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Automated Testing</strong>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Generate and run comprehensive test suites</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Security First</strong>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Continuous security scanning and compliance</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Incident Management</strong>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Automated detection and resolution workflows</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold mb-4">
                SOFTWARE & DEVOPS
              </span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Accelerate Software Delivery
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 mb-8">
                <p className="text-lg leading-relaxed">
                  <strong className="text-gray-900 dark:text-white">The Challenge:</strong> Development teams face slow deployment cycles, manual testing bottlenecks, security vulnerabilities, and increasing complexity in managing modern infrastructure.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong className="text-gray-900 dark:text-white">Our Solution:</strong> Enterprise Automation Suite provides AI agents that orchestrate your entire SDLC—from code commit to production deployment.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong className="text-gray-900 dark:text-white">Outcomes:</strong> 50% faster release cycles, 80% reduction in manual testing effort, automated security compliance, and proactive incident prevention.
                </p>
              </div>
              <Link
                href="/products#enterprise"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Explore Enterprise Suite →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Providers */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm font-semibold mb-4">
                HEALTHCARE PROVIDERS
              </span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Enhance Patient Care & Operations
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 mb-8">
                <p className="text-lg leading-relaxed">
                  <strong className="text-gray-900 dark:text-white">The Challenge:</strong> Healthcare providers struggle with administrative burden, manual patient intake, complex insurance verification, and limited time for actual patient care.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong className="text-gray-900 dark:text-white">Our Solution:</strong> Healthcare Agent Suite automates patient onboarding, scheduling, EMR documentation, and insurance workflows—allowing providers to focus on care.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong className="text-gray-900 dark:text-white">Outcomes:</strong> 60% reduction in administrative time, improved patient satisfaction, faster insurance processing, and enhanced operational efficiency.
                </p>
              </div>
              <Link
                href="/products#healthcare"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Explore Healthcare Suite →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-white dark:from-teal-900/20 dark:to-gray-800 p-10 rounded-3xl border-2 border-teal-100 dark:border-teal-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Streamlined Intake</strong>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Automated patient onboarding and registration</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Smart Scheduling</strong>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Optimized appointment booking and reminders</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-gray-900 dark:text-white">EMR Support</strong>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">AI-assisted documentation and record management</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Revenue Cycle</strong>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Automated insurance and claims processing</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future Industries */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Expanding to <span className="gradient-text">More Industries</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              We're building specialized agent suites for additional sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Finance & Banking', 'Customer Support', 'Education & Training', 'Legal Services', 'Real Estate', 'Manufacturing'].map((industry) => (
              <div key={industry} className="p-8 rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-brand-purple hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{industry}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Coming soon with industry-specific AI agents tailored to your workflows.
                </p>
                <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg text-sm font-medium">
                  In Development
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Discover how AI agents can revolutionize your operations
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
          >
            Schedule a Consultation →
          </Link>
        </div>
      </section>
    </div>
  );
}
