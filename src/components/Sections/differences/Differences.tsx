import "./Differences.css";
import { FiClock, FiCreditCard, FiShield } from "react-icons/fi";

const Differences = () => {
  return (
    <section className="differences" id="differences">
      <div className="differences-itens">
        <div className="guarantee difference">
          <FiShield className="icon" />
          Garantia de 90 Dias
        </div>
        <div className="fast difference">
          <FiClock className="icon" />
          Visita Rápida na Região
        </div>
        <div className="payment difference">
          <FiCreditCard className="icon" />
          Pagamento Facilitado
        </div>
      </div>
    </section>
  );
};

export default Differences;
