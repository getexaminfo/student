"use client";

import Image from "next/image";

const footerLinks = {
  exams: {
    title: "Exams",
    links: [
      { name: "JEE Main", href: "#" },
      { name: "JEE Advanced", href: "#" },
      { name: "NEET UG", href: "#" },
      { name: "CUET", href: "#" },
      { name: "CLAT", href: "#" },
      { name: "NDA", href: "#" },
      { name: "CAT", href: "#" },
      { name: "GATE", href: "#" },
    ],
  },
  cities: {
    title: "Cities",
    links: [
      { name: "Delhi", href: "#" },
      { name: "Kota", href: "#" },
      { name: "Mumbai", href: "#" },
      { name: "Hyderabad", href: "#" },
      { name: "Patna", href: "#" },
      { name: "Bangalore", href: "#" },
      { name: "Lucknow", href: "#" },
      { name: "Kolkata", href: "#" },
    ],
  },
  coaching: {
    title: "Coaching",
    links: [
      { name: "Allen", href: "#" },
      { name: "Aakash", href: "#" },
      { name: "Physics Wallah", href: "#" },
      { name: "FIITJEE", href: "#" },
      { name: "Resonance", href: "#" },
      { name: "Unacademy", href: "#" },
      { name: "Vedantu", href: "#" },
      { name: "BYJU'S", href: "#" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Mock Tests", href: "#" },
      { name: "Study Materials", href: "#" },
      { name: "Previous Papers", href: "#" },
      { name: "Exam Predictor", href: "#" },
      { name: "Syllabus", href: "#" },
      { name: "Exam Calendar", href: "#" },
      { name: "Scholarships", href: "#" },
      { name: "Blog", href: "#" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Partner With Us", href: "#" },
      { name: "Advertise", href: "#" },
    ],
  },
};

const seoLinks = [
  "JEE Coaching in Delhi",
  "NEET Coaching in Kota",
  "CUET Preparation Online",
  "Best JEE Coaching 2026",
  "CLAT Coaching Near Me",
  "NDA Exam Coaching",
  "Medical Entrance Preparation",
  "IIT JEE Online Classes",
];

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-foreground overflow-hidden">
      {/* Top Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 bg-white rounded-xl p-1">
                <Image
                  src="/logo.svg"
                  alt="Get Exam Info"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white font-display">
                  Get Exam Info
                </span>
                <span className="block text-xs text-gray-400">
                  Your Academic Success Partner
                </span>
              </div>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              India&apos;s most trusted platform for competitive exam
              preparation. Find coaching, get alerts, and access free study
              resources.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary text-gray-400 
                             hover:text-white flex items-center justify-center transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks)
            .slice(0, 4)
            .map((section) => (
              <div key={section.title}>
                <h4 className="font-display font-semibold text-white mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.slice(0, 6).map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-accent transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        {/* SEO Links */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <p className="text-xs text-gray-500 mb-4">Popular Searches:</p>
          <div className="flex flex-wrap gap-2">
            {seoLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="px-3 py-1.5 rounded-full bg-white/5 text-gray-400 text-xs 
                           hover:bg-primary/20 hover:text-accent transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-6 md:p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-display text-xl font-bold text-white mb-2">
                Stay Updated with Exam News
              </h4>
              <p className="text-gray-400">
                Get weekly updates on exam dates, tips, and resources.
              </p>
            </div>
            <form className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 rounded-xl bg-white/10 border border-white/10 
                           text-white placeholder:text-gray-500 focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl font-semibold text-white bg-accent 
                           hover:bg-accent-dark transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Get Exam Info. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <a
        href="#"
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-white 
                   flex items-center justify-center shadow-lg hover:bg-primary-dark 
                   hover:scale-110 transition-all z-50"
        aria-label="Back to top"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </a>
    </footer>
  );
}
