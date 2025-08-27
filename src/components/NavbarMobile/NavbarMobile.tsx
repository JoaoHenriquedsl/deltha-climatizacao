import { FaBars } from "react-icons/fa";
import "./NavbarMobile.css";
import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";

const NavbarMobile = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menu = useRef<HTMLDivElement>(null);
  const close = useRef<HTMLDivElement>(null);
  const navLinks = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    if (isMenuOpen) {
      menu.current?.classList.remove("hidden");
      close.current?.classList.add("hidden");
      navLinks.current?.classList.remove("nav-active");
      setIsMenuOpen(false);
    } else {
      menu.current?.classList.add("hidden");
      close.current?.classList.remove("hidden");
      navLinks.current?.classList.add("nav-active");
      setIsMenuOpen(true);
    }
  };

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
        <button className="cta-mobile cta">
          <a href="#">Orçamento WhatsApp</a>
        </button>
      </div>
    </nav>
  );
};

export default NavbarMobile;
