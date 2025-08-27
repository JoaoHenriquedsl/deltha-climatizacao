import { FaWind } from "react-icons/fa";
import "./Services.css";
import { FiSun } from "react-icons/fi";
import { LuWrench } from "react-icons/lu";
import { GoShieldCheck } from "react-icons/go";
const Services = () => {
  return (
    <section className="services">
      <div className="services-header">
        <h1 className="services-title">Nossos Serviços de Climatização</h1>
        <p className="services-subtitle">
          Soluções completas para seu conforto e bem-estar
        </p>
      </div>

      <div className="services-cards">
        <div className="service-card">
          <div className="card-icon">
            <FaWind />
          </div>
          <h3 className="card-title">Instalação Completa</h3>
          <p className="card-description">
            Instalação de modelos Split e outros, com vácuo, teste de
            estanqueidade e orientação de uso para máxima eficiência.
          </p>
          <button className="card-button">Quero instalar</button>
        </div>

        <div className="service-card">
          <div className="card-icon">
            <FiSun />
          </div>
          <h3 className="card-title">Limpeza e Higienização</h3>
          <p className="card-description">
            Limpeza profunda de filtros e serpentinas para garantir um ar mais
            puro, livre de ácaros e bactérias.
          </p>
          <button className="card-button">Agendar Limpeza</button>
        </div>

        <div className="service-card">
          <div className="card-icon">
            <LuWrench />
          </div>
          <h3 className="card-title">Manutenção Corretiva</h3>
          <p className="card-description">
            Diagnóstico e reparo rápido de defeitos, vazamentos de gás e
            problemas de performance do seu aparelho.
          </p>
          <button className="card-button">Resolver um Problema</button>
        </div>

        <div className="service-card">
          <div className="card-icon">
            <GoShieldCheck />
          </div>
          <h3 className="card-title">Manutenção Preventiva</h3>
          <p className="card-description">
            Planos de manutenção periódica para aumentar a vida útil e a
            eficiência energética do seu ar-condicionado.
          </p>
          <button className="card-button">Saiba Mais</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
