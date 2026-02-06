"use client";

import { useState } from "react";

const cities = [
  "All Cities",
  "Delhi",
  "Kota",
  "Mumbai",
  "Hyderabad",
  "Patna",
  "Online",
];

const coachings = [
  {
    id: 1,
    name: "Allen Career Institute",
    logo: "🏛️",
    city: "Kota",
    exams: ["JEE", "NEET", "CUET"],
    mode: "Offline & Online",
    feeRange: "₹1.2L - ₹2.5L",
    rating: 4.8,
    reviews: 12500,
    verified: true,
    featured: false,
    highlights: ["50+ Years Legacy", "AIR 1s Every Year"],
    color: "from-blue-500/10 to-indigo-500/10",
  },
  {
    id: 2,
    name: "Aakash Institute",
    logo: "🎓",
    city: "Delhi",
    exams: ["NEET", "JEE", "Foundation"],
    mode: "Offline & Online",
    feeRange: "₹1.5L - ₹2.8L",
    rating: 4.7,
    reviews: 18000,
    verified: true,
    featured: true,
    highlights: ["Pan-India Presence", "Medical Specialists"],
    color: "from-emerald-500/10 to-teal-500/10",
  },
  {
    id: 3,
    name: "Resonance",
    logo: "⚡",
    city: "Kota",
    exams: ["JEE", "NEET"],
    mode: "Offline & Online",
    feeRange: "₹1.0L - ₹2.2L",
    rating: 4.6,
    reviews: 9500,
    verified: true,
    featured: false,
    highlights: ["DLP Programs", "Top Faculty"],
    color: "from-purple-500/10 to-violet-500/10",
  },
  {
    id: 4,
    name: "Physics Wallah",
    logo: "🚀",
    city: "Online",
    exams: ["JEE", "NEET", "CUET", "Boards"],
    mode: "Online",
    feeRange: "₹10K - ₹50K",
    rating: 4.9,
    reviews: 45000,
    verified: true,
    featured: true,
    highlights: ["Most Affordable", "YouTube Star Teachers"],
    color: "from-pink-500/10 to-rose-500/10",
  },
  {
    id: 5,
    name: "FIITJEE",
    logo: "🎯",
    city: "Delhi",
    exams: ["JEE", "KVPY", "Olympiads"],
    mode: "Offline",
    feeRange: "₹1.8L - ₹3.0L",
    rating: 4.5,
    reviews: 8000,
    verified: true,
    featured: false,
    highlights: ["JEE Specialists", "NTSE/Olympiad"],
    color: "from-amber-500/10 to-orange-500/10",
  },
  {
    id: 6,
    name: "Unacademy",
    logo: "📱",
    city: "Online",
    exams: ["UPSC", "JEE", "NEET", "CAT"],
    mode: "Online",
    feeRange: "₹20K - ₹80K",
    rating: 4.4,
    reviews: 32000,
    verified: true,
    featured: false,
    highlights: ["Live Classes", "Top Educators"],
    color: "from-cyan-500/10 to-blue-500/10",
  },
  {
    id: 7,
    name: "Vidya Mandir Classes",
    logo: "📚",
    city: "Delhi",
    exams: ["JEE", "NEET"],
    mode: "Offline",
    feeRange: "₹1.4L - ₹2.5L",
    rating: 4.6,
    reviews: 6500,
    verified: true,
    featured: false,
    highlights: ["Small Batches", "Personal Attention"],
    color: "from-indigo-500/10 to-purple-500/10",
  },
  {
    id: 8,
    name: "Career Launcher",
    logo: "💼",
    city: "Mumbai",
    exams: ["CAT", "CLAT", "GMAT"],
    mode: "Offline & Online",
    feeRange: "₹60K - ₹1.5L",
    rating: 4.5,
    reviews: 7200,
    verified: true,
    featured: false,
    highlights: ["MBA Specialists", "Placement Support"],
    color: "from-red-500/10 to-rose-500/10",
  },
];

export default function CoachingDiscovery() {
  const [activeCity, setActiveCity] = useState("All Cities");

  const filteredCoachings =
    activeCity === "All Cities"
      ? coachings
      : coachings.filter((c) => c.city === activeCity);

  return (
    <section
      id="coaching"
      className="relative py-20 lg:py-28 bg-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <svg
              className="w-4 h-4 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <span className="text-sm font-medium text-accent-dark">
              Coaching Directory
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Top Coaching Institutes Near You
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Compare and find the best coaching based on reviews, results, and
            fees
          </p>
        </div>

        {/* City Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-2 p-2 bg-background-secondary rounded-2xl">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setActiveCity(city)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all
                  ${
                    activeCity === city
                      ? "bg-primary text-white shadow-lg shadow-primary/25"
                      : "text-foreground-secondary hover:text-primary hover:bg-white"
                  }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Coaching Cards - Horizontal Scroll */}
        <div className="relative">
          <div className="horizontal-scroll pb-4 -mx-4 px-4 no-scrollbar">
            {filteredCoachings.map((coaching) => (
              <div
                key={coaching.id}
                className={`relative w-[340px] bg-gradient-to-br ${coaching.color} 
                            rounded-2xl border border-gray-100 overflow-hidden card-hover`}
              >
                {/* Featured Badge */}
                {coaching.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className="px-3 py-1 text-xs font-bold text-white bg-gradient-to-r 
                                     from-amber-500 to-orange-500 rounded-full shadow-lg"
                    >
                      ⭐ Featured
                    </span>
                  </div>
                )}

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-16 h-16 bg-white rounded-xl flex items-center justify-center 
                                    text-3xl shadow-sm border border-gray-100"
                    >
                      {coaching.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display text-lg font-bold text-foreground truncate">
                          {coaching.name}
                        </h3>
                        {coaching.verified && (
                          <svg
                            className="w-5 h-5 text-accent flex-shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-foreground-muted"
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
                        <span className="text-sm text-foreground-secondary">
                          {coaching.city}
                        </span>
                        <span className="text-foreground-muted">•</span>
                        <span className="text-sm text-foreground-secondary">
                          {coaching.mode}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Exams */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {coaching.exams.map((exam) => (
                      <span
                        key={exam}
                        className="px-2.5 py-1 text-xs font-medium rounded-full 
                                                   bg-white text-foreground-secondary border border-gray-100"
                      >
                        {exam}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 mb-4">
                    {coaching.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-success"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm text-foreground-secondary">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Stats Row */}
                  <div className="flex items-center justify-between py-3 border-t border-gray-100">
                    <div>
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4 text-amber-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-bold text-foreground">
                          {coaching.rating}
                        </span>
                        <span className="text-sm text-foreground-muted">
                          ({coaching.reviews.toLocaleString()})
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-foreground-muted">
                        Fee Range
                      </span>
                      <p className="font-semibold text-primary">
                        {coaching.feeRange}
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    className="w-full mt-4 py-3 rounded-xl font-semibold text-white 
                                     btn-primary flex items-center justify-center gap-2 group"
                  >
                    <span>View Courses</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Hint */}
          <div className="flex justify-center mt-4 gap-1">
            <span className="text-sm text-foreground-muted">
              Scroll to see more
            </span>
            <svg
              className="w-5 h-5 text-foreground-muted animate-bounce-subtle"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <button
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold 
                             btn-primary text-white group"
          >
            <span>Explore All 1,200+ Coaching Institutes</span>
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
