"use client";

const featuredCoachings = [
  {
    id: 1,
    name: "Allen Career Institute",
    logo: "🏛️",
    tagline: "Excellence in Education",
    years: 35,
    results: {
      toppers: "1000+",
      selections: "50,000+",
      airUnder100: "500+",
    },
    rating: 4.9,
    reviews: 25000,
    speciality: "JEE & NEET Specialists",
    features: [
      "Proven Track Record",
      "Expert Faculty",
      "Comprehensive Study Material",
      "Regular Tests & Analysis",
    ],
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    cta: "Enquire Now",
  },
  {
    id: 2,
    name: "Aakash Institute",
    logo: "🎓",
    tagline: "Dream Big, Achieve Big",
    years: 30,
    results: {
      toppers: "800+",
      selections: "65,000+",
      airUnder100: "450+",
    },
    rating: 4.8,
    reviews: 32000,
    speciality: "Medical Entrance Experts",
    features: [
      "BYJU's Backed",
      "Pan India Network",
      "Digital Learning",
      "Scholarship Programs",
    ],
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    cta: "Get Details",
  },
  {
    id: 3,
    name: "Physics Wallah",
    logo: "🚀",
    tagline: "Padho Chahe Jaha, Jiyo Apne Mahe",
    years: 8,
    results: {
      toppers: "500+",
      selections: "1,00,000+",
      airUnder100: "200+",
    },
    rating: 4.9,
    reviews: 75000,
    speciality: "Most Affordable Education",
    features: [
      "Lowest Fee Structure",
      "Star Teachers",
      "Doubt Classes",
      "Vidyapeeth Centers",
    ],
    gradient: "from-pink-600 via-rose-600 to-red-600",
    cta: "Start Learning",
  },
];

export default function FeaturedCoaching() {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 mb-6">
            <svg
              className="w-4 h-4 text-amber-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-amber-700">
              Premium Partners
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Coaching Institutes
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Handpicked institutes with proven track records and exceptional
            student outcomes
          </p>
        </div>

        {/* Featured Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredCoachings.map((coaching, index) => (
            <div
              key={coaching.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl 
                         shadow-gray-200/50 border border-gray-100 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Header */}
              <div
                className={`relative h-32 bg-gradient-to-r ${coaching.gradient} p-6`}
              >
                {/* Pattern Overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />

                {/* Featured Badge */}
                <div
                  className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 
                                bg-white/20 backdrop-blur-sm rounded-full"
                >
                  <svg
                    className="w-4 h-4 text-amber-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs font-bold text-white">Featured</span>
                </div>

                {/* Years Badge */}
                <div
                  className="absolute bottom-4 left-6 px-3 py-1 bg-white/20 backdrop-blur-sm 
                                rounded-full text-white text-sm font-medium"
                >
                  {coaching.years}+ Years Legacy
                </div>
              </div>

              {/* Logo - Overlapping */}
              <div
                className="absolute left-6 top-24 w-20 h-20 bg-white rounded-2xl shadow-lg 
                              flex items-center justify-center text-4xl border-4 border-white"
              >
                {coaching.logo}
              </div>

              {/* Content */}
              <div className="pt-14 px-6 pb-6">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {coaching.name}
                  </h3>
                  <p className="text-sm text-foreground-muted italic">
                    &ldquo;{coaching.tagline}&rdquo;
                  </p>
                </div>

                {/* Speciality Badge */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full 
                                bg-primary/5 border border-primary/10 mb-4"
                >
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
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-primary">
                    {coaching.speciality}
                  </span>
                </div>

                {/* Results Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-background-secondary rounded-xl">
                  <div className="text-center">
                    <p className="font-bold text-primary text-lg">
                      {coaching.results.toppers}
                    </p>
                    <p className="text-xs text-foreground-muted">Toppers</p>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <p className="font-bold text-primary text-lg">
                      {coaching.results.selections}
                    </p>
                    <p className="text-xs text-foreground-muted">Selections</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-primary text-lg">
                      {coaching.results.airUnder100}
                    </p>
                    <p className="text-xs text-foreground-muted">AIR &lt;100</p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {coaching.features.slice(0, 3).map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-success flex-shrink-0"
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
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between py-3 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(coaching.rating) ? "text-amber-400" : "text-gray-200"}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="font-bold text-foreground">
                      {coaching.rating}
                    </span>
                    <span className="text-sm text-foreground-muted">
                      ({coaching.reviews.toLocaleString()})
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <button
                  className={`w-full mt-2 py-3.5 rounded-xl font-semibold text-white 
                                   bg-gradient-to-r ${coaching.gradient} flex items-center 
                                   justify-center gap-2 group/btn hover:shadow-lg transition-all`}
                >
                  <span>{coaching.cta}</span>
                  <svg
                    className="w-5 h-5 transition-transform group-hover/btn:translate-x-1"
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
          ))}
        </div>
      </div>
    </section>
  );
}
