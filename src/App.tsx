import { useState, useEffect } from "react";
import "./App.css";
import Differences from "./components/Sections/differences/Differences";
import Main from "./components/Sections/MainContent/MainContent";
import Navbar from "./components/Layout/Navbar/Navbar";
import NavbarMobile from "./components/Layout/NavbarMobile/NavbarMobile";
import Services from "./components/Sections/Services/Services";
import About from "./components/Sections/About/About";
import Testimonials from "./components/Sections/Testimonials/Testimonials";
import FAQSection from "./components/Sections/FAQSection/FAQSection";
import AreReady from "./components/Sections/AreReady/AreReady";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {windowWidth > 992 ? <Navbar /> : <NavbarMobile />}
      <Main />
      <Differences />
      <Services />
      <About />
      <Testimonials />
      <FAQSection />
      <AreReady />
    </>
  );
}

export default App;
