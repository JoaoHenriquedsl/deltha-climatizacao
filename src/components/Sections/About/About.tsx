import Button from "../../UI/Button/Button";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-left">
        <h2>Prazer, sou Eduardo Vela Luiz</h2>
        <p>
          Com anos de experiência no mercado de climatização em Americana e
          região, meu compromisso na Deltha Climatização é oferecer um serviço
          técnico, honesto e de confiança. Cada instalação é tratada com o
          máximo cuidado para garantir seu conforto e segurança.
        </p>
        <Button className="about-cta cta" href="https://wa.me/19971313824">
          Fale Comigo
        </Button>
      </div>
    </section>
  );
};

export default About;
