import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Aivaros.ai",
  description: "Building the future of work with autonomous AI agents. Learn about our vision, mission, and story.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              About <span className="gradient-text">Aivaros.ai</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
              Building the future of work with autonomous AI agents
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              At Aivaros.ai, we envision a world where businesses of all sizes can harness the power of AI agents to transform their operations. We're not building just another SaaS tool – we're creating an AI operating system that serves as the foundation for intelligent work across industries.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Our platform enables organizations to deploy specialized AI agents that understand domain-specific challenges and work autonomously to solve them. From HR and recruitment to DevOps and healthcare, we're making AI agents accessible, practical, and transformative.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              We believe the future of business automation isn't about replacing humans – it's about augmenting human capabilities with intelligent agents that handle repetitive tasks, provide insights, and enable people to focus on what matters most: strategy, creativity, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-blue to-brand-teal flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          </div>
          <div className="text-center">
            <p className="text-2xl text-gray-700 leading-relaxed font-medium">
              To empower every organization with a universal AI agent ecosystem that automates complex workflows, enhances productivity, and unlocks new possibilities across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation First</h3>
              <p className="text-gray-600 leading-relaxed">
                We push the boundaries of what's possible with AI agents, constantly exploring new ways to solve complex problems.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer-Centric</h3>
              <p className="text-gray-600 leading-relaxed">
                We build solutions that address real business challenges, working closely with customers to understand their needs.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trust & Security</h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize data security, privacy, and ethical AI practices in everything we build.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We're committed to delivering exceptional quality in our technology, support, and customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
          </div>
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Aivaros.ai was born from a simple observation: while AI technology was advancing rapidly, most businesses struggled to implement it effectively. Existing tools were either too generic to solve specific industry problems or too complex for practical adoption.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We set out to build something different – a platform that combines the power of AI agents with deep domain expertise. Instead of a one-size-fits-all approach, we created specialized agent suites designed for specific industries and use cases.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Starting with HR and recruitment through our MetaTalio suite, we proved that AI agents could dramatically transform business operations. This success led us to expand into DevOps, QA, security, and healthcare, with more industries on the horizon.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, Aivaros.ai serves organizations across multiple sectors, helping them automate workflows, enhance productivity, and unlock new capabilities through our universal AI agent ecosystem. But we're just getting started.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our vision extends far beyond what we've built so far. We're continuously developing new agent suites, expanding into new industries, and working toward a future where AI agents are as fundamental to business operations as email and spreadsheets.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-purple via-brand-blue to-brand-teal">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Join Us on This Journey
          </h2>
          <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto">
            Be part of the AI agent revolution and transform how your organization works
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-brand-purple rounded-xl font-semibold hover:bg-gray-50 hover:shadow-2xl transition-all duration-300 text-lg"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </div>
  );
}
