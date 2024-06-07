import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Info from "@/components/Info";
import PopupIframe from "@/components/PopupVideo ";
import Work from "@/components/Work";
import { LampDemo } from "@/components/ui/lamp";

export default function Home() {
  return (
    <>
      <LampDemo />
      <HeroSection />
      <Info />
      <Work />
      <Footer />

    </>
  );
}
