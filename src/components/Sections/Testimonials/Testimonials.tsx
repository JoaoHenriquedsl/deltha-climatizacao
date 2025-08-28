import TestimonialCard from "../../UI/TestimonialCard/TestimonialCard";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials-container" id="testimonials">
      <h1>O que nossos clientes dizem</h1>
      <div className="testimonials">
        <TestimonialCard name="Maria S., Americana-SP">
          "Serviço impecável,  Eduardo. Foi rápido, explicou todo o processo de
          instalação e deixou tudo limpo. O ar ficou perfeito. Muito obrigada"
        </TestimonialCard>
        <TestimonialCard name="Carlos P., Santa Bárbara d'Oeste">
          "Só pra avisar que resolveu mesmo o vazamento. O ar tá gelando que é
          uma beleza! Finalmente achei alguém pra mexer nisso. Valeu pelo
          serviço"
        </TestimonialCard>
        <TestimonialCard name="Fernanda L., Nova Odessa">
          "Oi Eduardo, a limpeza ficou ótima, a diferença no ar que a gente
          respira é nítida. Parece até que o ar tá mais leve sabe? Serviço nota
          10, com certeza chamarei de novo. Obrigada! <span style={{fontStyle: 'normal'}}>😊</span>"
        </TestimonialCard>
      </div>
    </section>
  );
};

export default Testimonials;
