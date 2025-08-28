import { useEffect, useState } from "react";
import "./Navbar.css";
import Button from "../../UI/Button/Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={isScrolled ? "isNavScrolled" : "nav"}>
      {/* Logo */}
      <a href="#">
        <div className="logo">Deltha Climatização</div>
      </a>
      {/* Nav Links */}
      <ul className="nav-links">
        <li>
          <a href="#main">Home</a>
        </li>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#FAQSection">Dúvidas</a>
        </li>
      </ul>
      {/* Orçamento botão */}
      <Button className="cta" href="#">
        Orçamento WhatsApp
      </Button>
    </nav>
  );
};

export default Navbar;
