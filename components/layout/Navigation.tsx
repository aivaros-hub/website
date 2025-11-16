"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

type NavLink = {
  href?: string;
  label: string;
  dropdown?: { href: string; label: string }[];
};

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/products", label: "AI Solutions" },
    { href: "/agent-ecosystem", label: "Agent Platform" },
    { href: "/industries", label: "Industries" },
    { href: "/careers", label: "Careers" },
    { 
      label: "Company",
      dropdown: [
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact Us" },
      ]
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isDropdownActive = (dropdown: { href: string; label: string }[]) => {
    return dropdown.some(item => pathname.startsWith(item.href));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-10 h-10 group-hover:scale-105 transition-transform duration-200">
              <Image 
                src="/logo.png" 
                alt="Aivaros.ai Logo" 
                width={40} 
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">Aivaros.ai</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                      isDropdownActive(link.dropdown) || openDropdown === link.label
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`block px-4 py-2.5 text-sm transition-colors ${
                              isActive(item.href)
                                ? "text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-400"
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href!)
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Link
              href="/contact"
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-full transition-colors duration-200"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div key={link.label} className="w-full">
                  <button
                    onClick={() => setMobileDropdownOpen(mobileDropdownOpen === link.label ? null : link.label)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      isDropdownActive(link.dropdown)
                        ? "text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-400"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    {link.label}
                  </button>
                  {mobileDropdownOpen === link.label && (
                    <div className="mt-2 ml-4 space-y-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block px-4 py-3 rounded-lg text-base transition-colors ${
                            isActive(item.href)
                              ? "text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-400"
                              : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.href!)
                      ? "text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-400"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
            
            {/* Mobile Theme Toggle & CTA */}
            <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
              <div className="flex items-center justify-between px-4">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Dark Mode</span>
                <ThemeToggle />
              </div>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full px-6 py-3 bg-indigo-600 text-white text-center rounded-full font-medium"
              >
                Book Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
