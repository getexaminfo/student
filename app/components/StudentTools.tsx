"use client";

const tools = [
  {
    id: 1,
    name: "Free Mock Tests",
    description:
      "Practice with exam-like tests designed by experts. Track your progress and identify weak areas.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
    stats: "10K+ Tests",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    features: ["All major exams", "Detailed solutions", "Time analysis"],
  },
  {
    id: 2,
    name: "Performance Analytics",
    description:
      "Get AI-powered insights on your preparation. Know where you stand among peers.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    stats: "AI Powered",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    features: ["Score prediction", "Peer comparison", "Improvement tips"],
  },
  {
    id: 3,
    name: "Study Materials",
    description:
      "Access curated notes, video lectures, and previous year papers. All in one place.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    stats: "50K+ Resources",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    features: ["PDF notes", "Video lectures", "PYQs with solutions"],
  },
  {
    id: 4,
    name: "Exam Predictor",
    description:
      "Predict your rank and college based on your mock test performance and historical data.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    stats: "90% Accuracy",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
    features: ["Rank predictor", "College predictor", "Branch analyzer"],
  },
];

export default function StudentTools() {
  return (
    <section
      id="tools"
      className="relative py-20 lg:py-28 bg-background-secondary overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 pointer-events-none" />
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

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
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
            <span className="text-sm font-medium text-primary">Free Tools</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Powerful Student Tools
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Everything you need to crack your exam — mock tests, analytics,
            study materials, and predictors
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <div
              key={tool.id}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 
                         shadow-sm hover:shadow-xl transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Border on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${tool.color} opacity-0 
                              group-hover:opacity-100 transition-opacity duration-500 -z-10`}
              />
              <div className="absolute inset-[2px] bg-white rounded-[22px] z-0" />

              <div className="relative z-10 p-8">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 ${tool.bgColor} rounded-2xl flex items-center justify-center 
                                  text-foreground-secondary group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div
                      className={`bg-gradient-to-r ${tool.color} bg-clip-text text-transparent`}
                    >
                      {tool.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {tool.name}
                      </h3>
                      <span
                        className={`px-3 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r ${tool.color}`}
                      >
                        {tool.stats}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-foreground-secondary mb-4">
                      {tool.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {tool.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 
                                                        rounded-full bg-background-secondary text-sm 
                                                        text-foreground-secondary"
                        >
                          <svg
                            className="w-3.5 h-3.5 text-success"
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
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <button
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold 
                                       text-white bg-gradient-to-r ${tool.color} shadow-lg 
                                       hover:shadow-xl transition-all group/btn`}
                    >
                      <span>Start Free</span>
                      <svg
                        className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
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
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary-dark to-primary p-8 lg:p-12">
          {/* Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/20 rounded-full blur-3xl" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-2">
                All Tools are 100% Free!
              </h3>
              <p className="text-white/70 max-w-lg">
                No credit card required. Create an account and access all
                preparation tools instantly.
              </p>
            </div>
            <button
              className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full 
                               font-bold text-primary bg-white shadow-xl hover:shadow-2xl 
                               hover:scale-105 transition-all group"
            >
              <span>Create Free Account</span>
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
      </div>
    </section>
  );
}
