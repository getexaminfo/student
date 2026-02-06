"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 50000, suffix: "+", label: "Students Helped", icon: "👨‍🎓" },
  { number: 1200, suffix: "+", label: "Coaching Partners", icon: "🏛️" },
  { number: 20, suffix: "+", label: "Exams Covered", icon: "📋" },
  { number: 100, suffix: "+", label: "Cities", icon: "🏙️" },
];

const testimonials = [
  {
    id: 1,
    name: "Aditya Sharma",
    avatar: "👨‍🎓",
    exam: "JEE Advanced",
    rank: "AIR 156",
    quote:
      "Get Exam Info helped me find the perfect coaching in Kota. The alerts feature never let me miss any deadline. Highly recommended!",
    rating: 5,
    city: "Kota",
  },
  {
    id: 2,
    name: "Priya Patel",
    avatar: "👩‍🎓",
    exam: "NEET UG",
    rank: "AIR 89",
    quote:
      "The comparison feature helped me choose between multiple coachings. Mock tests and study materials were incredibly helpful.",
    rating: 5,
    city: "Delhi",
  },
  {
    id: 3,
    name: "Rahul Verma",
    avatar: "👨‍💻",
    exam: "CAT",
    rank: "99.5 %ile",
    quote:
      "Switched to online coaching after finding it here. The reviews and ratings gave me confidence in my decision.",
    rating: 5,
    city: "Mumbai",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    avatar: "👩‍⚕️",
    exam: "NEET PG",
    rank: "Rank 234",
    quote:
      "Best platform for medical entrance preparation resources. The exam predictor was surprisingly accurate!",
    rating: 5,
    city: "Hyderabad",
  },
];

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function TrustSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 mb-6">
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-sm font-medium text-success">
                Trusted by Students
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Numbers That Speak
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="relative group bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 
                           shadow-sm hover:shadow-xl transition-all text-center overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover Gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 
                                opacity-0 group-hover:opacity-100 transition-opacity"
                />

                <div className="relative">
                  <span className="text-4xl mb-4 block">{stat.icon}</span>
                  <div className="font-display text-3xl lg:text-4xl font-bold text-primary mb-2">
                    <CountUp end={stat.number} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-foreground-secondary font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              What Students Say
            </h3>
            <p className="text-foreground-secondary">
              Real success stories from students across India
            </p>
          </div>

          {/* Testimonials Slider */}
          <div className="relative max-w-4xl mx-auto">
            {/* Main Testimonial */}
            <div className="bg-gradient-to-br from-primary via-primary-dark to-primary rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
              {/* Pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/20 rounded-full blur-3xl" />

              {/* Quote Icon */}
              <svg
                className="absolute top-8 left-8 w-16 h-16 text-white/10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <div className="relative">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`transition-all duration-500 ${
                      index === activeTestimonial
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 absolute inset-0"
                    }`}
                  >
                    {/* Profile */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-display text-xl font-bold">
                          {testimonial.name}
                        </h4>
                        <div className="flex items-center gap-2 text-white/70">
                          <span>{testimonial.exam}</span>
                          <span>•</span>
                          <span className="text-accent-light font-semibold">
                            {testimonial.rank}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg lg:text-xl text-white/90 leading-relaxed mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    {/* Rating & City */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-amber-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-white/60">
                        <svg
                          className="w-4 h-4"
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
                        <span className="text-sm">{testimonial.city}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial
                      ? "bg-primary w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
