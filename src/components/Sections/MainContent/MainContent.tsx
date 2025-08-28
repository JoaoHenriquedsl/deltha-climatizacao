import Button from "../../UI/Button/Button";
import "./MainContent.css";

const Main = () => {
  return (
    <main id="main">
      <header>
        <h1 className="headline">
          Ar-Condicionado em Americana?
          <br />
          <span className="iceColor">
            Instalação e Manutenção Rápida e Garantida.
          </span>
        </h1>
        <p className="subHeadLine">
          Soluções completas com garantia de 90 dias. Atendimento em toda a
          região. Peça seu orçamento gratuito pelo WhatsApp!
        </p>
      </header>
      <div className="cta-container">
        <Button className="firstCta cta" href="https://wa.me/19971313824">
          Pedir Orçamento no WhatsApp
        </Button>
        <Button className="secondCta" href="#services">
          Conhecer Serviços
        </Button>
      </div>
    </main>
  );
};

export default Main;
