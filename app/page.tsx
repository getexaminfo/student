import Header from "./components/Header";
import Hero from "./components/Hero";
import ExamDiscovery from "./components/ExamDiscovery";
import CoachingDiscovery from "./components/CoachingDiscovery";
import PersonalizationHook from "./components/PersonalizationHook";
import ExamAlerts from "./components/ExamAlerts";
import FeaturedCoaching from "./components/FeaturedCoaching";
import StudentTools from "./components/StudentTools";
import TrustSection from "./components/TrustSection";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ExamDiscovery />
        <CoachingDiscovery />
        <PersonalizationHook />
        <ExamAlerts />
        <FeaturedCoaching />
        <StudentTools />
        <TrustSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
