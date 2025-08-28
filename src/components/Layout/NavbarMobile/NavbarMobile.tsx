import { FaBars } from "react-icons/fa";
import "./NavbarMobile.css";
import { useEffect, useRef, useState, useCallback } from "react";
import { IoClose } from "react-icons/io5";

const NavbarMobile = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menu = useRef<HTMLDivElement>(null);
  const close = useRef<HTMLDivElement>(null);
  const navLinks = useRef<HTMLDivElement>(null)

  const toggleMenu = useCallback(() => {
    menu.current?.classList.toggle("hidden");
    close.current?.classList.toggle("hidden");
    navLinks.current?.classList.toggle("nav-active");
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 10) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return ()=> window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={
        isScrolled ? "isNavScrolled" : isMenuOpen ? "isNavScrolled" : "nav"
      }
    >
      {/* Logo */}
      <a href="#">
        <div className="logo">Deltha Climatização</div>
      </a>
      {/* Nav Links */}
      <div ref={menu} onClick={toggleMenu}>
        <FaBars className="menu-icon" />
      </div>
      <div ref={close} className="hidden" onClick={toggleMenu}>
        <IoClose className="close-icon" />
      </div>
      <div ref={navLinks} className="nav-mobile">
        <ul className="nav-links-mobile">
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
        <button className="cta-mobile cta">
          <a href="#">Orçamento WhatsApp</a>
        </button>
      </div>
    </nav>
  );
};

export default NavbarMobile;
