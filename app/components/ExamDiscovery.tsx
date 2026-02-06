"use client";

import {
  FaWrench,
  FaStethoscope,
  FaGraduationCap,
  FaGavel,
  FaMedal,
  FaBook,
  FaBookOpen,
  FaBriefcase,
} from "react-icons/fa6";

const exams = [
  {
    id: 1,
    name: "JEE Main",
    category: "Engineering",
    icon: FaWrench,
    nextDate: "April 2026",
    students: "12L+",
    description: "For IITs, NITs & top colleges",
  },
  {
    id: 2,
    name: "NEET",
    category: "Medical",
    icon: FaStethoscope,
    nextDate: "May 2026",
    students: "20L+",
    description: "For MBBS, BDS & AYUSH admissions",
  },
  {
    id: 3,
    name: "CUET",
    category: "Undergraduate",
    icon: FaGraduationCap,
    nextDate: "May 2026",
    students: "15L+",
    description: "For central university admissions",
  },
  {
    id: 4,
    name: "CLAT",
    category: "Law",
    icon: FaGavel,
    nextDate: "December 2026",
    students: "80K+",
    description: "For NLUs & top law schools",
  },
  {
    id: 5,
    name: "NDA",
    category: "Defence",
    icon: FaMedal,
    nextDate: "April 2026",
    students: "5L+",
    description: "For Army, Navy & Air Force",
  },
  {
    id: 6,
    name: "Class 10 Boards",
    category: "School",
    icon: FaBook,
    nextDate: "February 2026",
    students: "35L+",
    description: "CBSE, ICSE & State Boards",
  },
  {
    id: 7,
    name: "Class 12 Boards",
    category: "School",
    icon: FaBookOpen,
    nextDate: "February 2026",
    students: "30L+",
    description: "CBSE, ICSE & State Boards",
  },
  {
    id: 8,
    name: "CAT",
    category: "Management",
    icon: FaBriefcase,
    nextDate: "November 2026",
    students: "3L+",
    description: "For IIMs & top B-Schools",
  },
];

export default function ExamDiscovery() {
  return (
    <section
      id="exams"
      className="relative py-20 lg:py-28 bg-background-secondary overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <svg
              className="w-4 h-4 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <span className="text-sm font-medium text-primary">
              Explore Exams
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Discover Top Competitive Exams
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Get comprehensive information about upcoming examinations, including
            dates, syllabus, and preparation strategies
          </p>
        </div>

        {/* Exam Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {exams.map((exam, index) => {
            const IconComponent = exam.icon;
            return (
              <div
                key={exam.id}
                className="group relative bg-white rounded-2xl p-6 border-2 border-slate-100
                          hover:border-primary/30 card-hover cursor-pointer overflow-hidden 
                          shadow-sm hover:shadow-md transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Gradient Overlay on Hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center 
                                  text-xl text-primary group-hover:bg-primary/20 
                                  group-hover:text-primary transition-all duration-300"
                    >
                      <IconComponent />
                    </div>
                    <span
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-600
                                   group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
                    >
                      {exam.category}
                    </span>
                  </div>

                  {/* Exam Name */}
                  <h3
                    className="font-display text-lg font-bold text-foreground mb-2 
                                 group-hover:text-primary transition-colors duration-300"
                  >
                    {exam.name}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm text-foreground-secondary mb-4 line-clamp-2
                                group-hover:text-slate-700 transition-colors duration-300"
                  >
                    {exam.description}
                  </p>

                  {/* Stats Row */}
                  <div className="flex items-center gap-3 mb-4 text-xs text-foreground-secondary">
                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-4 h-4 text-slate-400 group-hover:text-primary/60 transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="font-medium">{exam.nextDate}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-4 h-4 text-slate-400 group-hover:text-primary/60 transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      <span className="font-medium">{exam.students}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    className="w-full py-2.5 rounded-lg text-sm font-semibold 
                                     bg-primary/10 text-primary hover:bg-primary hover:text-white
                                     transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>View Details</span>
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
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold 
                             text-primary border-2 border-primary/20 hover:border-primary 
                             hover:bg-primary/5 transition-all group"
          >
            <span>View All 20+ Exams</span>
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
