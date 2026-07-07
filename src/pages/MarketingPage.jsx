import Nav from "../components/Nav";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-paper font-body text-ink">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
