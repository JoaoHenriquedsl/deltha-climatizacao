import "./MainContent.css";

const Main = () => {
  return (
    <main>
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
        <button className="firstCta cta">Pedir Orçamento no WhatsApp</button>
        <a className="secondCta">Conhecer Serviços</a>
      </div>
    </main>
  );
};

export default Main;
