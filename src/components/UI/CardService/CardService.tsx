import "./CardService.css";
type Props = {
  icon: React.ReactNode;
  title: string;
  button: string;
  children: React.ReactNode;
};

const CardService = ({ icon, title, button, children }: Props) => {
  return (
    <div className="service-card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{children}</p>
      <button className="card-button">{button}</button>
    </div>
  );
};

export default CardService;
