import { useState, useEffect } from "react";
import "./App.css";
import Differences from "./components/differences/Differences";
import Main from "./components/MainContent/MainContent";
import Navbar from "./components/Navbar/Navbar";
import NavbarMobile from "./components/NavbarMobile/NavbarMobile";
import Services from "./components/Services/Services";

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
    </>
  );
}

export default App;
