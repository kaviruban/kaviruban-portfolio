import { useEffect, useRef, useState } from "react";
import "./App.css";
import { IntroScreen } from "./components/IntroScreen";
import { Navigation } from "./components/Navigation";
import {
  ContactView,
  ExperienceView,
  HomeView,
  ToolkitView,
} from "./components/PortfolioSections";
import { greetings, navigation, type View } from "./data/portfolio";

function App() {
  const [activeView, setActiveView] = useState<View | null>("home");
  const [isDark, setIsDark] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const programmaticTarget = useRef<View | null>(null);

  const changeView = (view: View) => {
    setActiveView(view);
    programmaticTarget.current = view;
    document
      .getElementById(view)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);
    let frame = 0;
    const updateActiveView = () => {
      const navigationOffset = window.innerWidth <= 800 ? 24 : 92;
      const isAtDocumentEnd =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4;
      if (programmaticTarget.current) return;
      if (isAtDocumentEnd) {
        setActiveView("contact");
        return;
      }
      const currentSection = sections.reduce(
        (current, section) =>
          section.getBoundingClientRect().top <= navigationOffset + 8
            ? section
            : current,
        sections[0],
      );
      if (currentSection) setActiveView(currentSection.id as View);
    };
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveView);
    };
    const handleScrollEnd = () => {
      programmaticTarget.current = null;
      updateActiveView();
    };
    const handleManualScroll = () => {
      programmaticTarget.current = null;
      updateActiveView();
    };
    updateActiveView();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("scrollend", handleScrollEnd);
    window.addEventListener("wheel", handleManualScroll, { passive: true });
    window.addEventListener("touchstart", handleManualScroll, {
      passive: true,
    });
    window.addEventListener("pointerdown", handleManualScroll, {
      passive: true,
    });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("scrollend", handleScrollEnd);
      window.removeEventListener("wheel", handleManualScroll);
      window.removeEventListener("touchstart", handleManualScroll);
      window.removeEventListener("pointerdown", handleManualScroll);
    };
  }, []);

  useEffect(() => {
    const introTimer = window.setTimeout(() => setHasEntered(true), 1100);
    return () => window.clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    const greetingTimer = window.setInterval(
      () => setGreetingIndex((index) => (index + 1) % greetings.length),
      1800,
    );
    return () => window.clearInterval(greetingTimer);
  }, []);

  return (
    <div className={`site-shell ${isDark ? "theme-dark" : "theme-light"}`}>
      <IntroScreen
        greeting={greetings[greetingIndex]}
        hasEntered={hasEntered}
      />
      <Navigation
        activeView={activeView}
        isDark={isDark}
        onNavigate={changeView}
        onToggleTheme={() => setIsDark((dark) => !dark)}
      />
      <main className="view-stage">
        <HomeView onNavigate={changeView} />
        <ExperienceView />
        <ToolkitView />
        <ContactView />
      </main>
    </div>
  );
}

export default App;
