import "./CardService.css";
type Props = {
  icon: React.ReactNode;
  title: string;
  buttonText: string;
  children: React.ReactNode;
};

const CardService = ({ icon, title, buttonText, children }: Props) => {
  return (
    <div className="service-card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{children}</p>
      <button className="card-button" ><a href="https://wa.me/19971313824">{buttonText}</a></button>
    </div>
  );
};

export default CardService;
