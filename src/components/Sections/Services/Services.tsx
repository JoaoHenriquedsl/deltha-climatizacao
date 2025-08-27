import { FaWind } from "react-icons/fa";
import "./Services.css";
import { FiSun } from "react-icons/fi";
import { LuWrench } from "react-icons/lu";
import { GoShieldCheck } from "react-icons/go";
import CardService from "../../UI/CardService/CardService";
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
        <CardService
          icon={<FaWind />}
          title="Instalação Completa"
          button="Quero Instalar"
        >
          Instalação de modelos Split e outros, com vácuo, teste de
          estanqueidade e orientação de uso para máxima eficiência.
        </CardService>

        <CardService
          icon={<FiSun />}
          title="Limpeza e Higienização"
          button="Agendar Limpeza"
        >
          Limpeza profunda de filtros e serpentinas para garantir um ar mais
        </CardService>

        <CardService
          icon={<LuWrench />}
          title="Manutenção Corretiva"
          button="Resolver um Problema"
        >
          Diagnóstico e reparo rápido de defeitos, vazamentos de gás e problemas
          de performance do seu aparelho.
        </CardService>

        <CardService
          icon={<GoShieldCheck />}
          title="Manutenção Preventiva"
          button="Saiba Mais"
        >
          Manutenção periódica para aumentar a vida útil e a eficiência
          energética do seu ar-condicionado.
        </CardService>
      </div>
    </section>
  );
};

export default Services;
