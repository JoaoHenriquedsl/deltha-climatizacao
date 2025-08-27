import { useEffect, useState } from "react";
import "./Navbar.css";
import Button from "../../UI/Button/Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 10) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
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
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Contato</a>
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
