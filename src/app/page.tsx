import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import StorySection from "../../components/StorySection";
import FeatureSection from "../../components/FeatureSection";
import ComingSoonSection from "../../components/ComingSoonSection";
import DownloadCTA from "../../components/DownloadCTA";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StorySection />
        <FeatureSection />
        <ComingSoonSection />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
