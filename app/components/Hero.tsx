"use client";

import { useState } from "react";

const examOptions = [
  "JEE Main",
  "JEE Advanced",
  "NEET",
  "CUET",
  "CLAT",
  "NDA",
  "CAT",
  "UPSC",
  "Gate",
  "Class 10 Boards",
  "Class 12 Boards",
];

const quickExams = [
  { name: "JEE", icon: "🎯", color: "from-blue-500 to-indigo-600" },
  { name: "NEET", icon: "🩺", color: "from-emerald-500 to-teal-600" },
  { name: "CUET", icon: "🎓", color: "from-purple-500 to-violet-600" },
  { name: "CLAT", icon: "⚖️", color: "from-amber-500 to-orange-600" },
  { name: "NDA", icon: "🎖️", color: "from-red-500 to-rose-600" },
  { name: "Boards", icon: "📚", color: "from-cyan-500 to-blue-600" },
];

export default function Hero() {
  const [selectedExam, setSelectedExam] = useState("");
  const [city, setCity] = useState("");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-pattern">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Blobs */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-blob delay-1000" />
        <div className="absolute -bottom-40 right-1/3 w-[400px] h-[400px] bg-accent/8 rounded-full blur-3xl animate-blob delay-500" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />

        {/* Academic Floating Elements */}
        {/* Book Icon */}
        <svg
          className="absolute top-32 left-[10%] w-14 h-14 text-accent/25 animate-float rotate-12"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>

        {/* Laptop Icon */}
        <svg
          className="absolute top-48 right-[15%] w-12 h-12 text-primary/25 animate-float delay-300 -rotate-12"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <path d="M2 17h20l-2 4H4l-2-4z" />
        </svg>

        {/* Pen Icon */}
        <svg
          className="absolute bottom-32 left-[20%] w-16 h-16 text-accent/20 animate-float delay-500 rotate-45"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
        </svg>

        {/* Calculator Icon */}
        <svg
          className="absolute bottom-48 right-[25%] w-12 h-12 text-primary/20 animate-float delay-700 -rotate-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M8 6h8" />
          <path d="M8 10h8" />
          <path d="M8 14h2" />
          <path d="M14 14h2" />
          <path d="M8 18h2" />
          <path d="M14 18h2" />
        </svg>

        {/* Graduation Cap Icon */}
        <svg
          className="absolute top-40 right-[30%] w-10 h-10 text-accent/30 animate-pulse"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>

        {/* Mobile/Phone Icon */}
        <svg
          className="absolute bottom-40 left-[35%] w-8 h-8 text-primary/30 animate-pulse delay-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8 animate-fade-in">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm font-medium text-primary">
              Trusted by 50,000+ Students Across India
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-up">
            <span className="text-foreground">Prepare Smarter for</span>
            <br />
            <span className="text-gradient-animated">
              JEE, NEET, CUET & More
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-foreground-secondary max-w-2xl mx-auto mb-10 animate-slide-up delay-100">
            Find the best coaching, exam updates, mock tests and resources -
            <span className="text-primary font-semibold"> city wise</span>. Your
            one-stop platform for academic success.
          </p>

          {/* Smart Search Bar */}
          <div className="relative max-w-3xl mx-auto mb-10 animate-slide-up delay-200">
            <div className="glass rounded-2xl p-2 sm:p-3 shadow-xl shadow-primary/5 border border-white/50">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                {/* Exam Select */}
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                  </div>
                  <select
                    value={selectedExam}
                    onChange={(e) => setSelectedExam(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border-2 border-transparent 
                               focus:border-accent focus:ring-0 text-foreground font-medium 
                               appearance-none cursor-pointer transition-all"
                  >
                    <option value="">Select Exam</option>
                    {examOptions.map((exam) => (
                      <option key={exam} value={exam}>
                        {exam}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-foreground-muted"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* City Input */}
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter City (e.g., Delhi, Kota)"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border-2 border-transparent 
                               focus:border-accent focus:ring-0 text-foreground placeholder:text-foreground-muted 
                               font-medium transition-all"
                  />
                </div>

                {/* Search Button */}
                <button
                  className="btn-primary px-8 py-4 rounded-xl font-semibold text-white 
                                   flex items-center justify-center gap-2 whitespace-nowrap group"
                >
                  <svg
                    className="w-5 h-5 transition-transform group-hover:scale-110"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <span className="hidden sm:inline">Find Coaching</span>
                  <span className="sm:hidden">Search</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Exam Chips */}
          <div className="mb-12 animate-slide-up delay-300">
            <p className="text-sm text-foreground-muted mb-4">Popular Exams:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {quickExams.map((exam, index) => (
                <button
                  key={exam.name}
                  onClick={() =>
                    setSelectedExam(
                      exam.name === "Boards" ? "Class 12 Boards" : exam.name,
                    )
                  }
                  className={`group relative overflow-hidden px-5 py-2.5 rounded-full bg-white 
                              border-2 border-gray-100 hover:border-transparent shadow-sm 
                              hover:shadow-lg transition-all duration-300`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${exam.color} opacity-0 
                                   group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <div className="relative flex items-center gap-2">
                    <span className="text-lg">{exam.icon}</span>
                    <span className="font-semibold text-foreground-secondary group-hover:text-white transition-colors">
                      {exam.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-400">
            <a
              href="#exams"
              className="w-full sm:w-auto btn-primary px-8 py-4 rounded-full font-semibold 
                         text-white flex items-center justify-center gap-2 group"
            >
              <span>Explore Now</span>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="#alerts"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-primary 
                         bg-white border-2 border-primary/20 hover:border-primary hover:bg-primary/5 
                         flex items-center justify-center gap-2 transition-all group"
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span>Get Free Alerts</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 animate-fade-in delay-500">
            <p className="text-sm text-foreground-muted mb-6">
              Partnered with leading coaching institutes
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {["Allen", "Aakash", "Resonance", "FIITJEE", "Vibrant"].map(
                (name) => (
                  <div
                    key={name}
                    className="text-lg font-bold text-foreground-secondary/50 hover:text-primary/70 transition-colors"
                  >
                    {name}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <a
          href="#exams"
          className="flex flex-col items-center gap-2 text-foreground-muted hover:text-primary transition-colors"
        >
          <span className="text-xs font-medium">Scroll to explore</span>
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
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
