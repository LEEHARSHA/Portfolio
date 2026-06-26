import { useState, lazy, Suspense } from "react";
import { useLenis } from "./hooks/useLenis";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { CustomCursor, LoadingScreen } from "./components/ui/CustomCursor";
import { GridBackground, GradientBlobs, SpotlightEffect } from "./components/ui/BackgroundEffects";
import { Hero } from "./sections/Hero";
import { useMediaQuery } from "./hooks/useInView";

const About = lazy(() => import("./sections/About").then((m) => ({ default: m.About })));
const Services = lazy(() => import("./sections/Services").then((m) => ({ default: m.Services })));
const Portfolio = lazy(() => import("./sections/Portfolio").then((m) => ({ default: m.Portfolio })));
const Contact = lazy(() => import("./sections/Contact").then((m) => ({ default: m.Contact })));

function SectionFallback() {
  return <div className="section-padding animate-pulse bg-transparent" />;
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  useLenis();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      <div className={isMobile ? "" : "hide-cursor"}>
        <ScrollProgress />
        {!isMobile && <CustomCursor />}
        <GridBackground />
        <GradientBlobs />
        <SpotlightEffect />

        <Navbar />

        <main>
          <Hero />

          <Suspense fallback={<SectionFallback />}>
            <About />
            <Services />
            <Portfolio />
            <Contact />
          </Suspense>
        </main>

        <Footer />
      </div>
    </>
  );
}
