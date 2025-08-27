import "./TestimonialCard.css";
import { MdOutlineStarPurple500 } from "react-icons/md";

type Props = {
  children: React.ReactNode;
  name: string;
};

const TestimonialCard = ({ children, name }: Props) => {
  return (
    <div className="testimonial-card">
      <div className="stars">
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
      </div>
      <p>{children}</p>
      <h4>{name}</h4>
    </div>
  );
};

export default TestimonialCard;
