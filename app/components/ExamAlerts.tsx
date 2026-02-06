"use client";

const alerts = [
  {
    id: 1,
    exam: "JEE Main 2026",
    title: "Registration Ends Soon",
    description: "Last date to apply for JEE Main April session",
    daysLeft: 5,
    type: "urgent",
    icon: "⏰",
    date: "February 11, 2026",
    link: "#",
  },
  {
    id: 2,
    exam: "NEET 2026",
    title: "Admit Card Released",
    description: "Download your NEET UG 2026 admit card now",
    daysLeft: null,
    type: "new",
    icon: "🎫",
    date: "February 5, 2026",
    link: "#",
  },
  {
    id: 3,
    exam: "CUET 2026",
    title: "Application Form Live",
    description: "CUET UG 2026 registration has started",
    daysLeft: 20,
    type: "active",
    icon: "📝",
    date: "January 25, 2026",
    link: "#",
  },
  {
    id: 4,
    exam: "CLAT 2026",
    title: "Result Declared",
    description: "Check your CLAT 2026 scores and ranks",
    daysLeft: null,
    type: "result",
    icon: "🏆",
    date: "February 3, 2026",
    link: "#",
  },
  {
    id: 5,
    exam: "NDA I 2026",
    title: "Exam Date Announced",
    description: "NDA I exam scheduled for April 13, 2026",
    daysLeft: 66,
    type: "info",
    icon: "📅",
    date: "February 1, 2026",
    link: "#",
  },
  {
    id: 6,
    exam: "CAT 2026",
    title: "Registration Opening",
    description: "CAT 2026 registration starts in August",
    daysLeft: null,
    type: "upcoming",
    icon: "🔔",
    date: "Expected: August 2026",
    link: "#",
  },
];

const getTypeStyles = (type: string) => {
  switch (type) {
    case "urgent":
      return {
        bg: "bg-red-50",
        border: "border-red-200",
        badge: "bg-red-500",
        badgeText: "Urgent",
        iconBg: "bg-red-100",
      };
    case "new":
      return {
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        badge: "bg-emerald-500",
        badgeText: "New",
        iconBg: "bg-emerald-100",
      };
    case "active":
      return {
        bg: "bg-blue-50",
        border: "border-blue-200",
        badge: "bg-blue-500",
        badgeText: "Active",
        iconBg: "bg-blue-100",
      };
    case "result":
      return {
        bg: "bg-amber-50",
        border: "border-amber-200",
        badge: "bg-amber-500",
        badgeText: "Result",
        iconBg: "bg-amber-100",
      };
    case "info":
      return {
        bg: "bg-purple-50",
        border: "border-purple-200",
        badge: "bg-purple-500",
        badgeText: "Info",
        iconBg: "bg-purple-100",
      };
    case "upcoming":
      return {
        bg: "bg-cyan-50",
        border: "border-cyan-200",
        badge: "bg-cyan-500",
        badgeText: "Upcoming",
        iconBg: "bg-cyan-100",
      };
    default:
      return {
        bg: "bg-gray-50",
        border: "border-gray-200",
        badge: "bg-gray-500",
        badgeText: "Update",
        iconBg: "bg-gray-100",
      };
  }
};

export default function ExamAlerts() {
  return (
    <section
      id="alerts"
      className="relative py-20 lg:py-28 bg-background-secondary overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 border border-warning/20 mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-warning"></span>
              </span>
              <span className="text-sm font-medium text-warning">
                Live Updates
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Exam Alerts & Deadlines
            </h2>
            <p className="text-lg text-foreground-secondary max-w-xl">
              Never miss important dates. Get real-time notifications for
              registrations, admit cards, and results.
            </p>
          </div>
          <button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold 
                             btn-primary text-white whitespace-nowrap self-start lg:self-auto"
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
            <span>Subscribe to All Alerts</span>
          </button>
        </div>

        {/* Alerts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alerts.map((alert, index) => {
            const styles = getTypeStyles(alert.type);
            return (
              <div
                key={alert.id}
                className={`group relative ${styles.bg} ${styles.border} border-2 rounded-2xl p-6 
                            card-hover cursor-pointer overflow-hidden`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 text-xs font-bold text-white ${styles.badge} rounded-full`}
                  >
                    {styles.badgeText}
                  </span>
                </div>

                {/* Content */}
                <div className="flex gap-4">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 ${styles.iconBg} rounded-xl flex items-center justify-center 
                                  text-2xl flex-shrink-0`}
                  >
                    {alert.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Exam Name */}
                    <p className="text-sm font-medium text-foreground-muted mb-1">
                      {alert.exam}
                    </p>

                    {/* Title */}
                    <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {alert.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-foreground-secondary mb-3">
                      {alert.description}
                    </p>

                    {/* Date & Days Left */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 text-sm text-foreground-muted">
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
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{alert.date}</span>
                      </div>
                      {alert.daysLeft !== null && (
                        <span
                          className={`px-2 py-0.5 text-xs font-bold rounded-full 
                          ${
                            alert.daysLeft <= 7
                              ? "bg-red-100 text-red-600"
                              : alert.daysLeft <= 30
                                ? "bg-amber-100 text-amber-600"
                                : "bg-green-100 text-green-600"
                          }`}
                        >
                          {alert.daysLeft} days left
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Subscribe Button */}
                <button
                  className="mt-4 w-full py-2.5 rounded-lg text-sm font-semibold 
                                   bg-white border border-gray-200 text-foreground-secondary
                                   hover:border-primary hover:text-primary transition-all
                                   flex items-center justify-center gap-2 group/btn"
                >
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
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span>Subscribe Alert</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm text-foreground-secondary">
                Get alerts via SMS, Email & WhatsApp
              </span>
            </div>
            <div className="w-px h-6 bg-gray-200" />
            <div className="flex items-center gap-2">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm text-foreground-secondary">
                Real-time updates
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
