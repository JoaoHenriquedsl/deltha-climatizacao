import Button from "../../UI/Button/Button";
import './AreReady.css'

const AreReady = () => {
  return (
    <section className="are-ready" id="ready">
      <h1>Pronto para climatizar seu ambiente?</h1>
      <p>
        Fale comigo agora e receba um orçamento gratuito e sem compromisso.
        Atendimento rápido e profissional em Americana e região.
      </p>
      <Button className="ready-btn cta" href="https://wa.me/19971313824">Falar com um Técnico no WhatsApp</Button>
    </section>
  );
};

export default AreReady;
