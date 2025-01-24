export const metadata = {
  title: "Home - Ivan Starčević",
  description:
    "Ivan Starčević is a web developer  based in Zagreb, Croatia. Specializing in creating responsive, user-friendly websites tailored to elevate your business.",
};
import ScrollProgress from "@/components/ui/scroll-progress";
import Hero from "@/components/hero";
import PressLogos from "@/components/press-logos";
import Features02 from "@/components/features-02";

import CallToActionSection from "@/components/cta-magicui";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <PressLogos />
      <Features02 />
      <CallToActionSection />
      <Contact />
    </>
  );
}
