import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import Possibilities from "@/components/home/Possibilities";
import Positioning from "@/components/home/Positioning";
import Portfolio from "@/components/home/Portfolio";
import PrintSection from "@/components/home/PrintSection";
import Process from "@/components/home/Process";
import AboutTeaser from "@/components/home/AboutTeaser";
import CTAFinal from "@/components/home/CTAFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Possibilities />
      <Positioning />
      <Portfolio />
      <PrintSection />
      <Process />
      <AboutTeaser />
      <CTAFinal />
    </>
  );
}
