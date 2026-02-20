import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Stats } from "./components/Stats";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import HowItWorksSection from "./components/HowItWorksSection";
export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f4ff]">
      <Header />
      <main>
        <Hero />
        <HowItWorksSection />
        <Features />
        <Stats />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
