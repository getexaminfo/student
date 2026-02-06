"use client";

import { useState } from "react";

const classOptions = [
  {
    id: "class10",
    label: "Class 10",
    icon: "📖",
    description: "Preparing for boards",
  },
  {
    id: "class12",
    label: "Class 12",
    icon: "📚",
    description: "Final year of school",
  },
  {
    id: "dropper",
    label: "Dropper",
    icon: "🎯",
    description: "Taking a gap year",
  },
  {
    id: "graduate",
    label: "Graduate",
    icon: "🎓",
    description: "College student/passed",
  },
];

const careerOptions = [
  {
    id: "engineering",
    label: "Engineering",
    icon: "🔧",
    exams: ["JEE Main", "JEE Advanced", "BITSAT"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "medical",
    label: "Medical",
    icon: "🩺",
    exams: ["NEET UG", "AIIMS", "JIPMER"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "law",
    label: "Law",
    icon: "⚖️",
    exams: ["CLAT", "AILET", "LSAT"],
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "commerce",
    label: "Commerce",
    icon: "📊",
    exams: ["CA", "CS", "CMA"],
    color: "from-purple-500 to-violet-600",
  },
  {
    id: "defence",
    label: "Defence",
    icon: "🎖️",
    exams: ["NDA", "CDS", "AFCAT"],
    color: "from-red-500 to-rose-600",
  },
  {
    id: "civilservices",
    label: "Civil Services",
    icon: "🏛️",
    exams: ["UPSC", "State PSC"],
    color: "from-cyan-500 to-blue-600",
  },
];

export default function PersonalizationHook() {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null);

  const handleGetSuggestions = () => {
    // Would trigger API call in real implementation
    console.log("Getting suggestions for:", { selectedClass, selectedCareer });
  };

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />

        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        {/* Academic Floating Icons */}
        {/* Book */}
        <svg
          className="absolute top-20 left-[10%] w-16 h-16 text-white/10 animate-float rotate-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>

        {/* Pen */}
        <svg
          className="absolute bottom-20 right-[10%] w-12 h-12 text-white/10 animate-float delay-300 -rotate-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
        </svg>

        {/* Calculator */}
        <svg
          className="absolute top-40 right-[20%] w-10 h-10 text-white/10 animate-float delay-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M8 6h8M8 10h8M8 14h2M14 14h2M8 18h2M14 18h2" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
          <svg
            className="w-4 h-4 text-accent-light"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-sm font-medium text-white">
            Personalized for You
          </span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Tell Us Your Goal
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12">
          Get personalized coaching recommendations, study materials, and exam
          strategies based on your current stage and career aspirations
        </p>

        {/* Class Selection */}
        <div className="mb-10">
          <p className="text-sm font-medium text-white/60 mb-4">
            What is your current stage?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {classOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedClass(option.id)}
                className={`group relative px-6 py-4 rounded-2xl transition-all duration-300 
                  ${
                    selectedClass === option.id
                      ? "bg-white text-primary shadow-xl shadow-black/20"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{option.icon}</span>
                  <div className="text-left">
                    <p className="font-semibold">{option.label}</p>
                    <p
                      className={`text-xs ${selectedClass === option.id ? "text-foreground-secondary" : "text-white/60"}`}
                    >
                      {option.description}
                    </p>
                  </div>
                </div>
                {selectedClass === option.id && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
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
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Career Selection */}
        <div className="mb-12">
          <p className="text-sm font-medium text-white/60 mb-4">
            What career are you targeting?
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {careerOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedCareer(option.id)}
                className={`group relative p-4 rounded-2xl transition-all duration-300 
                  ${
                    selectedCareer === option.id
                      ? "bg-white text-primary shadow-xl shadow-black/20 scale-105"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/10 hover:scale-105"
                  }`}
              >
                <div className="text-center">
                  <span className="text-3xl mb-2 block">{option.icon}</span>
                  <p className="font-semibold text-sm">{option.label}</p>
                  <div
                    className={`mt-2 text-xs ${selectedCareer === option.id ? "text-foreground-secondary" : "text-white/50"}`}
                  >
                    {option.exams.slice(0, 2).join(", ")}
                  </div>
                </div>
                {selectedCareer === option.id && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
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
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleGetSuggestions}
          disabled={!selectedClass || !selectedCareer}
          className={`inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-lg 
                     transition-all duration-300 group
            ${
              selectedClass && selectedCareer
                ? "bg-white text-primary shadow-xl shadow-black/20 hover:shadow-2xl hover:scale-105"
                : "bg-white/20 text-white/50 cursor-not-allowed"
            }`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <span>Get Personalized Suggestions</span>
          {selectedClass && selectedCareer && (
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
          )}
        </button>

        {/* Helper Text */}
        <p className="mt-6 text-sm text-white/50">
          {selectedClass && selectedCareer
            ? "Click above to see personalized coaching recommendations"
            : "Select both options above to continue"}
        </p>
      </div>
    </section>
  );
}
