import "@/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import {
  Header,
  HeroSection,
  ShowcaseSection,
  StatsSection,
  HowItWorksSection,
  HousingSection,
  DonationsSection,
  JobsSection,
  PartnersSection,
  TeamSection,
  TestimonialsSection,
  ContactSection,
  FinalCTASection,
  Footer,
} from "./components/sections";

// Main Landing Page
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-accent noise-overlay" data-testid="landing-page">
      <Header />
      <main>
        <HeroSection />
        <ShowcaseSection />
        <StatsSection />
        <HowItWorksSection />
        <HousingSection />
        <DonationsSection />
        <JobsSection />
        <PartnersSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" richColors />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
