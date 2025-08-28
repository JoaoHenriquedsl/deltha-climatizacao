import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <h3>Deltha Climatização</h3>
      <div className="links">
        <a href="https://wa.me/seuNumeroAqui" target="_blank">
          WhatsApp
        </a>
        <span>•</span>
        <a href="https://instagram.com/seuInstagram" target="_blank">
          Instagram
        </a>
      </div>
      <span className="copyright">
        © 2025 Deltha Climatização. Todos os direitos reservados.
      </span>
    </footer>
  );
}
