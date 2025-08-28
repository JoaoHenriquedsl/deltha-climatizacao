import "./FAQSection.css";
import FAQ from "../../UI/FAQ/FAQ";

const FAQSection = () => {
  return (
    <section className="FAQSection">
      <h1>Dúvidas Frequentes</h1>
      <FAQ title="Qual a capacidade (BTUs) ideal para meu ambiente?">
        O cálculo de BTUs depende de fatores como o tamanho do cômodo (m²),
        incidência de sol, número de pessoas e aparelhos eletrônicos. Para um
        orçamento preciso, entre em contato e nos informe essas características
        para uma recomendação exata.
      </FAQ>
      <FAQ title="Com que frequência devo fazer a limpeza do ar-condicionado?">
        Para ambientes residenciais, recomendamos uma limpeza completa a cada 6
        meses ou, no máximo, anualmente. Em ambientes comerciais com alto fluxo,
        a frequência pode ser trimestral. A limpeza garante a qualidade do ar e
        a eficiência energética do aparelho.
      </FAQ>
      <FAQ title="Quais formas de pagamento vocês aceitam?">
        Aceitamos pagamento via Pix, dinheiro e cartões de crédito e débito, com
        possibilidade de parcelamento (com taxas da maquininha).
      </FAQ>
      <FAQ title="Vocês oferecem garantia para os serviços?">
        Sim! Oferecemos uma garantia padrão de 365 dias para todos os nossos
        serviços de instalação e manutenção, assegurando a qualidade e sua
        tranquilidade.
      </FAQ>
    </section>
  );
};

export default FAQSection;
